import { describe, expect, it } from "vitest";
import { profile } from "../content/profile";

const visibleTextFields = [
  profile.name,
  profile.role,
  profile.availability,
  profile.locationPreference,
  profile.roleSoughtLine,
  profile.positioning,
  profile.shortBio,
  profile.heroSupportingCopy,
  profile.heroAvailabilityLine,
  profile.metadata.title,
  profile.metadata.description,
  ...profile.focusAreas,
  ...profile.capabilities.flatMap((capability) => [capability.title, capability.description]),
  ...profile.useCases.flatMap((useCase) => [
    useCase.title,
    useCase.description,
    useCase.category ?? "",
    useCase.linkLabel ?? "",
    ...(useCase.tags ?? []),
  ]),
  ...profile.learnMoreLinks.flatMap((link) => [link.label, link.description]),
];

describe("profile content", () => {
  it("has core identity fields", () => {
    expect(profile.name).toBe("Scott Whitlock");
    expect(profile.role).toBe("Product Manager");
    expect(profile.availability).toContain("Available now");
    expect(profile.roleSoughtLine).toContain("complex workflows");
    expect(profile.heroAvailabilityLine).toContain("remote or Cincinnati-area");
  });

  it("has required links", () => {
    expect(profile.linkedInUrl).toBe("https://www.linkedin.com/in/scott-whitlock-a73953a/");
    expect(profile.githubUrl).toBe("https://github.com/digiscott");
    expect(profile.careerSiteRepositoryUrl).toBe("https://github.com/digiscott/business-card");
    expect(profile.resumeUrl).toMatch(/\.pdf$/);
    expect(profile.resumeUrl).toBe("/resume/Scott_Whitlock_Resume_Updated.pdf");
    expect(profile.careerAdvocateUrl).toBe(
      "https://chatgpt.com/g/g-6a09bab5746c819183713ef3cf9d1f87-digiscott-career-advocate",
    );
    expect(profile.learnMoreLinks.find((link) => link.label === "GitHub")?.href).toBe(profile.githubUrl);
    expect(profile.learnMoreLinks.find((link) => link.label === "Site Repo")?.href).toBe(
      profile.careerSiteRepositoryUrl,
    );
    expect(profile.learnMoreLinks.find((link) => link.label === "Career Advocate")?.href).toBe(
      profile.careerAdvocateUrl,
    );
    expect(profile.emailHref).toMatch(/^mailto:/);
    expect(profile.phoneHref).toMatch(/^tel:/);
  });

  it("has simplified capability and use case content", () => {
    expect(profile.capabilities).toHaveLength(4);
    expect(profile.useCases.length).toBeGreaterThanOrEqual(3);
    expect(profile.useCases.map((useCase) => useCase.title)).toEqual(
      expect.arrayContaining([
        "Portfolio Site and AI Career Advocate",
        "Tabletop Game Library Manager",
        "Desktop Buddy",
        "Exam Room Education",
      ]),
    );
    expect(profile.useCases.map((useCase) => useCase.title)).not.toContain("Tic Tac Pro Game App");
    expect(profile.useCases.find((useCase) => useCase.title === "Tabletop Game Library Manager")?.cardImage?.src).toBe(
      "/images/tabletop-splash.png",
    );
    expect(profile.headshotUrl).toMatch(/^data:image\/png;base64,/);
    expect(profile.useCases.every((useCase) => useCase.href === `/use-cases/${useCase.slug}`)).toBe(true);
    expect(profile.useCases.every((useCase) => useCase.linkLabel === "View use case")).toBe(true);
    expect(profile.useCases.every((useCase) => useCase.detail.sections.length > 0)).toBe(true);
    expect(profile.metadata.title).toBeTruthy();
    expect(profile.metadata.description).toBeTruthy();
  });

  it("does not expose street addresses or employer timeline content in visible fields", () => {
    const combined = visibleTextFields.join("\n").toLowerCase();

    expect(combined).not.toMatch(/\b\d{3,5}\s+[a-z0-9.'-]+\s+(street|st\.|avenue|ave\.|road|rd\.|drive|dr\.)\b/);
    expect(combined).not.toContain("employer timeline");
  });
});
