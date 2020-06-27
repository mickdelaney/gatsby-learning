// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-tsx": () => import("./../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-templates-all-tags-index-tsx": () => import("./../src/templates/allTagsIndex.tsx" /* webpackChunkName: "component---src-templates-all-tags-index-tsx" */),
  "component---src-templates-blog-post-tsx": () => import("./../src/templates/blogPost.tsx" /* webpackChunkName: "component---src-templates-blog-post-tsx" */),
  "component---src-templates-single-tag-index-tsx": () => import("./../src/templates/singleTagIndex.tsx" /* webpackChunkName: "component---src-templates-single-tag-index-tsx" */)
}

