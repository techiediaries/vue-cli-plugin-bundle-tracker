const BundleTracker = require('webpack-bundle-tracker');

module.exports = (api, options) => {
  api.registerCommand('track', {
    description: 'track Webpack bundles',
    usage: 'vue-cli-service track',
    options: {
      '--path': `specify bundle path and filename`,
      '--publicPath': `specify publicPath`,
    }
  },  (args) => {


    const webpack = require('webpack')

    const webpackConfig = api.resolveWebpackConfig()
    const path = args.path || './webpack-stats.json'

    wpConfig.plugins.push(new BundleTracker({ path }))

    if (args.publicPath) {
      wpConfig.output.publicPath = args.publicPath
    }

    const wp = webpack(webpackConfig)
    wp.watch({}, () => {})
    
    //wp.run()
    
  })
}

module.exports.defaultModes = {
  track: 'development'
}
