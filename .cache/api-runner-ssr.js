var plugins = [{
      plugin: require('/Users/mickdelaney/develop/gatsby/my-blog/node_modules/gatsby-plugin-tinacms/gatsby-ssr'),
      options: {"plugins":[{"resolve":"/Users/mickdelaney/develop/gatsby/my-blog/node_modules/gatsby-tinacms-git","id":"ca65af08-4c10-5e6f-8b14-831709d38ab4","name":"gatsby-tinacms-git","version":"0.5.5","pluginOptions":{"plugins":[]},"nodeAPIs":["onCreateDevServer"],"browserAPIs":["onClientEntry"],"ssrAPIs":[]},{"resolve":"/Users/mickdelaney/develop/gatsby/my-blog/node_modules/gatsby-tinacms-remark","id":"4e049a88-2f70-5135-883f-87a76d01585d","name":"gatsby-tinacms-remark","version":"0.8.4","pluginOptions":{"plugins":[]},"nodeAPIs":["setFieldsOnGraphQLNodeType"],"browserAPIs":["onClientEntry"],"ssrAPIs":[]}],"position":"fixed"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}