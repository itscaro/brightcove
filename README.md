# Get started

### Installation
$ npm install

### Build
$ gulp

This command will generate files in ./dist, commit this directory after each build.

### Using in Brightcove Studio
Put the RAW URL of the plugin that you want to use in Plugins/Javascript section in Brightcove as in the screenshot.

If you want the plugin to be executed during initialisation of videojs, you need to declare an empty entry in "Name, Options" section, with name for the name of the plugin and "{}" for the option.

![Alt text](/screenshots/plugins.png?raw=true "Optional Title")
![Alt text](/screenshots/options.png?raw=true "Optional Title")

# Plugins

### Logo

File name: logo.js

Options:

{
    "logo": base64 of the image [default: TL logo]
    "debug": debug mode [default: false]
}

### Secret Media

File name: sm.js

Options:

{
    "key": Key of Secret media service [default: empty]
    "url": URL of VAST to be unblocked [default: empty]
    "debug": debug mode [default: false]
}

### Scroll Into View

File name: scrollIntoView.js

Options: nothing

Dependancies: jQuery and prismamediadigital/pmd-isonscreen
