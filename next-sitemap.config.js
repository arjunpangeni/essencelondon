module.exports = {
    siteUrl: 'https://www.essencemassage.uk/',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
        additionalSitemaps: [
            'https://www.essencemassage.uk/sitemap.xml',
        ],
    },
};
