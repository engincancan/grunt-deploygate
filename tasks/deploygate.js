/*
 * grunt-deploygate
 * https://github.com/engincancan/grunt-deploygate
 *
 * Copyright (c) 2015 Engin CAN
 * Licensed under the MIT license.
 */

'use strict';
module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks
    grunt.registerMultiTask('deploygate', 'Grunt plugin for File upload to deploygate', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            method: "POST"
        });
        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            // Concat specified files.
            var src = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    //grunt.log.warn('Source file "' + filepath + '" found.');
                    return true;
                }
            });
            grunt.config('upload_file.default_options.src', src);
            grunt.config('upload_file.default_options.options', options);
            grunt.task.run("upload_file");
        });
    });

};
