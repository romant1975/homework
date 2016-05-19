module.exports = function(grunt) {

  grunt.initConfig({
     concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/build/script.main.js'
      }
    },
     uglify: {
      dist: {
        src: ['js/build/script.main.js'],
        dest: 'js/build/script.main.min.js'
      }
    },
     cssmin: {
    css: {
        src: ['style/src/*.css',],
        dest: 'style/dist/main.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);

};