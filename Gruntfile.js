module.exports = function(grunt) {

	// Configuration
    grunt.initConfig({
        /* We can store the project settings from the package.json file into the pkg property. This allows us to refer to the values of properties within our package.json file, as we'll see shortly.
		*/
        pkg: grunt.file.readJSON('package.json'),
		
		// Pass in options to plugins, references to files, etc.

        /**
         * Sass task
         */
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none',
                },
                files: {
                    'src/compiled/style-human.css': 'sass/style.scss'
                }
            },
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none',
                },
                files: {
                    'src/compiled/style.css': 'sass/style.scss'
                }
            }
        },

        /**
         * Autoprefixer
         */
        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            // prefix all files
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'src/compiled/*.css',
                dest: 'css/'
            }
        },

        /**
         * Watch task
         */
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass','autoprefixer']
            }
        }

    });

	// Load plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
	
	// Register Tasks
    grunt.registerTask('default',['watch']);

}