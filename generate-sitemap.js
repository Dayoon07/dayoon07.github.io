const fs = require("fs");
const path = require("path");

const sitePages = [
  { to: "/", t: "Homepage" },
  { to: "/skill", t: "Skill" },
  { to: "/projects", t: "Projects" },
  { to: "/architecture", t: "Architecture" },
  { to: "/cv", t: "CV" },
  { to: "/portfolio", t: "Portfolio" },
  { to: "/sitemap", t: "Sitemap" },
  { to: "/wow404error", t: "Wow404Error" }
];

const baseUrl = "https://dayoon07.github.io";

const sitemapContent =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  sitePages.map(page => `  <url><loc>${baseUrl}${page.to}</loc></url>`).join("\n") +
  `\n</urlset>`;

fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemapContent, "utf8");

console.log("✅ sitemap.xml 생성 완료!");
