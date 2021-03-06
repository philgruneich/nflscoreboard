'use strict'

module.exports = function (grunt) {

  var config = {
    pkg: require('./package.json')
  }

  grunt.option('cssversion', 'main');
  grunt.option('jsoutput', 'main');

  grunt.loadTasks('tasks');

  grunt.registerTask('js', ['eslint:devel', 'concat:build', 'uglify:main', 'notify:js']);
  grunt.registerTask('css', ['sass:build', 'cmq:build', 'postcss:build', 'cssmin:build', 'notify:sass']);
  grunt.registerTask('go', ['php', 'browserSync', 'watch']);
};