'use strict';

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        uglify: {
			my_target: {
				files: { 'app.min.js': ['app.js']}  
			}
		},
		watch: {
			scripts: {
				files: ['./*.js'],
				tasks: ['uglify']
			}
		},
		imagemin: {                          // Task
			static: {                          // Target
				options: {                       // Target options
					optimizationLevel: 3
				},
				files: {                         // Dictionary of files
					'images/2007VAIO_SS06.min.jpg': 'images/2007VAIO_SS06.jpg', // 'destination': 'source'
				}
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'style.min.css': ['style.css']
				}
			}
		},
		jshint: {
			all: ['Gruntfile.js', 'app.js']
		},
		sass: {
			dist: {
				files: {
					'main.css': 'main.scss'
				}
			}
		}
	});

	grunt.registerTask('minifyImage', 'imagemin');
	grunt.registerTask('minifyCSS', 'cssmin');
	grunt.registerTask('test', 'jshint:all');
    grunt.registerTask('default', ['uglify', 'watch']); // Default grunt tasks     
};
