module.exports = function(grunt) {
  
  grunt.config('sasslint', {
    options: {
      configFile: '.sass-lint.yml'
    },
    build: ['build/sass/**/*.scss']
  });

  grunt.loadNpmTasks('grunt-sass-lint');
  
};