const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const packageJson = require('./package.json')

// const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(
//   path.join(__dirname, 'tsconfig.json'),
//   [/* mapped paths to share */]);

module.exports = {
  mode: 'development',
  output: {
    publicPath: "http://localhost:8083/"
  },
  devServer: {
    port: 8083,
    historyApiFallback: {
        index: '/index.html'
    }
},
  optimization: {
    runtimeChunk: false
  },   
  // resolve: {
  //   alias: {
  //     ...sharedMappings.getAliases(),
  //   }
  // },
  // experiments: {
  //   outputModule: false
  // },
  plugins: [
    new ModuleFederationPlugin({
        //library: { type: "module" },

        // For remotes (please adjust)
        name: "helloAngularIonic",
        filename: "remoteEntry.js",
        exposes: {
            './Component': './/src/bootstrap.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        shared: packageJson.dependencies
        
    })
  ],
};
