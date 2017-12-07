// Load Grunt
module.exports = (grunt) => {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		watch: {
			files: ["src/*.js"],
			tasks: ["babel"],
			options: {
				spawn: false
			}
		},
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
		},
		eslint: {
			target: ["src/*.js"]
		}
	});

	// Load Grunt plugins
	grunt.loadNpmTasks("grunt-babel");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-postcss");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-eslint");

	// Register Grunt tasks
	grunt.registerTask("default", ["watch", "eslint", "babel"]);
};

