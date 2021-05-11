const path = require('path'); //usa un require que traer la ruta
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
  /* experiments: {
    outputModule: true,
    syncWebAssembly: true,
    topLevelAwait: true,
    asyncWebAssembly: true,
    layers: true,
    lazyCompilation: true,
  }, */
    entry: path.resolve(__dirname, 'src/index.js'),
    
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename:'index.js', 
    },
    devServer: {
      contentBase: './dist',
      hot: true,
  },
    resolve:{
        extensions:['.js'] 

    },   
    
    module:{
      rules:[
        {
        test: /\.m?js$/,
        exclude:/node_modules/,
        use:{
            loader:'babel-loader'
        } 
        }
    ]
    },
    plugins:[
      new HtmlWebpackPlugin({
          inject:true,
          template: './dist/index.html',
          filename:'./index.html'
      })
  ]
}