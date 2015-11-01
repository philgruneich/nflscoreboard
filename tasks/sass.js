module.exports = function(grunt) {
	
	grunt.config('sass', {
		options: {
			outputStyle: 'nested',
			precision: 5,
			imagePath: '../images'
		},
		build: {
			files: {
				'assets/css/<%= grunt.option(\"cssversion\") %>.css': 'build/sass/<%= grunt.option(\"cssversion\") %>.scss' 
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	
};