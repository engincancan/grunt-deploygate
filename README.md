# grunt-deploygate

> Grunt plugin for File upload to deploygate

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-deploygate --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-deploygate');
```

## The "deploygate" task

### Overview
In your project's Gruntfile, add a section named `deploygate` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  deploygate: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### paramObj

#### paramObj.message
Type: `String`
Default value: `''`

(Optional) Push message

#### paramObj.distribution_key
Type: `String`
Default value: `''`

Replace [distribution_key] with your distribution page URL hash key.
https://deploygate.com/distributions/[distribution_key]

#### paramObj.release_note
Type: `String`
Default value: `''`

(Optional) Distribution message

#### paramObj.disable_notify
Type: `String`
Default value: `''`

(Optional) If you set yes as a value, disable notify via email.(iOS only.)

#### paramObj.visibility
Type: `String`
Default value: `'private'`

(Optional) Set a new application's privacy setting by specifying private(default) or public. If you are using Personal Free account, you have to specify public to upload a new app since it doesn't have a slot for private app. No effect when updating.

### Usage Examples

#### Default Usage

```js
grunt.initConfig({
deploygate: {
            src: 'location/to/file',
            options: {
                url: "https://deploygate.com/api/users/[owner_name]/apps",
                paramObj: {
                    'token': "API_Key"
                }
            }
        }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
