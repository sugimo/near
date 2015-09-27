module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      dist:
        files:  {
          'public/js/near.js': 'src/js/near.js',
          'public/js/map.js': 'src/js/map.js'
        }

    compass:
      dist:
        options:
          config: 'config.rb'

    watch:
      css:
        files: ['src/sass/*.scss']
        tasks: ['compass']
        options:
          atBegin: true
      js:
        files: ['src/js/*.js']
        tasks: ['uglify']
        options:
          atBegin: true

    connect:
      server:
        options:
          port: 8000,
          keepalive: true,
          hostname: '192.168.1.9',
          base: './public'

  })

  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-connect')

  grunt.registerTask('default', [ 'uglify', 'compass'])
  grunt.registerTask('server', [ 'connect'])
