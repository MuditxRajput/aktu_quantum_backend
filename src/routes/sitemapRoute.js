import { Router } from "express";
const router = Router();
router.route('/sitemap.xml').get((req,res)=>{
    // Generate the XML sitemap here
    // This can involve querying your database or fetching URLs dynamically
    // Once you have the URLs, construct the XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <!--	created with www.mysitemapgenerator.com	-->
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://www.aktu-quantum.online/</loc>
<lastmod>2024-04-25T22:32:40+01:00</lastmod>
<priority>0.6</priority>
</url>
<url>
<loc>https://www.aktu-quantum.online/home</loc>
<lastmod>2024-04-25T22:32:40+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://www.aktu-quantum.online/about</loc>
<lastmod>2024-04-25T22:32:40+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://www.aktu-quantum.online/contact</loc>
<lastmod>2024-04-25T22:32:40+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://www.aktu-quantum.online/privacy</loc>
<lastmod>2024-04-25T22:32:40+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://www.aktu-quantum.online/disclaimer</loc>
<lastmod>2024-04-25T22:32:40+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://www.aktu-quantum.online/aktu-quantum.store</loc>
<lastmod>2024-04-25T22:32:40+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://www.aktu-quantum.online/dashboard</loc>
<lastmod>2024-04-25T22:32:40+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://www.aktu-quantum.online/view</loc>
<lastmod>2024-04-25T22:32:40+01:00</lastmod>
<priority>1.0</priority>
</url>
</urlset>`;
    
    res.header('Content-Type', 'application/xml');
    return res.send(sitemap);
})
export default router