import { expect, test } from "@playwright/test";

const requiredLinks = [
  { name: "View LinkedIn", href: "https://www.linkedin.com/in/scott-whitlock/" },
  { name: "GitHub", href: "https://github.com/digiscott" },
  { name: "Site Repo", href: "https://github.com/digiscott/business-card" },
  { name: "Download Resume", href: "/resume/Scott-Whitlock-Product-Manager-Resume.pdf" },
  {
    name: "Career Advocate",
    href: "https://chatgpt.com/g/g-6a09bab5746c819183713ef3cf9d1f87-digiscott-career-advocate",
  },
];

test.describe("home page responsive UI", () => {
  test("renders key sections and links without horizontal overflow", async ({ page }, testInfo) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Scott Whitlock" })).toBeVisible();
    await expect(page.getByText("Available for remote or Cincinnati-area Product Manager roles.")).toBeVisible();
    await expect(page.getByRole("heading", { name: "What I Bring" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "How Scott Works in Practice" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Choose the Best Next Step" })).toBeVisible();

    await expect(page.getByRole("heading", { name: "Tic Tac Pro Game App" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Tabletop Game Library Manager" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Desktop Buddy" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Exam Room Education" })).toBeVisible();
    await expect(page.getByRole("link", { name: "View use case" }).first()).toHaveAttribute(
      "href",
      "/use-cases/portfolio-site-ai-career-advocate",
    );
    await expect(page.getByRole("heading", { name: "Start a direct conversation with Scott." })).toBeVisible();

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
    await expect(mobileNavigation.getByRole("link", { name: "Use Cases" })).toBeVisible();
    await expect(mobileNavigation.getByRole("link", { name: "Contact" })).toBeVisible();

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
});
