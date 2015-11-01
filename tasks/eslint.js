module.exports = function(grunt) {
	
	grunt.config('eslint', {
		devel: {
			src: ["build/js/<%= grunt.option(\"jsoutput\") %>/*.js"]
		}
	});

	grunt.loadNpmTasks('grunt-eslint');

}