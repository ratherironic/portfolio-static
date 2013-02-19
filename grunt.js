module.exports = function(grunt) {

	var ROOT = 'www';
	var CSS = ROOT + '/stylesheets';
	var JS = ROOT + '/javascripts';
	var JSBIN = JS + '/generated';
	var CSSBIN = CSS + '/generated';

	// Project configuration.
	grunt.initConfig({

		// JS linting
		lint: {
			src: [
				JS + '/app/**/*.js'
			]
		},

		// JS beautifier options
		beautifier: {
			options: {
				indentSize: 1,
				indentChar: '\t',
				spaceAfterAnonFunction: false
			}
		},

		// JS beautifier
		beautify: {
			files: '<config:lint.src>'
		},

		// CSS minconcat
		cssmin: {
			app: {
				src: [
					CSS + '/reset.css',
					CSS + '/app/app.css',
					CSS + '/app/print.css'
				],
				dest: CSSBIN + '/app.min.css'
			}
		},

		// JS minconcat
		min: {
			app: {
				src: [
					'<config:lint.src>'
				],
				dest: JSBIN + '/app.min.js'
			}
		},

		jslint: {
			files: ['source/javascripts/**'],
			exclude: ['**/ignore-*.js'],
			directives: { // example directives
				browser: true,
				unparam: true,
				todo: true,
				predef: [ // array of pre-defined globals
				'jQuery']
			},
			options: {
				junit: 'docs/jslint/junit.xml',
				errorsOnly: true // only display errors
			}
		},
		compass: {
			local: {
				src: "source/scss",
				dest: "assets/generated/css",
				linecomments: true,
				forcecompile: false,
				debugsass: true,
				outputstyle: "compact"
			},
			development: {
				src: "source/scss",
				dest: "assets/generated/css",
				images: "source/images",
				linecomments: true,
				forcecompile: false,
				debugsass: true,
				outputstyle: "compact"
			},
			production: {
				src: "source/scss/production/",
				dest: "assets/generated/css",
				images: "source/images",
				linecomments: false,
				forcecompile: false,
				debugsass: false,
				outputstyle: "compressed"
			}
		},
		watch: {
			scss: {
				files: 'source/scss/**',
				tasks: 'compass:local'
			}
		},
	})

	// Default task.
	grunt.registerTask('default', 'cssmin min');
	grunt.registerTask('jstest', 'min copy:qunit qunit');
	grunt.registerTask('docs', 'yuidoc');
	// load grunt plugins
	grunt.loadNpmTasks('grunt-beautify');
	grunt.loadNpmTasks('grunt-crusher');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-jslint');
	grunt.loadNpmTasks('grunt-compass');
};
 