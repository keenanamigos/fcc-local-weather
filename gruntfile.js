// Load Grunt
module.exports = (grunt) => {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json")    
    });

    // Load Grunt plugins
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-postcss");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-uglify");
    grunt.loadNpmTasks("grunt-watch");

    // Register Grunt tasks
    grunt.registerTask("default", ["watch"]);
};

