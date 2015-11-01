module.exports = function(grunt) {
	
	grunt.config('watch', {
		js: {
			files: ['build/js/**/*.js'],
			tasks: ['js'],
			options: {
				spawn: false
			}
		},
		sass: {
			files: ['build/sass/**/*.scss'],
			tasks: ['css'],
			options: {
				spawn: false,
			}
		},
		bower: {
			files: ['bower.json'],
			tasks: ['shell:bower']
		},
		components: {
			files: ['build/components/**/*.js'],
			tasks: ['sync:bowerjs']
		}
		// ,
		// all: {
		// 	files: ['assets/css/v10.min.css', 'assets/js/main.min.js'],
		// 	options: {
		// 		livereload: true
		// 	}
		// }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

}