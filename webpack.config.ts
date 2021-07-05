const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const dependencies = require("./package.json").dependencies;

module.exports = {
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
        remotes:{
          'fu':'fusionLib3@https://demand-dev-10.s3.eu-west-1.amazonaws.com/fusion/v3/remoteEntry.js'
        },
        shared: {
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: dependencies["@angular/core"] },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: dependencies["@angular/common"] },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: dependencies["@angular/common"] },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: dependencies["@angular/router"]},
          "@angular/forms": { singleton: true, strictVersion: true, requiredVersion: dependencies["@angular/forms"]},
        }

    })
  ],
};
