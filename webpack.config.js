const path  = require('path')

module.exports = {
    mode:'development',
    entry: './src/app.ts', // root entry file
    devServer:{
        static:[
            {
                directory: path.join(__dirname),
            }
        ]
    },
    output: {
        filename: 'bundle.js', // naming output file
        path: path.resolve(__dirname,'dist'), // writing path of folder 
        publicPath: '/dist/' // required for development mode
    },
    devtool:'inline-source-map',
    module: { // working with files
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    resolve:{
        extensions:['.ts','.js']
    },
    

}