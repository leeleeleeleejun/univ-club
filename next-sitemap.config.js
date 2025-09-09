/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://univ-club.vercel.app', // 배포 도메인
  generateRobotsTxt: true,        // robots.txt 자동 생성
  sitemapSize: 7000,              // (선택) 분할 기준, 페이지 많을 때 사용
  changefreq: 'daily',            // (선택) 크롤링 주기
  priority: 0.7,                  // (선택) 기본 페이지 우선순위
  exclude: ['/admin/*'],          // (선택) 제외할 경로
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin'] },
    ],
    additionalSitemaps: [
      'https://univ-club.vercel.app/sitemap.xml',
    ],
  },
}