module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'build/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [
					'src/constants.js',
					'src/main.js',
					'src/**/*.js'
				],
				dest: 'build/<%= pkg.name %>.js'
			}
		},
		jshint: {
			beforeconcat: ['src/**/*.js']
		},
		watch: {
			scripts: {
				files: ['src/**/*.js'],
				tasks: ['concat'],
				options: {
					interrupt: true
				}
			}
		}
	});

	// Load the plugins here
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('build', ['jshint', 'concat', 'uglify']);
	grunt.registerTask('dev', ['concat', 'watch']);

};