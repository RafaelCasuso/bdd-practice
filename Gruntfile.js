module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9000,
                    open: {
                        target: 'http://localhost:9000/SpecRunner.html'
                    },
                    livereload: true
                }
            }
        },
        jshint: {
            all: [ 'spec/*.js','/src/*.js']
        },
        jasmine: {
            bdd: {
                src: 'src/**/*.js',
                options: {
                    specs: 'spec/*.js',
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'coverage/coverage.json',
                        report: 'coverage'
                    }
                }
            }
        },
        watch: {
            bdd: {
                options: {
                    livereload: true
                },
                tasks: ['jasmine'],
                files: ['**/*.js']
            }

        }
    });

    // Load the plugin that provides the "requirejs" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['jshint','connect', 'watch']);

    grunt.registerTask('travis', ['jshint','jasmine']);

};