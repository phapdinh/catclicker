module.exports = function(grunt) {
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
					'2007VAIO_SS06.min.jpg': '2007VAIO_SS06.jpg', // 'destination': 'source'
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
		}
	});

    grunt.loadNpmTasks('grunt-contrib-uglify'); // load the given tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('minifyImage', 'imagemin');
	grunt.registerTask('minifyCSS', 'cssmin');
    grunt.registerTask('default', ['uglify', 'watch']); // Default grunt tasks     
};
