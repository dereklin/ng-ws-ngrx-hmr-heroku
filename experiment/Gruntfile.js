//'use strict';
//var os = require('os'), path = require('path');

module.exports = function(grunt) {

	/*
	var config = {
			downloaded : function(file) {
				return path.join('downloads', file);
			},
			artifact : function(name) {
				return 'http://10.9.11.97/build_artifacts' + name;
			}
		};
	var platform = os.platform();
	var chromeDriverUrl = null;
	var chromeDriverExeName = null;

	if (platform.match(/darwin/)) {
		chromeDriverUrl = '/selenium/chromedriver_mac32.zip';
		chromeDriverExeName = 'chromedriver';
	} else if (platform.match(/win32/)) {
		chromeDriverUrl = '/selenium/chromedriver_win32.zip';
		chromeDriverExeName = 'chromedriver.exe';
	} else if (platform.match(/linux/)) {
		chromeDriverUrl = '/selenium/chromedriver_linux32.zip';
		chromeDriverExeName = 'chromedriver';
	} else {
		throw ("Platform not recognised : " + platform)
	}

	var chromeDriverExe = config.downloaded(chromeDriverExeName);
	
	*/
	
	
	
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    karma: {
        options: {
          // point all tasks to karma config file
          configFile: 'config/karma.conf.js'
        },
        unit: {
          // run tests once instead of continuously
          singleRun: true
        }
    }
    /*
    ,
	download : {
		options : {
			extract : true,
			dir : 'downloads'
		},
		selenium : {
			url : config.artifact('/selenium/selenium-server-standalone-2.41.0.jar')
		},
		chromedriver : {
			url : config.artifact(chromeDriverUrl)
		}
	},
    
	protractor : {
		local : {
			options : {
				args : {
					baseUrl : 'http://localhost:5000/'
				},
				configFile : 'test/protractor-conf.js'
			}
		}
	}
    */
    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
//  grunt.registerTask('start:selenium', [ 'download:selenium', 'download:chromedriver', 'selenium' ]);
  
//  grunt.registerTask('test:browser', [ 'start:selenium', 'protractor:local' ]);
  // Default task(s).
  grunt.registerTask('default', ['karma:unit']);

};