module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'TIL-rkJun-com-c7faa2ff380a48c3b2cc70c60abdcdf3',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'rkjun.com',
  domain: 'rkjun.com',
  author: 'Juntai Park',

  // open graph metadata (optional)
  description: 'Blog, Today I Learned, Dev log, Dev diary',
  socialImageTitle: 'rkjun.com',
  socialImageSubtitle: 'Blog, Today I Learned, Dev log, Dev diary',

  // social usernames (optional)
  twitter: 'rkjun',
  github: 'rkjun',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://www.notion.so/image/https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F859969%3Fs%3D400%26u%3D44780fbc19a72937de590798d866d99f11b96c1d%26v%3D4?table=block&id=c7faa2ff-380a-48c3-b2cc-70c60abdcdf3&cache=v2',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'rkJun/nextjs-notion-starter-kit',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
