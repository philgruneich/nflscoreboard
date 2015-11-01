module.exports = function(grunt) {
	
	grunt.config('uglify', {
		options: {
			compress: {
				sequences: true,
				properties: true,
				dead_code: false,
				drop_debugger: true,
				unsafe: false,
				conditionals: true,
				comparisons: true,
				evaluate: true,
				booleans: true,
				loops: true,
				unused: false,
				hoist_funs: true,
				hoist_vars: false,
				if_return: true,
				join_vars: true,
				cascade: true,
				warnings: false,
				negate_iife: true,
				pure_getters: false,
				drop_console: false,
				keep_fargs: false
			},
			mangle: true,
			beautify: {
				indent_level: 4,
				indent_start: 0,
				quote_keys: false,
				space_colon: true,
				ascii_only: false,
				inline_script: false,
				width: 80,
				max_line_len: 32000,
				bracketize: false,
				semicolons: true,
				preamble: null,
				quote_style: 0
			},
			sourceMap: true,
			// screwIE8: true,
			maxLineLen: 32000,
			ASCIIOnly: false,
			preserveComments: 'some',
			report: false
		},
		main: {
			files: {
				'assets/js/<%= grunt.option(\"jsoutput\") %>.min.js' : ['assets/js/<%= grunt.option(\"jsoutput\") %>.js'],
				'assets/js/<%= grunt.option(\"jsoutput\") %>.dist.min.js' : ['assets/js/<%= grunt.option(\"jsoutput\") %>.dist.js'],
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

}