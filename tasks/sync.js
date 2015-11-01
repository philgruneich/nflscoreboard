module.exports = function(grunt) {
  
  grunt.config('sync', {
    bowerjs: {
      files: [{
        cwd: 'build/components',
        src: [
          'd3/d3.min.js',
          'skycons-html5/skycons.js'
        ],
        dest: 'assets/js/components/'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-sync');
  
};