/// <binding BeforeBuild='default' />
/// <vs BeforeBuild='default' />
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
        main: {
            cwd: __dirname + '/node_modules/azure-mobile-apps-js-client',
            cmd: 'npm run build'
        }
    },
    copy: {
        main: {
            cwd: __dirname,
            src: './node_modules/azure-mobile-apps-js-client/dist/MobileServices.Web.js',
            dest: './www/MobileServices.Web.js'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');

  // Default task(s).
  grunt.registerTask('default', ['exec', 'copy']);
};
