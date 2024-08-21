const path = require('path');

module.exports = {
    entry: './public/ebuilder/widget/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}