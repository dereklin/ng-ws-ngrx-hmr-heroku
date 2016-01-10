'use strict';

exports.config = {
	seleniumAddress : 'http://127.0.0.1:4444/wd/hub',
	specs : [ 'protractor/**/**.spec.js' ],
	framework : 'jasmine'
};
