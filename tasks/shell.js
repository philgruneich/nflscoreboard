module.exports = function(grunt) {
  
  grunt.config('shell', {
    options: {
      stderr: false
    },
    bower: {
      command: 'bower install'
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  
};