// Load Grunt
module.exports = (grunt) => {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        babel: {
            options: {
                "sourceMap": true
            },
            dist: {
                files: [{
                    "expand": true,
                    "cwd": "src/",
                    "src": "**/*.js",
                    "dest": "dist/"
                }]
            }
        }  
    });

    // Load Grunt plugins
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-postcss");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    // Register Grunt tasks
    grunt.registerTask("default", ["babel"]);
};

