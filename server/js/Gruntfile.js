"use strict";

module.exports = function(grunt) {

    console.log('Scheme: ' + process.env.LITTLE_DOCTOR_SCHEME);
    console.log('Hostname: ' + process.env.LITTLE_DOCTOR_HOSTNAME);

    // Project configuration
    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        /* Include individual task scripts */
        clean: {
            dist: ["./dist"],
        },
        mkdir: require("./tasks/mkdir.js"),
        uglify: require("./tasks/uglify.js")(grunt)
    });

    // Plugins
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-mkdir");

    // Build options
    grunt.registerTask("default", [
        "clean",
        "mkdir",
        "uglify"
    ]);

};
