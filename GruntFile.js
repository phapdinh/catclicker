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
		}
	});

    grunt.loadNpmTasks('grunt-contrib-uglify'); // load the given tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['uglify']); // Default grunt tasks     
};
