import React from 'react'
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';



const Sitemap = () => {
 const routes = [
   '/',
   '/about_bumrungrad',
   '/about_vissionMisson',
   '/about_factsheet',
   '/about_accreditation',
   '/about_foundation',
   '/insurance_weaccept',
   '/insurance_goodVibes',
   '/insurance_package_promotion',
   '/clinic_centers',
   '/packages',
   '/locate_us',
 ]

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map((route) => {
          const url = ` https://bumrungraddiscover.com/sitemap_index.xml${route}`
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `
        })
        .join('')}
    </urlset>
  `

  return <StaticRouter>{renderToString(<>{sitemap}</>)}</StaticRouter>

 
}

export default Sitemap