# Rasakala Coffee — Landing Page Planning

## 1. Project Overview

Build a portfolio landing page for a fictional coffee shop brand called **Rasakala**.

The website should feel like a real coffee brand, not a generic template or SaaS landing page.

Brand idea:

**RASAKALA**
_Secangkir rasa, di tiap kala._

The name represents the idea of **rasa + kala**: flavor, feeling, and moments in time.

The website should feel warm, handcrafted, editorial, and grounded in Bali culture without becoming overly traditional or cliché.

---

## 2. Tech Stack

Use:

- Astro
- Tailwind CSS
- GSAP
- Vanilla JavaScript where possible

Optional:

- Vue only if an interactive component truly needs component state

Avoid using Vue for static sections.

The website should remain mostly static and lightweight.

---

## 3. Main Goals

The landing page should demonstrate:

- strong visual direction
- editorial layout
- modern responsive web design
- smooth but subtle animation
- good typography
- clean Astro component structure
- minimal JavaScript
- good performance
- portfolio-quality implementation

The final result should feel closer to a real branding website than a coding exercise.

---

## 4. Design Direction

Visual references:

- warm Indonesian coffee shop atmosphere
- editorial magazine layouts
- handcrafted branding
- tactile paper textures
- subtle collage elements
- natural photography
- understated illustrations

Avoid:

- AI-slop visual style
- generic gradients
- glassmorphism
- excessive rounded cards
- generic bento grids
- floating UI cards everywhere
- excessive blur
- glowing elements
- futuristic SaaS styling
- over-animation
- excessive 3D effects

The site should feel human, warm, slightly imperfect, and intentional.

---

## 5. Brand Personality

Rasakala should feel:

- warm
- grounded
- friendly
- local
- thoughtful
- timeless
- slightly artistic
- community-oriented

Not:

- luxury hotel
- tech startup
- hipster parody
- overly rustic
- overly traditional Balinese

---

## 6. Color Direction

Use an earthy palette.

Suggested direction:

- warm cream / paper background
- dark espresso brown
- muted olive
- soft beige
- charcoal
- occasional warm terracotta accent

Avoid high-saturation colors.

The contrast must remain accessible.

---

## 7. Typography

Use a combination of:

### Display / Heading

Elegant serif or editorial serif.

Examples of style:

- Instrument Serif
- Cormorant Garamond
- DM Serif Display
- Fraunces

### Body

Neutral sans-serif.

Examples:

- Inter
- Manrope
- DM Sans

Typography should carry a large part of the visual identity.

Use large editorial headings, restrained body text, and comfortable spacing.

---

## 8. Homepage Structure

### Navbar

Desktop navbar:

- Rasakala logo
- Home
- Story
- Menu
- Location
- Journal
- Visit Us button

Navbar should sit over the hero initially.

It can use a light paper-like background with slight transparency, but avoid glassmorphism.

Mobile:

- simplified logo
- hamburger menu
- full-screen or clean dropdown navigation

---

## 9. Hero Section

The hero is the most important part of the website.

Concept:

A cinematic coffee shop interior viewed from the customer perspective.

Scene should include:

- barista behind the counter
- espresso machine
- coffee cups
- pastry display
- plants
- hanging lamp
- warm lighting
- natural textures

Main content:

**RASAKALA**

**Secangkir rasa, di tiap kala.**

Supporting text:

> Kopi, cerita, dan manusia baik.
> Dari Bali, untuk tiap momen yang berarti.

Primary CTA:

**See Menu**

Secondary optional action:

**Visit Us**

The hero should not look like a conventional marketing hero.

The environment itself should act as the visual composition.

Use asymmetrical positioning and editorial typography.

---

## 10. Hero Decorative Elements

Add a few subtle handcrafted elements.

Examples:

- handwritten notes
- small coffee plant illustration
- small sun symbol
- short phrases

Possible phrases:

- Good coffee brings good people.
- Same people, different stories.
- Bali brews brighter days.
- More than just coffee.

Do not overcrowd the hero.

These elements should feel like annotations in a sketchbook or magazine.

---

## 11. Hero Motion

Use GSAP.

Animations should be subtle.

Possible behavior:

- slow hero text reveal
- slight image scale on page load
- small parallax movement on foreground objects
- handwritten elements fade in slightly later
- CTA gently appears after headline

Avoid dramatic entrance animations.

No bouncing.

No excessive stagger.

Cursor parallax can be added only on desktop and should be very small.

---

## 12. Story Section

Transition from the photographic hero into a textured cream-paper section.

Use an irregular torn-paper-style transition between hero and story.

Headline:

**Rasa yang hadir
di tiap waktu.**

Example text:

Rasakala lahir dari hal-hal sederhana: obrolan, biji kopi yang jujur, dan momen-momen kecil yang membuat hidup terasa utuh.

Di sini, setiap cangkir punya cerita. Tentang Bali, tentang kita, dan tentang waktu yang selalu berjalan.

Layout:

