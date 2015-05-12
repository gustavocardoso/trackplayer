module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      files: ['app/assets/sass/**/*.scss', 'app/assets/javascripts/**/player.js', 'app/assets/javascripts/**/loader.js'],
      tasks: 'default'
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'app/assets/stylesheets/player.css': [
            'app/assets/sass/player.scss'
          ]
        }
      },
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'app/assets/stylesheets/player.css': [
            'app/assets/sass/player.scss'
          ]
        }
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'app/assets/javascripts/player.min.js': ['app/assets/javascripts/player.js', 'app/assets/javascripts/loader.js']
        }
      }
    },

    imageEmbed: {
      dist: {
        src: ["app/assets/stylesheets/player.css"],
        dest: "app/assets/stylesheets/player.css",
        options: {
          deleteAfterEncoding: false,
          baseDir: 'assets/public'
        }
      }
    },

    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'app/assets/sass',
          cssDir: 'app/assets/stylesheets',
          environment: 'production',
          fontsPath: 'vendor/assets/fonts',
          imagesPath: 'app/assets/images',
          generatedImagesDir: 'app/assets/images',
          generatedImagesPath: 'app/assets/images',
          outputStyle: 'compressed'
        }
      },
      dev: {                    // Another target
        options: {
          sassDir: 'app/assets/sass',
          cssDir: 'app/assets/stylesheets',
          fontsPath: 'vendor/assets/fonts',
          imagesPath: 'app/assets/images',
          generatedImagesDir: 'app/assets/images',
          generatedImagesPath: 'app/assets/images',
          outputStyle: 'expanded'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-image-embed");
  grunt.loadNpmTasks('grunt-contrib-testem');

  // Default task(s).
  grunt.registerTask('javascripts', ['uglify']);
  grunt.registerTask('default', ['compass:dev', 'uglify']);
  grunt.registerTask('release', ['compass:dist']);
};