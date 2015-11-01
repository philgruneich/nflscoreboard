module.exports = function(grunt) {

	grunt.config('cssmin', {
		build: {
			options: {
				sourceMap: true
			},
			files: {
				'assets/css/<%= grunt.option(\"cssversion\") %>.min.css': 'assets/css/<%= grunt.option(\"cssversion\") %>.css'
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
}