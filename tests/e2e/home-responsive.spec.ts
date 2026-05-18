import { expect, test } from "@playwright/test";

const requiredLinks = [
  { name: "View LinkedIn", href: "https://www.linkedin.com/in/scott-whitlock/" },
  { name: "View GitHub", href: "https://github.com/digiscott" },
  { name: "Career Site Repo", href: "https://github.com/digiscott/business-card" },
  { name: "Download Resume", href: "/resume/Scott-Whitlock-Product-Manager-Resume.pdf" },
  {
    name: "Ask Scott's Career Advocate",
    href: "https://chatgpt.com/g/g-6a09bab5746c819183713ef3cf9d1f87-digiscott-career-advocate",
  },
];

test.describe("home page responsive UI", () => {
  test("renders key sections and links without horizontal overflow", async ({ page }, testInfo) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Scott Whitlock" })).toBeVisible();
    await expect(page.getByText("Available now · Remote or Cincinnati-area")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Use the right follow-up path for the conversation." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Interested in discussing a Product Management role?" })).toBeVisible();

    for (const link of requiredLinks) {
      await expect(page.getByRole("link", { name: link.name }).first()).toHaveAttribute("href", link.href);
    }

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);

    await page.screenshot({
      path: testInfo.outputPath(`home-${testInfo.project.name}.png`),
      fullPage: true,
    });
  });

  test("keeps primary navigation collapsed but accessible on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const menu = page.getByText("Menu", { exact: true });
    await expect(menu).toBeVisible();
    await expect(page.getByRole("navigation", { name: "Mobile primary navigation" })).toBeHidden();

    await menu.click();

    const mobileNavigation = page.getByRole("navigation", { name: "Mobile primary navigation" });
    await expect(mobileNavigation).toBeVisible();
    await expect(mobileNavigation.getByRole("link", { name: "Career Advocate" })).toBeVisible();
    await expect(mobileNavigation.getByRole("link", { name: "Contact" })).toBeVisible();

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
});
