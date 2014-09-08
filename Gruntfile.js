/**
 * Created by emil on 14-9-8.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'

            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/<%= pkg.name%>.js'
            }
        },

        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

        qunit: {
            files: ['test/**/*.html']
        },

        jshint: {
            files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],

            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('test', ['jshint','qunit']);
    grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
};