- editorial text block
- 2–3 overlapping photographs
- small handwritten annotations
- illustrated Bali landscape or coffee botanical drawing

The photos can look like printed photographs or Polaroids, but keep it tasteful.

Avoid generic card layouts.

---

## 13. Menu Section

Show selected signature drinks.

Do not build a large ecommerce-style menu.

Use a visually simple layout.

Example categories:

- Espresso
- Milk Coffee
- Manual Brew
- Non Coffee
- Pastry

Example drinks:

Kopi Kala
Palm sugar milk coffee

Senja Latte
Espresso, milk, subtle caramel

Kintamani Filter
Single origin Bali coffee

Cocoa Bali
Dark chocolate and milk

Menu presentation can alternate between large typography and product photography.

---

## 14. Philosophy / Brand Statement Section

Create a strong typographic section.

Example:

**Kopi.
Manusia.
Tempat.
Waktu.**

Short statement explaining the philosophy.

This can be a minimal section with lots of whitespace.

---

## 15. Location Section

Present one fictional Rasakala coffee shop location.

Example:

Rasakala Coffee
Denpasar, Bali

Include:

- address
- opening hours
- contact
- map placeholder
- exterior/interior photograph

CTA:

**Get Directions**

For portfolio purposes, this does not need to connect to a real map API.

---

## 16. Journal Section

Show 3 editorial-style stories.

Examples:

- Cerita dari Kintamani
- Behind the Bar
- Pagi yang Pelan

Use magazine-like image + headline layout.

Avoid generic blog cards with identical rounded boxes.

---

## 17. Footer

Footer should feel integrated with the brand.

Include:

RASAKALA

Secangkir rasa, di tiap kala.

Links:

- Instagram
- Location
- Menu
- Journal

Small text:

Made in Bali.

Do not make the footer overly corporate.

---

## 18. Component Structure

Suggested structure:

src/

components/

- Navbar.astro
- Hero.astro
- Story.astro
- Menu.astro
- Philosophy.astro
- Location.astro
- Journal.astro
- Footer.astro
- SectionTitle.astro

layouts/

- BaseLayout.astro

pages/

- index.astro

styles/

- global.css

scripts/

- animations.js

Keep components simple.

Do not create components for every tiny element.

Avoid premature abstraction.

---

## 19. Responsive Behavior

Desktop:

- editorial asymmetrical layout
- layered photographs
- larger typography
- decorative elements

Tablet:

- preserve visual composition where possible
- reduce overlap
- simplify decorative assets

Mobile:

- prioritize readability
- stack content naturally
- reduce decorative drawings
- remove cursor parallax
- reduce animation complexity
- maintain strong typography

Do not simply shrink the desktop layout.

Create intentional mobile composition.

---

## 20. Performance

Important:

- optimize images
- lazy-load images below the fold
- avoid large JavaScript bundles
- avoid unnecessary client-side hydration
- use Astro components by default
- use GSAP only where animation adds value
- avoid unnecessary libraries

Target a fast static website suitable for GitHub Pages.

---

## 21. SEO

Include:

- proper title
- meta description
- Open Graph metadata
- semantic headings
- image alt text
- favicon
- basic structured content

Suggested title:

Rasakala Coffee — Secangkir rasa, di tiap kala.

Suggested description:

Rasakala is a fictional Bali coffee shop concept built around coffee, stories, people, and everyday moments.

---

## 22. Deployment

The project should be compatible with GitHub Pages.

Use static output.

Do not add server-dependent features.

Prepare Astro configuration so the project can later support:

- GitHub Pages project URL
- custom domain if needed

---

## 23. Implementation Priority

Build in this order:

### Phase 1

- Astro setup
- Tailwind setup
- global typography
- color tokens
- base layout
- navbar

### Phase 2

- hero section
- hero responsive layout
- hero typography
- hero image composition

### Phase 3

- story section
- paper texture transition
- editorial collage

### Phase 4

- menu
- philosophy
- location
- journal
- footer

### Phase 5

- GSAP animations
- scroll reveal
- subtle parallax

### Phase 6

- responsive polishing
- accessibility
- image optimization
- SEO
- GitHub Pages deployment

---

## 24. Important Development Rules

Before implementing a new section:

1. inspect the current layout
2. reuse existing tokens and spacing
3. do not introduce random design patterns
4. keep the visual language consistent
5. prefer CSS layout over unnecessary JavaScript
6. avoid abstraction unless repetition is meaningful
7. keep animations purposeful
8. ensure mobile works before considering the section complete

Never redesign an already approved section unless necessary.

Do not replace the visual direction with a generic template.

---

## 25. Definition of Done

The project is complete when:

- homepage is fully responsive
- no horizontal overflow exists
- all primary sections are implemented
- visual hierarchy feels intentional
- typography is consistent
- animations remain subtle
- page works without JavaScript except animation/interactivity
- Lighthouse performance is reasonable
- images are optimized
- GitHub Pages build succeeds
- final result does not resemble a generic AI-generated landing page
