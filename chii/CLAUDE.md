# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Chii Health is a static multi-page website for a healthcare clinic in Mount Maunganui, New Zealand. The site is built with vanilla HTML, CSS, and JavaScript (no build tooling or frameworks) and features a responsive design with progressive enhancement.

**Live URL**: https://chii.co.nz/

## Architecture

### Technology Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **No build tools**: Direct file serving (no npm, webpack, vite, etc.)
- **Backend API**: Separate service at `/api/bookings` (not in this repo)
- **Deployment**: Static file hosting

### Key Files
- `index.html` - Home page with hero section and treatment cards
- `treatments.html`, `about.html`, `contact.html` - Main content pages
- `acupuncture.html`, `massage.html`, `physiotherapy.html`, `facials.html`, `waxing.html` - Individual treatment pages
- `script.js` - Core client-side functionality (navigation, animations, year display)
- `app.js` - Contact form handling and API communication
- `styles.css` - Complete design system (minified CSS custom properties)
- `sitemap.xml` - SEO sitemap for all 9 pages
- `robots.txt` - Search engine crawler configuration

### Design System (styles.css)

**CSS Custom Properties:**
- Colors: `--color-bg` (#f6f3ef), `--color-text` (#1f1f1f), `--color-accent` (#6b8c7a sage green), `--color-card` (#ffffff)
- Spacing: `--spacing-xs` through `--spacing-xxl` (0.5rem to 4rem)
- Radii: `--radius-sm` (10px), `--radius-md` (14px), `--radius-lg` (18px)
- Shadows: `--shadow-md`, `--shadow-lg` for depth
- Responsive breakpoint: 900px (mobile vs desktop)

**Component Classes:**
- `.container` - Max-width 1100px content wrapper
- `.grid`, `.grid-2`, `.grid-3` - Responsive grid layouts (collapse to 1 column under 900px)
- `.card` - White card with border, shadow, and hover lift effect
- `.btn-primary`, `.btn-outline`, `.btn-link` - Button variants
- `.hero`, `.hero-copy`, `.hero-actions` - Hero section layout
- `.trust-bar`, `.badge` - Social proof elements
- `.price-list`, `.price-line` - Treatment pricing display

### JavaScript Functionality

**script.js** (57 lines):
1. Dynamic year insertion for copyright (`<span data-year>`)
2. Mobile hamburger menu toggle (`[data-menu-toggle]`, `[data-nav]`)
3. Smooth scrolling for anchor links (`href^="#"`)
4. Intersection Observer-based reveal animations (`[data-animate]` → `.is-visible`)
5. Progressive enhancement: graceful fallback if IntersectionObserver unavailable

**app.js** (36 lines):
1. Contact form submission handler for `#booking-form`
2. Client-side validation: requires email OR phone
3. POST to `/api/bookings` with JSON payload
4. Success: displays booking reference ID, resets form
5. Error handling: network errors and API validation errors

### Page Structure Pattern

All HTML pages follow this consistent structure:
1. DOCTYPE and `<html lang="en">`
2. `<head>` with meta tags (charset, viewport, SEO, Open Graph, Twitter Card)
3. Skip link for accessibility (`<a class="skip-link" href="#main">`)
4. Sticky header with logo, top contact link, hamburger menu, and nav
5. `<main id="main">` with page content
6. Footer with business info and copyright
7. JSON-LD LocalBusiness schema for SEO
8. Deferred `script.js` loading

### API Integration

**Endpoint**: `POST /api/bookings`

**Request Format** (JSON):
```json
{
  "name": "string",
  "email": "string (optional if phone provided)",
  "phone": "string (optional if email provided)",
  "treatment": "string",
  "message": "string"
}
```

**Response Format** (JSON):
```json
{
  "ok": true,
  "booking": {
    "id": "string (reference number)"
  }
}
```

**Error Response**:
```json
{
  "ok": false,
  "errors": ["array of error messages"]
}
```

## Development Workflow

### Local Development
Since this is a static site with no build process, use any local web server:

```bash
# Python (Python 3)
python3 -m http.server 8000

# Node.js (if you have npx)
npx serve .

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Testing Changes
1. **HTML/CSS**: Refresh browser after edits
2. **JavaScript**: Hard refresh (Cmd+Shift+R / Ctrl+Shift+F5) to bypass cache
3. **Mobile**: Test at 900px breakpoint and below (use browser DevTools)
4. **Accessibility**: Test keyboard navigation (Tab, Enter, Escape for menu)

### Browser Compatibility
- Modern browsers: Chrome, Firefox, Safari, Edge (last 2 versions)
- Key features: CSS Grid, CSS Custom Properties, Fetch API, IntersectionObserver
- Fallback: IntersectionObserver gracefully degrades to immediate display

## Content Guidelines

### Adding New Treatment Pages
1. Copy an existing treatment page (e.g., `acupuncture.html`)
2. Update `<title>`, meta tags, canonical URL, Open Graph data
3. Replace hero image (`/assets/hero-*.webp`) and treatment card image (`/assets/treatment-*.svg`)
4. Update page content (header, description, pricing)
5. Add page to `sitemap.xml` with current date
6. Add navigation link if needed (currently uses dropdown for treatments)

### Image Specifications
- **Hero images**: WebP format, ~1200-1600px wide, placed in `/assets/`
- **Treatment cards**: SVG format (vector), 600x600 viewBox, placed in `/assets/`
- **Favicon**: Both PNG (32x32) and SVG versions in `/assets/`
- Always include `width`, `height`, `alt`, and `loading="lazy"` attributes

### SEO Checklist
- Update `<title>` (unique per page, under 60 chars)
- Write unique meta description (under 155 chars)
- Set canonical URL with full domain
- Update Open Graph title, description, image (1200x630px recommended)
- Update Twitter Card metadata
- Add page to `sitemap.xml` with `<lastmod>` date (YYYY-MM-DD format)
- Include relevant keywords in H1, first paragraph

## Accessibility Requirements

All changes must maintain:
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`)
- ARIA labels for interactive elements (menu toggle: `aria-label`, `aria-expanded`, `aria-controls`)
- Keyboard navigation support (focus states, skip link)
- Color contrast ratios (WCAG AA: 4.5:1 for normal text)
- Alt text for all images (decorative images: `alt=""`)
- `prefers-reduced-motion` support (already in CSS)

## Git Workflow

Current branch: `main`

Standard workflow:
```bash
git status                           # Check changes
git add [files]                      # Stage specific files
git commit -m "Description"          # Commit with message
git push origin main                 # Push to remote
```

**Commit Message Style** (based on git log):
- Use lowercase, concise descriptions
- Examples: "fix header format", "drop down menu fix", "mobile format"
- No prefixes like "feat:" or "fix:" (not used in this repo)

## Business Information

**Contact:**
- Phone: +64 27 574 2522
- Email: chiihealth768@gmail.com
- Address: 52 Girven Road, Mount Maunganui, Tauranga 3116, New Zealand

**Hours:**
- Mon-Fri: 10:00 AM - 4:00 PM
- Sat-Sun: Closed

**Services:** Acupuncture, Chinese medicine, massage, physiotherapy, facials, waxing

This information is hardcoded in JSON-LD schema on `index.html:140` and must be updated if business details change.
