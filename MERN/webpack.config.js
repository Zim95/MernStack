module.exports ={
  //define entry
  entry: './src/index.js',
  output:{
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel-loader'
      }
    ]
  }
};
