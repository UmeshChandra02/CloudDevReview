// babel.config.js
module.exports = {
    presets: ['react-app'], // Use the default CRA preset
    plugins: [
        '@babel/plugin-proposal-private-property-in-object' // Add the plugin
    ]
};
