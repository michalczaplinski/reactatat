module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    wiredep: {

      task: {

        src: [
          'index.html',

        ],

        options: {
          // find options here:
          // https://github.com/taptapship/wiredep#configuration
        }
      }
    }
});

  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', ['wiredep']);


};
