module.exports = function(grunt) {
  
  grunt.config('postcss', {
    options: {
      map: false,
      processors: [
        require('autoprefixer')({
          browsers: 'last 4 versions',
          cascade: false
        })
      ]
    },
    build: {
      src: 'assets/css/*.css'
    }
  });

  grunt.loadNpmTasks('grunt-postcss');
  
};