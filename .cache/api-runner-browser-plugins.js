module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-tinacms/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/Users/mickdelaney/develop/gatsby/my-blog/node_modules/gatsby-tinacms-git","id":"ca65af08-4c10-5e6f-8b14-831709d38ab4","name":"gatsby-tinacms-git","version":"0.5.5","pluginOptions":{"plugins":[]},"nodeAPIs":["onCreateDevServer"],"browserAPIs":["onClientEntry"],"ssrAPIs":[]},{"resolve":"/Users/mickdelaney/develop/gatsby/my-blog/node_modules/gatsby-tinacms-remark","id":"4e049a88-2f70-5135-883f-87a76d01585d","name":"gatsby-tinacms-remark","version":"0.8.4","pluginOptions":{"plugins":[]},"nodeAPIs":["setFieldsOnGraphQLNodeType"],"browserAPIs":["onClientEntry"],"ssrAPIs":[]}],"position":"fixed"},
    },{
      plugin: require('../node_modules/gatsby-tinacms-git/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-tinacms-remark/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
