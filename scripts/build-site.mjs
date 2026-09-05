import { mkdirSync, cpSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
mkdirSync(dist, { recursive: true });

const SITE = {
  name: "Willis Property Services",
  owner: "Hyrum Kaleb Willis",
  tagline: "Handyman | Labor | Property Support",
  phone: "9043124930",
  phoneDisplay: "(904) 312-4930",
  phoneHref: "tel:+19043124930",
  smsHref: "sms:+19043124930",
  email: "Kaleb@WillisPropertyServices.com",
  emailHref: "mailto:Kaleb@WillisPropertyServices.com",
};

const SERVICES = [
  ["drywall", "Drywall repairs", "Patches, seams, texture match, and a clean finish ready for paint.", "From nail pops and water stains to larger holes, we repair drywall so the wall looks like the damage was never there. Smooth, paint-ready finishes for units, common areas, and homes.", "/images/drywall.jpg"],
  ["painting", "Painting", "Interior walls, trim, and unit turn-ready paint with clean lines.", "Crisp cuts, even coverage, and respectful prep. We paint interiors for make-readies, punch lists, and homeowners who want a room done right without the weekend project.", "/images/interior-paint.jpg"],
  ["caulking", "Caulking", "Clean beads around tubs, windows, trim, and wet areas.", "Failed caulk is how moisture gets behind tile and trim. We cut out the old material and recaulk wet areas, windows, and base so the finish is tight and clean.", ""],
  ["flooring", "Flooring", "Repairs and install help for common residential floor systems.", "We help with flooring repairs and installation support in occupied homes and apartment turnovers — keeping transitions clean and rooms usable as quickly as possible.", ""],
  ["tile", "Tile", "Tile repair, replacement, and clean grout lines that last.", "Loose, cracked, or missing tile in baths, kitchens, and entries. We cut in replacements, reset lippage, and leave grout lines straight so the surface looks finished — not patched.", "/images/tile-work.jpg"],
  ["concrete", "Concrete pouring & repair", "Pads, walkways, and patch work with clean edges and joints.", "Small pours, patches, and repairs for walkways, pads, and steps. Formed edges, proper joints, and a finish that belongs next to the rest of the property.", "/images/concrete.jpg"],
  ["furniture", "Furniture assembly", "Beds, desks, storage, and common-area pieces put together right.", "New furniture for units, offices, and homes — assembled square, hardware accounted for, and placed where it belongs.", ""],
  ["doors", "Door repairs", "Doors that stick, sag, won't latch, or need hardware replaced.", "We plane, rehang, replace hardware, and adjust strikes so doors close quietly and lock the way they should.", "/images/door-repair.jpg"],
  ["appliances", "Appliance placement", "Moving and setting ranges, fridges, and laundry in tight spaces.", "Careful appliance placement and swap-outs in kitchens and laundry rooms. We protect floors, fit the opening, and leave the space ready to use.", ""],
  ["cleanouts", "Property cleanouts", "Clearing units and spaces so the next job — or the next resident — can start.", "Debris, left-behind belongings, and turnover cleanouts for apartment communities and homeowners.", "/images/apartments.jpg"],
  ["maintenance", "Property maintenance", "The punch-list work that keeps a building looking looked-after.", "General property maintenance and related labor across Jacksonville. If it is on the list and it is honest work, we will tell you plainly whether we can take it.", "/images/home-exterior.jpg"],
];

const year = new Date().getFullYear();

function icon(name) {
  const paths = {
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    sms: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    home: '<path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>',
    list: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>',
  };
  return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.wrench}</svg>`;
}

function header(active) {
  const links = [
    ["/", "Home"],
    ["/services/", "Services"],
    ["/about/", "About"],
    ["/contact/", "Contact"],
  ];
  return `
<header class="site-header">
  <a class="skip" href="#main">Skip to content</a>
  <div class="header-inner">
    <a class="brand" href="/">
      <img class="mark" src="/images/logo-light-256.png" width="48" height="48" alt="">
      <span>
        <span class="brand-name">${SITE.name}</span>
        <span class="brand-tag">${SITE.tagline}</span>
      </span>
    </a>
    <nav class="nav-desk" aria-label="Primary">
      ${links.map(([href, label]) => `<a href="${href}" class="${active === label ? "active" : ""}">${label}</a>`).join("")}
    </nav>
    <div class="header-actions">
      <a class="btn btn-cream btn-sm hide-sm" href="${SITE.phoneHref}">${icon("phone")} ${SITE.phoneDisplay}</a>
      <button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">${icon("menu")}</button>
    </div>
  </div>
  <div class="red-rule"></div>
  <nav class="nav-mobile" id="mobile-nav" aria-label="Mobile">
    ${links.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
    <a href="${SITE.phoneHref}">${icon("phone")} Call ${SITE.phoneDisplay}</a>
  </nav>
</header>`;
}

function footer() {
  return `
<footer class="site-footer">
  <div class="footer-grid">
    <div>
      <a class="brand" href="/">
        <img class="mark" src="/images/logo-light-256.png" width="48" height="48" alt="">
        <span>
          <span class="brand-name">${SITE.name}</span>
          <span class="brand-tag">${SITE.tagline}</span>
        </span>
      </a>
      <p class="muted-on-navy">Owner-operated handyman, labor, and property support across Jacksonville. Built to save you money, give you peace of mind, and get you back to what matters.</p>
    </div>
    <div>
      <p class="kicker paper">Explore</p>
      <ul class="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/services/">Services</a></li>
        <li><a href="/about/">About</a></li>
        <li><a href="/contact/">Contact</a></li>
      </ul>
    </div>
    <div>
      <p class="kicker paper">Reach Kaleb</p>
      <ul class="footer-links">
        <li><a href="${SITE.phoneHref}">${icon("phone")} ${SITE.phoneDisplay}</a></li>
        <li><a href="${SITE.emailHref}">${icon("mail")} ${SITE.email}</a></li>
        <li><span>${icon("pin")} Throughout Jacksonville</span></li>
      </ul>
    </div>
  </div>
  <div class="red-rule"></div>
  <div class="footer-bottom">
    <p>© ${year} ${SITE.name}. Jacksonville, Florida.</p>
    <p class="display">Owner-operated · ${SITE.owner}</p>
  </div>
</footer>
<div class="call-bar">
  <a class="btn btn-navy" href="${SITE.phoneHref}">${icon("phone")} Call</a>
  <a class="btn btn-red" href="${SITE.smsHref}">${icon("sms")} Text</a>
</div>`;
}

function cta() {
  return `
<section class="cta-band">
  <div class="cta-inner">
    <div>
      <p class="kicker paper">Jacksonville, Florida</p>
      <h2>Let's get your project done.</h2>
      <div class="red-line"></div>
    </div>
    <div class="cta-actions">
      <a class="btn btn-cream btn-lg" href="/contact/">Request service</a>
      <a class="btn btn-outline btn-lg" href="${SITE.phoneHref}">${icon("phone")} ${SITE.phoneDisplay}</a>
    </div>
  </div>
</section>`;
}

function form() {
  const opts = SERVICES.map((s) => `<option>${s[1]}</option>`).join("");
  return `
<form class="quote-form" id="quote-form" novalidate>
  <div class="form-row">
    <label>Name <input name="name" id="q-name" autocomplete="name" placeholder="Your name"></label>
    <label>Phone <input name="phone" id="q-phone" type="tel" autocomplete="tel" placeholder="(904) 555-0123"></label>
  </div>
  <label>Email (optional) <input name="email" id="q-email" type="email" autocomplete="email" placeholder="you@email.com"></label>
  <div class="form-row">
    <label>I am a
      <select name="propertyType" id="q-type">
        <option value="">Select…</option>
        <option>Homeowner / resident</option>
        <option>Apartment community</option>
        <option>Property manager</option>
      </select>
    </label>
    <label>Service needed
      <select name="service" id="q-service">
        <option value="">Select…</option>
        ${opts}
        <option>Not sure / other</option>
      </select>
    </label>
  </div>
  <label>Property address (optional) <input name="address" id="q-address" autocomplete="street-address" placeholder="Jacksonville address"></label>
  <label>Tell us about the work <textarea name="message" id="q-msg" placeholder="What needs to be done, and when do you need it?"></textarea></label>
  <p class="field-error" data-error hidden></p>
  <button class="btn btn-navy btn-lg" type="submit">Prepare request</button>
  <p class="hint">Prefer to skip the form? Call or text <a href="${SITE.phoneHref}">${SITE.phoneDisplay}</a>.</p>
</form>
<div class="quote-success" id="quote-success" hidden>
  <div class="check">${icon("check")}</div>
  <h3>Request ready</h3>
  <p class="success-copy"></p>
  <div class="stack">
    <a class="btn btn-cream btn-lg" id="success-call" href="${SITE.phoneHref}">${icon("phone")} Call ${SITE.phoneDisplay}</a>
    <a class="btn btn-outline btn-lg" id="success-sms" href="#">${icon("sms")} Text this request</a>
    <a class="btn btn-outline btn-lg" id="success-mail" href="#">${icon("mail")} Email this request</a>
  </div>
  <button class="text-reset" type="button" id="quote-reset">Start another request</button>
</div>`;
}

function page({ title, description, active, body, extraHead = "" }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="theme-color" content="#194A73">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="canonical" href="https://willispropertyservices.com/">
  <meta property="og:title" content="${SITE.name}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="/og.jpg">
  <meta property="og:type" content="website">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
  ${extraHead}
</head>
<body>
  ${header(active)}
  <div id="main">${body}</div>
  ${footer()}
  <script src="/app.js" defer></script>
</body>
</html>`;
}

const serviceCards = SERVICES.slice(0, 9).map(([slug, title, summary]) => `
  <a class="card" href="/services/#${slug}">
    ${icon("wrench")}
    <h3>${title}</h3>
    <p>${summary}</p>
  </a>`).join("");

const serviceArticles = SERVICES.map(([slug, title, details, , image], i) => `
  <article class="service-row ${i % 2 ? "reverse" : ""}" id="${slug}">
    <div class="service-media">
      ${image ? `<img src="${image}" alt="${title}" loading="lazy">` : `<div class="service-fallback">${icon("wrench")}</div>`}
    </div>
    <div class="service-copy">
      <p class="kicker red">${String(i + 1).padStart(2, "0")}</p>
      <h2>${title}</h2>
      <div class="red-line"></div>
      <p>${details}</p>
    </div>
  </article>`).join("");

const home = page({
  title: `${SITE.name} | Jacksonville Handyman & Property Support`,
  description: "Willis Property Services — Jacksonville handyman, labor, and property support for residents, apartment communities, and property managers. Call or text (904) 312-4930.",
  active: "Home",
  extraHead: `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    image: "/images/logo-mark.jpg",
    telephone: "+19043124930",
    email: SITE.email,
    address: { "@type": "PostalAddress", addressLocality: "Jacksonville", addressRegion: "FL", addressCountry: "US" },
    areaServed: "Jacksonville, Florida",
    founder: { "@type": "Person", name: SITE.owner },
  })}</script>`,
  body: `
<section class="hero">
  <img src="/images/skyline.jpg" alt="Jacksonville skyline and the Main Street Bridge at dusk">
  <div class="hero-shade"></div>
  <div class="hero-copy">
    <p class="kicker paper rise">Jacksonville, Florida</p>
    <h1 class="rise d2">Let's get your<br>project done.</h1>
    <div class="red-line rise d3"></div>
    <p class="lede rise d3">Dependable handyman, labor, and property support for apartment communities, property managers, and local residents — from the first call through the finished job.</p>
    <div class="hero-actions rise d4">
      <a class="btn btn-cream btn-lg" href="/contact/">Request service</a>
      <a class="btn btn-outline btn-lg" href="${SITE.phoneHref}">${icon("phone")} Call or text ${SITE.phoneDisplay}</a>
    </div>
  </div>
</section>
<section class="promises">
  <div><p class="kicker red">Dependable work</p><p>We show up, we do what we said, and we leave the space cleaner than we found it.</p></div>
  <div><p class="kicker red">Competitive pricing</p><p>Honest numbers for Jacksonville work. No theater, no surprise add-ons after the fact.</p></div>
  <div><p class="kicker red">Fast communication</p><p>Call or text and you reach Kaleb. From the first request through the last walkthrough.</p></div>
</section>
<section class="wrap section">
  <div class="section-head">
    <div>
      <p class="kicker red">01 — What we do</p>
      <h2>Handyman. Labor.<br>Property support.</h2>
    </div>
    <a class="btn btn-ink" href="/services/">All services</a>
  </div>
  <div class="card-grid">${serviceCards}</div>
</section>
<section class="navy-band">
  <div class="wrap split">
    <div>
      <p class="kicker paper">02 — Who we serve</p>
      <h2>Built for the people who keep Jacksonville running.</h2>
      <div class="red-line"></div>
    </div>
    <div class="audience-grid">
      <div>${icon("home")}<h3>Local residents</h3><p>The repair you have been putting off, handled by someone who lives here too. Fair pricing, clear communication, and work you do not have to redo.</p></div>
      <div>${icon("building")}<h3>Apartment communities</h3><p>Make-readies, punch lists, and the in-between work that keeps occupancy moving. One call, a crew that shows, and a unit that is rent-ready.</p></div>
      <div>${icon("list")}<h3>Property managers</h3><p>A dependable labor partner for the tickets that stack up. Fast response from the first request through completion — so you can close the work order.</p></div>
    </div>
  </div>
</section>
<section class="wrap about-split section">
  <div class="about-photo">
    <img src="/images/kaleb.jpg" alt="Hyrum Kaleb Willis, owner of Willis Property Services, standing in front of a Jacksonville home">
    <div class="logo-badge"><img class="mark" src="/images/logo-dark-256.png" width="88" height="88" alt=""></div>
  </div>
  <div>
    <p class="kicker red">03 — The owner</p>
    <h2>Hey y'all — I'm Kaleb.</h2>
    <div class="red-line"></div>
    <p class="body-lg">My name is Hyrum Kaleb Willis, and I'm the owner of Willis Property Services. I was born and raised right here in Jacksonville, Florida, and I've lived here all my life.</p>
    <p>I started this company because I'm passionate about serving my fellow Americans and Jacksonville residents. I believe we all have a story — trials we've overcome, goals we're working towards, and accomplishments we're proud of.</p>
    <p>My goal as a business owner is to keep growing this company so I can serve as many hard-working Americans as possible: saving them money, giving them peace of mind, and allowing them to get back to what's most important in their life.</p>
    <a class="btn btn-navy" href="/about/">Read Kaleb's story</a>
  </div>
</section>
<section class="paper-band">
  <div class="wrap section">
    <p class="kicker red">04 — The work</p>
    <h2>Finish quality you can see.</h2>
    <div class="gallery">
      <img src="/images/home-exterior.jpg" alt="Well-kept Jacksonville home with fresh exterior finish and tidy landscaping" loading="lazy">
      <img src="/images/interior-paint.jpg" alt="Freshly painted living room with clean walls and natural Florida light" loading="lazy">
      <img src="/images/tile-work.jpg" alt="Professional bathroom tile with straight grout lines" loading="lazy">
      <img src="/images/door-repair.jpg" alt="Interior door with clean trim and new hardware" loading="lazy">
      <img src="/images/concrete.jpg" alt="Freshly finished concrete patio with clean control joints" loading="lazy">
      <img src="/images/apartments.jpg" alt="Landscaped Florida apartment community exterior" loading="lazy">
    </div>
  </div>
</section>
<section class="wrap split section">
  <div>
    <p class="kicker red">05 — Start here</p>
    <h2>Tell us what you need.</h2>
    <p>Fill this in and we will package a call, text, or email straight to Kaleb. Most jobs start with a conversation — that is the fastest way.</p>
    <a class="inline-call" href="${SITE.phoneHref}">${icon("phone")} Or just call ${SITE.phoneDisplay}</a>
  </div>
  <div>${form()}</div>
</section>
${cta()}`,
});

const servicesPage = page({
  title: `Services | ${SITE.name}`,
  description: "Drywall, painting, tile, concrete, door repairs, cleanouts, and property maintenance throughout Jacksonville.",
  active: "Services",
  body: `
<section class="page-hero">
  <div class="wrap">
    <p class="kicker red">Services</p>
    <h1>The work we take on.</h1>
    <div class="red-line"></div>
    <p class="lede dark">Drywall through cleanouts — the practical jobs that keep homes, units, and common areas in good order across Jacksonville.</p>
  </div>
</section>
<section class="wrap section service-list">${serviceArticles}
  <div class="note-card">
    <h2>Something else on the list?</h2>
    <p>If it is honest property work in Jacksonville, ask. We will tell you plainly whether we can take it — and if we can, we will get it done.</p>
    <a class="btn btn-navy" href="/contact/">Request service</a>
  </div>
</section>
${cta()}`,
});

const aboutPage = page({
  title: `About | ${SITE.name}`,
  description: "Meet Hyrum Kaleb Willis, owner of Willis Property Services. Born and raised in Jacksonville, Florida.",
  active: "About",
  body: `
<section class="page-hero">
  <div class="wrap">
    <p class="kicker red">About</p>
    <h1>Jacksonville, through and through.</h1>
    <div class="red-line"></div>
    <p class="lede dark">Willis Property Services exists to serve the people who live and work here — with dependable work, competitive pricing, and a phone that actually gets answered.</p>
  </div>
</section>
<section class="wrap about-split section">
  <div>
    <img src="/images/kaleb.jpg" alt="Hyrum Kaleb Willis standing in front of a Jacksonville home">
    <div class="owner-card">
      <img class="mark" src="/images/logo-dark-256.png" width="56" height="56" alt="">
      <div>
        <p class="display navy">${SITE.owner}</p>
        <p class="hint">Owner · ${SITE.name}</p>
      </div>
    </div>
  </div>
  <div>
    <p class="kicker red">In his words</p>
    <p class="body-lg">My name is Hyrum Kaleb Willis, and I'm the owner of Willis Property Services. I was born and raised right here in Jacksonville, Florida, and I've lived here all my life.</p>
    <p class="body-lg">I'm a devoted follower of Jesus Christ, and I'm a patriot of this great country we call home.</p>
    <p class="body-lg">I started this company because I'm passionate about serving my fellow Americans and Jacksonville residents. I believe we all have a story — trials we've overcome, goals we're working towards, and accomplishments we're proud of.</p>
    <p class="body-lg">My goal as a business owner is to keep growing this company so I can serve as many hard-working Americans as possible: saving them money, giving them peace of mind, and allowing them to get back to what's most important in their life.</p>
    <blockquote><p class="display navy">Let's get your project done.</p></blockquote>
  </div>
</section>
<section class="paper-band">
  <div class="wrap values">
    <div><h2>Local</h2><div class="red-line"></div><p>Born and raised in Jacksonville. This is home — not a territory on a map.</p></div>
    <div><h2>Straight talk</h2><div class="red-line"></div><p>We tell you what the job needs, what it costs, and when we can do it. Then we do it.</p></div>
    <div><h2>Peace of mind</h2><div class="red-line"></div><p>The point of hiring us is so you can get back to what matters. That is the whole business.</p></div>
  </div>
</section>
<section class="wrap about-split section">
  <img src="/images/skyline.jpg" alt="Jacksonville riverfront skyline at dusk" loading="lazy">
  <div>
    <p class="kicker red">The city in the mark</p>
    <h2>The skyline is not decoration.</h2>
    <p>The Willis Property Services mark is Jacksonville: the towers, the river, the Main Street Bridge. It is a promise about where we work and who we work for — neighbors, property managers, and the people keeping this city livable.</p>
  </div>
</section>
${cta()}`,
});

const contactPage = page({
  title: `Contact | ${SITE.name}`,
  description: "Call or text (904) 312-4930. Email Kaleb@WillisPropertyServices.com. Request service in Jacksonville.",
  active: "Contact",
  body: `
<section class="page-hero">
  <div class="wrap">
    <p class="kicker red">Contact</p>
    <h1>Call, text, or send the job.</h1>
    <div class="red-line"></div>
    <p class="lede dark">Fast communication from the first request through completion. Reach Kaleb directly — no ticket queue, no runaround.</p>
  </div>
</section>
<section class="wrap contact-grid section">
  <div class="contact-cards">
    <a class="card" href="${SITE.phoneHref}">${icon("phone")}<p class="kicker">Call</p><p class="display navy">${SITE.phoneDisplay}</p></a>
    <a class="card" href="${SITE.smsHref}">${icon("sms")}<p class="kicker">Text</p><p class="display navy">${SITE.phoneDisplay}</p></a>
    <a class="card" href="${SITE.emailHref}">${icon("mail")}<p class="kicker">Email</p><p class="display navy small-email">${SITE.email}</p></a>
    <div class="card">${icon("pin")}<p class="kicker">Service area</p><p class="display navy">Throughout Jacksonville</p><p>Apartment communities, managed properties, and residences across the city.</p></div>
  </div>
  <div class="form-panel">
    <h2>Request service</h2>
    <p>Tell us the property and the work. We will turn it into a call, text, or email to Kaleb.</p>
    ${form()}
  </div>
</section>
<section class="paper-band map-band">
  <div class="wrap">
    <p class="kicker red">Jacksonville, Florida</p>
    <iframe title="Map of Jacksonville, Florida" src="https://maps.google.com/maps?q=Jacksonville%20Florida&z=11&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</section>`,
});

const notFound = page({
  title: `Page not found | ${SITE.name}`,
  description: "That page does not exist.",
  active: "",
  body: `
<section class="page-hero">
  <div class="wrap">
    <p class="kicker red">404</p>
    <h1>This page isn't here.</h1>
    <div class="red-line"></div>
    <p class="lede dark">Head back home, or call Kaleb and we'll get you sorted.</p>
    <div class="hero-actions" style="margin-top:1.5rem">
      <a class="btn btn-navy btn-lg" href="/">Home</a>
      <a class="btn btn-ink btn-lg" href="${SITE.phoneHref}">${SITE.phoneDisplay}</a>
    </div>
  </div>
</section>`,
});

function write(rel, content) {
  const p = join(dist, rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, content);
}

write("index.html", home);
write("services/index.html", servicesPage);
write("about/index.html", aboutPage);
write("contact/index.html", contactPage);
write("404.html", notFound);

write(
  "app.js",
  `const EMAIL=${JSON.stringify(SITE.email)};
const PHONE=${JSON.stringify(SITE.phone)};
const ICON_MENU='<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
const ICON_CLOSE='<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
document.querySelectorAll("header").forEach((header)=>{
  const btn=header.querySelector(".menu-btn");
  const nav=header.querySelector(".nav-mobile");
  if(!btn||!nav) return;
  const setOpen=(open)=>{
    nav.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    btn.innerHTML = open ? ICON_CLOSE : ICON_MENU;
  };
  btn.addEventListener("click",(e)=>{
    e.preventDefault();
    e.stopPropagation();
    setOpen(!nav.classList.contains("is-open"));
  });
  nav.querySelectorAll("a").forEach((a)=>a.addEventListener("click",()=>setOpen(false)));
  document.addEventListener("click",(e)=>{
    if(!header.contains(e.target)) setOpen(false);
  });
  document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape") setOpen(false);
  });
});
document.querySelectorAll(".quote-form").forEach((form)=>{
  const success=form.parentElement.querySelector(".quote-success");
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(form).entries());
    const err=form.querySelector("[data-error]");
    let msg="";
    if(!data.name || data.name.trim().length<2) msg="Please enter your name.";
    else if((data.phone||"").replace(/\\D/g,"").length<10) msg="Enter a 10-digit phone number.";
    else if(data.email && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(data.email)) msg="Enter a valid email, or leave it blank.";
    else if(!data.propertyType) msg="Select a property type.";
    else if(!data.service) msg="Select a service.";
    else if(!data.message || data.message.trim().length<8) msg="Tell us a little about the work.";
    if(msg){ err.hidden=false; err.textContent=msg; return; }
    err.hidden=true;
    const body=["New service request from "+data.name,"","Phone: "+data.phone,data.email?"Email: "+data.email:null,"Property: "+data.propertyType,"Service: "+data.service,data.address?"Address: "+data.address:null,"",data.message].filter(Boolean).join("\\n");
    const first=data.name.trim().split(" ")[0];
    success.querySelector(".success-copy").textContent="Thanks, "+first+". Send this to Kaleb by text or email, or call now — he will take it from there.";
    success.querySelector("#success-sms").href="sms:+1"+PHONE+"?body="+encodeURIComponent(body);
    success.querySelector("#success-mail").href="mailto:"+EMAIL+"?subject="+encodeURIComponent("Service request — "+data.service)+"&body="+encodeURIComponent(body);
    form.hidden=true; success.hidden=false;
  });
  success.querySelector("#quote-reset").addEventListener("click",()=>{
    form.reset(); form.hidden=false; success.hidden=true;
  });
});
`,
);

cpSync(join(root, "site/styles.css"), join(dist, "styles.css"));
cpSync(join(root, "public/images"), join(dist, "images"), { recursive: true });
if (existsSync(join(root, "public/favicon.svg"))) cpSync(join(root, "public/favicon.svg"), join(dist, "favicon.svg"));
if (existsSync(join(root, "public/og.jpg"))) cpSync(join(root, "public/og.jpg"), join(dist, "og.jpg"));

console.log("built", dist);
