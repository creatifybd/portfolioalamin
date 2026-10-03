import { n as e, t } from "./vendor.js";
var n = t(),
  r = `https://portfolio-alamin.pages.dev`,
  i = `https://i.ibb.co/5Xcnf9mm/592997003-2565949163762644-8587364915638335487-n.jpg`;
function a({
  title: t,
  description: a,
  image: o,
  url: s = `/`,
  type: c = `website`,
  keywords: l,
  noIndex: u = !1,
  schema: d,
  article: f,
}) {
  let p = t
      ? `${t} | Al-Amin Bin Ashad Ali — Graphic Designer & AI Expert Bangladesh`
      : `Al-Amin Bin Ashad Ali | Graphic Designer & AI Expert | Logo Design | Branding | Bangladesh`,
    m =
      a ||
      `Al-Amin Bin Ashad Ali — Professional Graphic Designer & AI Expert from Narayanganj, Bangladesh. 8+ years creating logos, brand identities, web designs, AI art & video content for clients worldwide.`,
    h = o && o.startsWith(`http`) ? o : o ? `${r}${o}` : i,
    g = h.startsWith(`http`) ? h : `${r}${h}`,
    _ = `${r}${s}`,
    v =
      l ||
      `Al-Amin Bin Ashad Ali, graphic designer Bangladesh, logo designer Bangladesh, AI expert Bangladesh, brand identity designer, graphic designer Narayanganj, Canva expert Bangladesh, Adobe Illustrator Bangladesh, social media designer, web designer Bangladesh, freelance graphic designer, alamin designer`,
    y = {
      "@context": `https://schema.org`,
      "@graph": [
        {
          "@type": `Person`,
          "@id": `${r}/#person`,
          name: `Al-Amin Bin Ashad Ali`,
          alternateName: [`Al-Amin Designer`, `Alamin Graphic Designer`],
          givenName: `Al-Amin`,
          familyName: `Ali`,
          jobTitle: [
            `Graphic Designer`,
            `AI Expert`,
            `Creative Director`,
            `Brand Identity Designer`,
          ],
          description: m,
          url: r,
          image: { "@type": `ImageObject`, url: i, width: 800, height: 800 },
          email: `binashad7@gmail.com`,
          telephone: `+8801731186929`,
          birthPlace: { "@type": `Place`, name: `Bangladesh` },
          address: {
            "@type": `PostalAddress`,
            streetAddress: `Narayanganj`,
            addressLocality: `Narayanganj`,
            addressRegion: `Dhaka Division`,
            addressCountry: `BD`,
            postalCode: `1400`,
          },
          sameAs: [
            `https://www.fiverr.com`,
            `https://www.upwork.com`,
            `https://www.behance.net`,
            `https://www.linkedin.com`,
            `https://www.facebook.com`,
          ],
          knowsAbout: [
            `Graphic Design`,
            `Logo Design`,
            `Brand Identity Design`,
            `Adobe Illustrator`,
            `Adobe Photoshop`,
            `Canva Pro`,
            `AI Image Generation`,
            `Midjourney`,
            `DALL-E`,
            `Stable Diffusion`,
            `Web Design`,
            `UI/UX Design`,
            `Video Editing`,
            `Social Media Marketing`,
            `Facebook Page Management`,
            `Computer Training`,
            `Digital Marketing`,
          ],
          hasCredential: [
            {
              "@type": `EducationalOccupationalCredential`,
              name: `BBA (Accounting)`,
              credentialCategory: `degree`,
              recognizedBy: {
                "@type": `Organization`,
                name: `Hazi Misir Ali University`,
              },
            },
          ],
          worksFor: {
            "@type": `Organization`,
            name: `Nazrul & Brothers Ltd`,
            jobTitle: `Executive - Graphic Design`,
          },
          alumniOf: [
            { "@type": `Organization`, name: `Hazi Misir Ali University` },
            { "@type": `Organization`, name: `Govt. Tolaram College` },
          ],
          numberOfEmployees: { "@type": `QuantitativeValue`, value: `1` },
        },
        {
          "@type": `WebSite`,
          "@id": `${r}/#website`,
          url: r,
          name: `Al-Amin Bin Ashad Ali — Portfolio`,
          description: `Professional Graphic Designer & AI Expert Portfolio`,
          publisher: { "@id": `${r}/#person` },
          inLanguage: [`en-US`, `bn-BD`],
          potentialAction: {
            "@type": `SearchAction`,
            target: {
              "@type": `EntryPoint`,
              urlTemplate: `${r}/portfolio?q={search_term_string}`,
            },
            "query-input": `required name=search_term_string`,
          },
        },
        {
          "@type": [`LocalBusiness`, `ProfessionalService`],
          "@id": `${r}/#business`,
          name: `Al-Amin Graphic Design Studio`,
          alternateName: `Al-Amin Creative Studio`,
          description: `Professional Graphic Design, AI Art, Web Design & Digital Marketing services from Bangladesh`,
          url: r,
          telephone: `+8801731186929`,
          email: `binashad7@gmail.com`,
          image: [i],
          logo: { "@type": `ImageObject`, url: i },
          address: {
            "@type": `PostalAddress`,
            streetAddress: `Narayanganj`,
            addressLocality: `Narayanganj`,
            addressRegion: `Dhaka Division`,
            addressCountry: `BD`,
            postalCode: `1400`,
          },
          geo: {
            "@type": `GeoCoordinates`,
            latitude: `23.6238`,
            longitude: `90.5001`,
          },
          areaServed: [
            { "@type": `Country`, name: `Bangladesh` },
            { "@type": `Country`, name: `United States` },
            { "@type": `Country`, name: `United Kingdom` },
            { "@type": `Country`, name: `Canada` },
            { "@type": `Country`, name: `Australia` },
          ],
          openingHoursSpecification: {
            "@type": `OpeningHoursSpecification`,
            dayOfWeek: [
              `Monday`,
              `Tuesday`,
              `Wednesday`,
              `Thursday`,
              `Friday`,
              `Saturday`,
              `Sunday`,
            ],
            opens: `09:00`,
            closes: `22:00`,
          },
          priceRange: `$$`,
          currenciesAccepted: `USD, BDT`,
          paymentAccepted: `Bank Transfer, bKash, PayPal, Western Union`,
          serviceType: [
            `Graphic Design`,
            `Logo Design`,
            `Brand Identity`,
            `Web Design`,
            `AI Art`,
            `Video Editing`,
          ],
          hasOfferCatalog: {
            "@type": `OfferCatalog`,
            name: `Design & Creative Services`,
            itemListElement: [
              {
                "@type": `Offer`,
                itemOffered: {
                  "@type": `Service`,
                  name: `Logo Design & Brand Identity`,
                  description: `Professional logo design and complete brand identity systems for businesses worldwide`,
                },
              },
              {
                "@type": `Offer`,
                itemOffered: {
                  "@type": `Service`,
                  name: `AI-Powered Graphic Design`,
                  description: `Cutting-edge AI art generation using Midjourney, DALL-E and Stable Diffusion`,
                },
              },
              {
                "@type": `Offer`,
                itemOffered: {
                  "@type": `Service`,
                  name: `Web Design & UI/UX`,
                  description: `Modern, responsive website design and user interface creation`,
                },
              },
              {
                "@type": `Offer`,
                itemOffered: {
                  "@type": `Service`,
                  name: `Social Media Design`,
                  description: `Eye-catching social media graphics, posts and Facebook page management`,
                },
              },
              {
                "@type": `Offer`,
                itemOffered: {
                  "@type": `Service`,
                  name: `Video Editing`,
                  description: `Professional video editing and motion graphics for promotional content`,
                },
              },
            ],
          },
          aggregateRating: {
            "@type": `AggregateRating`,
            ratingValue: `5`,
            reviewCount: `17`,
            bestRating: `5`,
            worstRating: `1`,
          },
        },
        ...(d ? (Array.isArray(d) ? d : [d]) : []),
      ],
    };
  return (0, n.jsxs)(e, {
    prioritizeSeoTags: !0,
    children: [
      (0, n.jsx)(`html`, { lang: `en` }),
      (0, n.jsx)(`title`, { children: p }),
      (0, n.jsx)(`meta`, { name: `description`, content: m }),
      (0, n.jsx)(`meta`, { name: `keywords`, content: v }),
      (0, n.jsx)(`meta`, { name: `author`, content: `Al-Amin Bin Ashad Ali` }),
      (0, n.jsx)(`meta`, {
        name: `robots`,
        content: u
          ? `noindex,nofollow`
          : `index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1`,
      }),
      (0, n.jsx)(`meta`, {
        name: `googlebot`,
        content: `index,follow,max-image-preview:large`,
      }),
      (0, n.jsx)(`link`, { rel: `canonical`, href: _ }),
      (0, n.jsx)(`meta`, { property: `og:type`, content: c }),
      (0, n.jsx)(`meta`, {
        property: `og:site_name`,
        content: `Al-Amin Bin Ashad Ali`,
      }),
      (0, n.jsx)(`meta`, { property: `og:title`, content: p }),
      (0, n.jsx)(`meta`, { property: `og:description`, content: m }),
      (0, n.jsx)(`meta`, { property: `og:image`, content: g }),
      (0, n.jsx)(`meta`, { property: `og:image:secure_url`, content: g }),
      (0, n.jsx)(`meta`, { property: `og:image:width`, content: `1200` }),
      (0, n.jsx)(`meta`, { property: `og:image:height`, content: `630` }),
      (0, n.jsx)(`meta`, {
        property: `og:image:alt`,
        content: `Al-Amin Bin Ashad Ali - Graphic Designer & AI Expert Bangladesh`,
      }),
      (0, n.jsx)(`meta`, { property: `og:image:type`, content: `image/jpeg` }),
      (0, n.jsx)(`meta`, { property: `og:url`, content: _ }),
      (0, n.jsx)(`meta`, { property: `og:locale`, content: `en_US` }),
      (0, n.jsx)(`meta`, { property: `og:locale:alternate`, content: `bn_BD` }),
      f &&
        (0, n.jsx)(`meta`, {
          property: `article:author`,
          content: `Al-Amin Bin Ashad Ali`,
        }),
      (f == null ? void 0 : f.publishedTime) &&
        (0, n.jsx)(`meta`, {
          property: `article:published_time`,
          content: f.publishedTime,
        }),
      (f == null ? void 0 : f.tags) &&
        f.tags.map((e) =>
          (0, n.jsx)(`meta`, { property: `article:tag`, content: e }, e),
        ),
      (0, n.jsx)(`meta`, {
        name: `twitter:card`,
        content: `summary_large_image`,
      }),
      (0, n.jsx)(`meta`, { name: `twitter:site`, content: `@alamindesigner` }),
      (0, n.jsx)(`meta`, {
        name: `twitter:creator`,
        content: `@alamindesigner`,
      }),
      (0, n.jsx)(`meta`, { name: `twitter:title`, content: p }),
      (0, n.jsx)(`meta`, { name: `twitter:description`, content: m }),
      (0, n.jsx)(`meta`, { name: `twitter:image`, content: g }),
      (0, n.jsx)(`meta`, {
        name: `twitter:image:alt`,
        content: `Al-Amin Bin Ashad Ali - Graphic Designer`,
      }),
      (0, n.jsx)(`meta`, { name: `geo.region`, content: `BD-C` }),
      (0, n.jsx)(`meta`, {
        name: `geo.placename`,
        content: `Narayanganj, Bangladesh`,
      }),
      (0, n.jsx)(`meta`, { name: `geo.position`, content: `23.6238;90.5001` }),
      (0, n.jsx)(`meta`, { name: `ICBM`, content: `23.6238, 90.5001` }),
      (0, n.jsx)(`meta`, { name: `rating`, content: `General` }),
      (0, n.jsx)(`meta`, { name: `revisit-after`, content: `3 days` }),
      (0, n.jsx)(`meta`, { name: `language`, content: `English` }),
      (0, n.jsx)(`meta`, {
        name: `copyright`,
        content: `Al-Amin Bin Ashad Ali 2026`,
      }),
      (0, n.jsx)(`meta`, {
        name: `designer`,
        content: `Al-Amin Bin Ashad Ali`,
      }),
      (0, n.jsx)(`meta`, { name: `owner`, content: `Al-Amin Bin Ashad Ali` }),
      (0, n.jsx)(`meta`, {
        name: `category`,
        content: `Graphic Design, AI, Creative Services`,
      }),
      (0, n.jsx)(`meta`, { name: `coverage`, content: `Worldwide` }),
      (0, n.jsx)(`meta`, { name: `distribution`, content: `Global` }),
      (0, n.jsx)(`meta`, { name: `HandheldFriendly`, content: `True` }),
      (0, n.jsx)(`meta`, { name: `MobileOptimized`, content: `320` }),
      (0, n.jsx)(`script`, {
        type: `application/ld+json`,
        children: JSON.stringify(y),
      }),
    ],
  });
}
export { a as t };
