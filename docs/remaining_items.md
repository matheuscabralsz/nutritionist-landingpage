# Remaining Items — Nutri Karen Landing Page

Last updated: 2026-04-22

Everything needed to move from the current codebase to a live, production-ready site.
Items are grouped by whether they **block launch** or are polish-level.

---

## 1. Blocks launch

### 1.1 Legal pages

The footer links to `/privacidade` and `/termos`, which currently return 404.

- [ ] **`app/privacidade/page.tsx`** — Política de Privacidade
  - LGPD (Lei 13.709/2018) legally requires this for any site that collects personal data, even indirectly (WhatsApp click tracking, Instagram pixel, Google Analytics).
  - Must disclose: what data is collected, purpose, legal basis, retention, sharing, user rights, DPO/contact email.
  - Can be generated from LGPD templates and customized; recommend a lawyer review before launch.
- [ ] **`app/termos/page.tsx`** — Termos de Uso
  - Define the scope of the service (not a medical diagnosis), cancellation/remarcação policy, intellectual property of the e-books, payment terms, limitation of liability.

### 1.2 Domain and DNS

- [ ] Confirm the final domain. Current hardcoded value in `app/layout.tsx` is `https://nutrikaren.com.br` (guess, not verified).
  - Affects: `metadataBase`, canonical URL, `openGraph.url`, JSON-LD `@id` and `url`.
- [ ] Buy the domain (Registro.br for `.com.br` — requires CPF/CNPJ).
- [ ] Pick hosting. Recommended: **Vercel** (free tier fits this site comfortably, native Next.js support, automatic HTTPS).
- [ ] Point DNS:
  - Vercel: add A record `76.76.21.21` or CNAME `cname.vercel-dns.com` per their dashboard.
  - Enable Vercel's auto-HTTPS once DNS propagates.
- [ ] Update `metadataBase` in `app/layout.tsx` once domain is confirmed.

### 1.3 Real testimonials (or remove permanently)

- [x] **Testimonials section removed** — the 3 fictional ones were deleted 2026-04-22.
- [ ] If real testimonials are added later, CFN Resolução 599/2018 requires:
  - Written, signed consent from each patient.
  - No before/after photos.
  - No outcome promises ("perdi 4kg" is not allowed; "me senti mais disposta" is borderline).
  - Store consent forms in a safe location for audit.

---

## 2. Should fix before launch (not blockers, but visible)

### 2.1 "+300 mulheres acompanhadas" badge (Hero)

- [ ] Decide:
  - **Option A** — replace `+300` with the real number (if documented).
  - **Option B** — remove the badge entirely. CFN-sensitive.
- Located at `components/landing/Hero.tsx`, the small white card bottom-left of the hero photo.

### 2.2 Final photos

Current hero/about photos are `public/img/pic1.jpeg` and `public/img/pic2.jpeg` (copied from `docs/`).

- [ ] Hero photo — ideal 800×1000 (portrait 4:5), well-lit, warm tones to match the palette. Replace `public/img/pic1.jpeg`.
- [ ] About photo — ideal 700×700 (square). Replace `public/img/pic2.jpeg`.
- Consider a professional shoot if these are placeholders — the hero image does most of the visual work above the fold.

### 2.3 Favicon + app icons

- [ ] `app/favicon.ico` (32×32)
- [ ] `app/icon.png` (512×512, optional — Next.js auto-handles this)
- [ ] `app/apple-icon.png` (180×180, optional)
- Next.js 14 reads these from the `app/` directory automatically.

### 2.4 First browser test

The code has never been compiled or rendered — only written.

- [ ] `npm install`
- [ ] `npm run dev`
- [ ] Open `http://localhost:3000` and verify:
  - Hero, images render
  - Mobile breakpoint (Chrome DevTools, 375px) looks correct
  - FAQ accordion opens/closes
  - All WhatsApp CTAs open the correct conversation
  - Scroll-to-anchor links work (`#metodo`, `#investimento`, `#faq`)
- [ ] `npm run build` — catches type errors that `dev` mode hides.

---

## 3. Nice to have

### 3.1 Analytics

- [ ] Decide on analytics. Options:
  - **Vercel Analytics** — zero-config if hosted on Vercel, privacy-respecting.
  - **Umami** — self-hosted or cloud, cookieless, LGPD-friendly.
  - **Google Analytics 4** — most common, requires cookie consent banner.
- If GA4, a cookie consent banner becomes mandatory under LGPD.

### 3.2 SEO

- [ ] `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://<domain>/sitemap.xml
  ```
- [ ] `app/sitemap.ts` — Next.js auto-generated sitemap.
- [ ] Submit the domain to Google Search Console once live.

### 3.3 WhatsApp link tracking

- The WhatsApp URL is currently identical across Hero, Pricing, FinalCTA, and Footer.
- Consider adding a UTM-style marker in the `?text=` message so Karen can see which CTA converted. Example: `?text=Ol%C3%A1%20Karen%20[Hero]%2C%20quero%20agendar...`

### 3.4 Instagram embed

- Instagram link is currently text-only in AboutKaren and Footer.
- Optional: embed the latest 3–6 posts above the FAQ to add visual social proof without triggering CFN testimonial rules.

### 3.5 Content polish

- [ ] `AboutKaren.tsx` credentials list — confirm "10+ anos" and specializations match Karen's real curriculum.
- [ ] `Pricing.tsx` — the line "Pagamento via PIX ou cartão · emissão de NF" should be verified (does she issue NF?).

---

## 4. Future enhancements (post-launch)

- Blog section (helps SEO, gives Karen a place to publish content referenced in Instagram).
- Patient portal / area for downloading e-books after payment.
- Online scheduling (Calendly/SimplyBook.me) instead of WhatsApp-only.
- Portuguese + Spanish versions (if expanding to Latam).

---

## Summary

| Priority | Item | Owner | Status |
|---|---|---|---|
| Blocker | `/privacidade` page | | Not started |
| Blocker | `/termos` page | | Not started |
| Blocker | Domain + DNS + hosting | | Not started |
| Blocker | Update `metadataBase` after domain | | Not started |
| Polish | +300 badge decision | | Not started |
| Polish | Final hero/about photos | | Placeholders in place |
| Polish | Favicon + app icons | | Not started |
| Polish | First browser test (`npm install` + `dev`) | | Not started |
| Nice | Analytics | | Not started |
| Nice | `robots.txt` + `sitemap.ts` | | Not started |
| Nice | WhatsApp UTM markers | | Not started |
