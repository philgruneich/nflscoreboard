module.exports = function(grunt) {
	
	grunt.config('cmq', {
    options: {
      log: false
    },
    build: {
      files: {
        'assets/css/<%= grunt.option(\"cssversion\") %>.css': ['assets/css/<%= grunt.option(\"cssversion\") %>.css']
      }
    }
  });

	grunt.loadNpmTasks('grunt-combine-media-queries');

}