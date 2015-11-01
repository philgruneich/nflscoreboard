module.exports = function(grunt) {
  
  grunt.config('php', {
    dist: {
      options: {
        hostname: '127.0.0.1',
        base: './',
        port: 8011,
        keepalive: false,
        open: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-php');
  
};