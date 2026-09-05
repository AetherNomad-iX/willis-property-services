# Willis Property Services

Official website for **Willis Property Services** — owner-operated handyman, labor, and property support throughout Jacksonville, Florida.

This GitHub repo is the source of truth. Every site change is pushed here (not only the live preview).

**Owner:** Hyrum Kaleb Willis  
**Call or text:** [(904) 312-4930](tel:+19043124930)  
**Email:** [Kaleb@WillisPropertyServices.com](mailto:Kaleb@WillisPropertyServices.com)

## Pages

| Page | Purpose |
| --- | --- |
| `/` | Home |
| `/services/` | Services |
| `/about/` | About Kaleb |
| `/contact/` | Call / text / request form |

## Latest

- Mobile hamburger menu opens and closes on tap
- Cloudflare deploy is a static site in `dist/`

## Cloudflare

This repo is set up for **Cloudflare Workers static assets**.

Keep the deploy command as:

```text
npx wrangler deploy
```

Leave the **build command empty**. The site is already built into `dist/` (HTML, CSS, JS, images). `wrangler.toml` points Wrangler at that folder.

To rebuild the static files after copy changes:

```bash
npm run build
```

Then commit the updated `dist/` folder.
