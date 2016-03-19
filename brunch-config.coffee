module.exports = config:
    files:
        javascripts: joinTo:
            'libraries.js': /^node_modules/
            'trash-clicker.js': /^app/
        stylesheets: joinTo: 'trash-clicker.css'
    plugins:
        uglify:
            compress:
                sequences: true
                dead_code: true
                conditionals: true
                booleans: true
                unused: true
                if_return: true
                join_vars: true
                drop_console: true