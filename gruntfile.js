module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
          files: {
            src: ['model.js', 'app.js']
          }
        },

        concat: {   
            dist: {
                src: [
                    'model.js', // All JS in the libs folder
                    'app.js'  // This specific file
                ],
                dest: 'production/app.concat.js',
            }
        },        

        uglify: {
          build: {
            files:[{
              src: 'production/app.concat.js',
              dest: 'production/app.min.js',
            }]
          }
        },

        cssmin: {
           dist: {
              options: {
                 banner: ''
              },
              files: {
                 'production/style.min.css': ['style.css']
              }
          }
        },

        processhtml: {
          options: {
            data: {
              message: 'Hello world!'
            }
          },
          dist: {
            files: {
              'production/index.html': ['index.html']
            }
          }
        },

        watch: {
          scripts: {
            files: ['js/*.js','*.css'],
            tasks: ['concat', 'uglify','processhtml'],
            options: {
              spawn: false,
            },
          }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-css-url-replace');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['jshint','concat','uglify','cssmin','processhtml']);

};
