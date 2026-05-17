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
  profile.metadata.title,
  profile.metadata.description,
  ...profile.focusAreas,
  ...profile.strengths.flatMap((strength) => [strength.title, strength.description]),
  ...profile.about.flatMap((item) => [item.title, item.body]),
  ...profile.learnMoreLinks.flatMap((link) => [link.label, link.description]),
];

describe("profile content", () => {
  it("has core identity fields", () => {
    expect(profile.name).toBe("Scott Whitlock");
    expect(profile.role).toBe("Product Manager");
    expect(profile.availability).toContain("Available now");
  });

  it("has required links", () => {
    expect(profile.linkedInUrl).toContain("linkedin.com/in/scott-whitlock");
    expect(profile.resumeUrl).toMatch(/\.pdf$/);
    expect(profile.careerAdvocateUrl).toBe(
      "https://chatgpt.com/g/g-6a09bab5746c819183713ef3cf9d1f87-digiscott-career-advocate",
    );
    expect(profile.learnMoreLinks.find((link) => link.label === "Ask Scott's Career Advocate")?.href).toBe(
      profile.careerAdvocateUrl,
    );
    expect(profile.emailHref).toMatch(/^mailto:/);
    expect(profile.phoneHref).toMatch(/^tel:/);
  });

  it("has the expected section content", () => {
    expect(profile.strengths).toHaveLength(6);
    expect(profile.about.length).toBeGreaterThan(0);
    expect(profile.metadata.title).toBeTruthy();
    expect(profile.metadata.description).toBeTruthy();
  });

  it("does not expose street addresses or employer timeline content in visible fields", () => {
    const combined = visibleTextFields.join("\n").toLowerCase();

    expect(combined).not.toMatch(/\b\d{3,5}\s+[a-z0-9.'-]+\s+(street|st\.|avenue|ave\.|road|rd\.|drive|dr\.)\b/);
    expect(combined).not.toContain("employer timeline");
  });
});
