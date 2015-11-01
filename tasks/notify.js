module.exports = function(grunt) {
	
	grunt.config('notify', {
    sass: {
      options: {
        title: 'Sass Done',
        message: 'Sass compiled. Browser refreshing.'
      }
    },
    js: {
      options: {
        title: 'Javascript Done',  // optional 
        message: 'Uglified and concatenated. Browser refreshing', //required 
      }
    }
  });

	grunt.loadNpmTasks('grunt-notify');

}