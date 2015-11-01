module.exports = function(grunt) {

	grunt.config('concat', {
		build: {
			options: {
				separator: '\n'
			},
			files: {
				'assets/js/<%= grunt.option(\"jsoutput\") %>.js' : ['build/js/<%= grunt.option(\"jsoutput\") %>/*.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	
};