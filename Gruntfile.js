/// <binding BeforeBuild='default' />
/// <vs BeforeBuild='default' />
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
        main: {
            cwd: __dirname,
            src: './node_modules/azure-mobile-apps-js-client/dist/MobileServices.Web.js',
            dest: './www/MobileServices.Web.js'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy']);
};
