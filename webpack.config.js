const path = require('path'); //usa un require que traer la ruta

module.exports ={
  experiments: {
    outputModule: true,
    syncWebAssembly: true,
    topLevelAwait: true,
    asyncWebAssembly: true,
    layers: true,
    lazyCompilation: true,
  },
    entry:'./src/index.js', //podemos modificar el default
    output: {
        path:path.resolve(__dirname, 'dist'), //donde se guarda
        filename:'index.js', //bondlu o un hash
    },
    mode:"development",
    resolve:{
        extensions:['.js'] //que queremos pasarle, solo extensiones .js
    },
    
    
    module:{
        rules:[
          { test: /\.json$/, loader: 'json-loader' }
          ,
            {
            test: /\.m?js$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader',
                } 
            },
            {
                test: /\.scss$/,
                use: [
                  'raw-loader',
                  {
                    loader:'sass-loader',
                    options: { 
                      sassOptions:{
                        includePaths: [path.resolve(__dirname, 'node_modules')]
                      }
                    }
                  } 
                ]
            }
        ]
    },
}