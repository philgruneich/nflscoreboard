module.exports = function(grunt) {
	
	grunt.config('concurrent', {
		watchAll: {
			tasks: ['watch:js', 'watch:sass', 'watch:all'],
			options: {
				logConcurrentOutput: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-concurrent');

}