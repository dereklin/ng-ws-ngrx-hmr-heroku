// Karma configuration

module.exports = function(config) {
  config.set({

    // list of files / patterns to load in the browser
    files: [
      '../public/javascripts/libs/angular/angular.min.js',
      '../public/javascripts/libs/angular/angular-mocks.js',
      '../public/javascripts/modules/shopping-bag-directive.js',
      '../public/javascripts/shopping-bag.js',
      '../test/**/*Test.js',
      '../test/**/*Spec.js'
    ],
    frameworks: ['jasmine'],
    browsers: ['PhantomJS']
  });
};
