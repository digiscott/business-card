# Design Direction

## Visual tone

Modern but personable.

The site should feel:

- Product-led
- Warm
- Clear
- Confident
- Creative
- Approachable
- Professional enough for hiring staff

## Brand direction

Use Scott's name as the main brand.

Main brand:

> Scott Whitlock

Supporting role:

> Product Manager

Do not create a separate brand name such as “Digiscott Career Portfolio.”

## Visual inspiration

Early inspiration:

- covid-doodles.digiscott.com
- Personal, approachable, colorful, creative energy
- Designer/maker personality
- Friendly illustration or handmade feeling
- Clean product landing page structure

## Visual principles

Use:

- Color and personality
- Clean responsive layout
- Strong hero section
- Color-accented cards
- Friendly badge for the AI Career Advocate callout
- Clear CTA hierarchy
- Subtle icons if helpful
- Warm accent colors
- Strong text contrast

Avoid:

- Visual clutter
- Heavy animation
- Overly corporate styling
- Case-study gallery feeling
- Hidden text inside images
- Carousel-dependent content
- Dense resume layouts

## Layout guidance

Use a centered max-width page container, such as `max-w-6xl`.

Suggested page rhythm:

- Sticky header
- Spacious hero
- Featured AI callout shortly after hero
- Short bio
- Responsive card grid for strengths
- Collapsed About details
- Learn More link cards
- Contact panel
- Minimal footer

## Responsive behavior

Desktop:

- Sticky top nav with horizontal links.
- Hero may use a two-column layout: text/actions and headshot placeholder.
- Strengths can use a 3-column or 2-column card grid.

Tablet:

- Hero can remain two-column if space allows.
- Cards can shift to 2 columns.

Mobile:

- Stack all sections vertically.
- Header should remain compact.
- CTAs should be large touch-friendly buttons.
- Cards should be single-column.
- Phone CTA should be tap-to-call.

## Persistent nav

Requirements:

- Sticky or fixed top header.
- Smooth anchor scrolling.
- Active section highlighting is optional.
- Anchor scroll should not hide section headings behind the sticky nav.
- Keyboard navigable.
- Clear focus states.

Suggested nav items:

- About
- Strengths
- Learn More
- Career Advocate
- Contact

## Headshot placeholder

Include a placeholder in the hero area.

Requirements:

- Circular or softly rounded image treatment.
- Initials “SW” fallback is acceptable.
- The layout should work without a real image.

Suggested path:

```text
/public/images/headshot-placeholder.svg
```

Suggested placeholder alt text:

> Professional headshot placeholder for Scott Whitlock

When using a real photo:

> Professional headshot of Scott Whitlock

## Light and dark mode

Support both light and dark themes.

Behavior:

- Respect system preference by default.
- Include a small theme toggle in the persistent nav.
- Store preference in `localStorage`.
- Use Tailwind's `dark` variants.
- Avoid flashing the wrong theme on first load if possible.

Light mode design:

- Warm near-white background.
- Dark readable text.
- Colorful accents.
- Soft card borders and shadows.

Dark mode design:

- Deep neutral background.
- Light readable text.
- Muted but visible accents.
- Cards should remain visually separated from the background.

## Accessibility

Meet these requirements:

- Semantic HTML
- Proper heading order
- Meaningful link text
- Keyboard navigable interactions
- Visible focus states
- Good color contrast in both themes
- Large touch targets
- Meaningful alt text
- Reduced-motion friendly transitions

Avoid:

- Hover-only interactions
- Low contrast color combinations
- Important content hidden in graphics
- Unlabeled icon buttons
- Vague links such as “click here”

## Motion

Use minimal motion only.

Acceptable:

- Subtle hover/focus transitions
- Smooth scrolling
- Gentle theme transition

Avoid:

- Heavy animation
- Scroll-jacking
- Auto-playing motion
- Motion required to understand content
