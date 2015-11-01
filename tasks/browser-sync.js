module.exports = function(grunt) {
	
	grunt.config('browserSync', {
		build: {
			files: {
				src: [
						'assets/css/<%= grunt.option(\"cssversion\") %>.min.css', 
						'assets/js/*.js',
						'*.php'
					]
			},
			options: {
				watchTask: true,
				proxy: '<%= php.dist.options.hostname %>:<%= php.dist.options.port %>',
				port: 8012,
				open: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-browser-sync');
	
};