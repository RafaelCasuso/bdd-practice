module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9000,
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
                    specs: 'spec/*.js'
                }
            }
        },
        watch: {
            all: {
                options: {
                    livereload: true
                },
                files: ['**/*.js']
            }
            //scripts: {
            //    files: ['**/*.js'],
            //    tasks: ['requirejs']
            //}
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