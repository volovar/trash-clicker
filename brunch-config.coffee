module.exports = config:
    files:
        javascripts: joinTo:
            'libraries.js': /^node_modules/
            'trash-clicker.js': /^app/
        stylesheets: joinTo: 'trash-clicker.css'