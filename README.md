# Company Portfolio Template

A customizable React portfolio with sample content. The images are generic placeholders. No personal resume, certificate PDFs, project screenshots, or profile photographs are included.

## Run locally

```sh
npm ci
npm start
```

## Validate

```sh
npm test -- --watchAll=false
npm run build
```

## Customize

- Update the profile and introduction in `src/components/Hero.js` and `About.js`.
- Replace sample contact details and example.com social links in `Contact.js` and `Hero.js`. The phone number is deliberately not linked.
- Update branding in `Navbar.js`, `Footer.js`, `public/index.html`, and `public/manifest.json`.
- Replace sample education and experience in `Journey.js`, and sample highlights in `Stats.js`.
- Edit skills, projects, and certificates in `src/data/`.
- Replace the SVG placeholders in `src/assets/` with your own approved images.
- Add your own certificate PDFs and set their `link` values in `src/data/certificates.js`. Until then, the sample card has no download link.
- Resume downloads have been removed. Add your own resume and download button when ready.

All biography, skill, project, and qualification entries are demonstration content, not claims about a real person or company. Replace them before publishing.

Keep secrets out of source control. This application runs in the browser, so any bundled configuration is public.
