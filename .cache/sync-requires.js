const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mickdelaney/develop/gatsby/my-blog/.cache/dev-404-page.js"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/mickdelaney/develop/gatsby/my-blog/src/pages/index.tsx"))),
  "component---src-templates-all-tags-index-tsx": hot(preferDefault(require("/Users/mickdelaney/develop/gatsby/my-blog/src/templates/allTagsIndex.tsx"))),
  "component---src-templates-blog-post-tsx": hot(preferDefault(require("/Users/mickdelaney/develop/gatsby/my-blog/src/templates/blogPost.tsx"))),
  "component---src-templates-single-tag-index-tsx": hot(preferDefault(require("/Users/mickdelaney/develop/gatsby/my-blog/src/templates/singleTagIndex.tsx")))
}

