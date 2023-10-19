const path  = require('path')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
    mode:'production',
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
    },
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
    plugins:[
        new CleanPlugin.CleanWebpackPlugin()
    ]

}