### Build
$ gulp

This command will generate files in ./dist, commit this directory after each build.

### Using in Brightcove Studio
Put the RAW URL of the plugin that you want to use in Plugins/Javascript section in Brightcove as in the screenshot.

If you want the plugin to be executed during initialisation of videojs, you need to declare an empty entry in "Name, Options" section, with name for the name of the plugin and "{}" for the option.

![Alt text](/screenshots/plugins.png?raw=true "Optional Title")
![Alt text](/screenshots/options.png?raw=true "Optional Title")
