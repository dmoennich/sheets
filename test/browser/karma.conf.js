// Karma configuration
// Generated on Sun Nov 22 2015 15:34:27 GMT+0100 (CET)
var path = require("path");

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: path.join(__dirname, "../../"),


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        "node_modules/lodash/dist/lodash.min.js",
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js",
        "node_modules/angular/angular.js",
		"node_modules/angular-mocks/angular-mocks.js",
		"dist/sheets-bundle.js",
        "node_modules/chance/dist/chance.min.js",
        "test/helper/**/*.js",
        "test/**/*Spec.js",
		"browser/modules/**/*.html"
    ],


    // list of files to exclude
    exclude: [
		"test/browser/karma.conf.js"
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
		"browser/modules/**/*.html": ["ng-html2js"]
    },

	  ngHtml2JsPreprocessor: {
		  stripPrefix: "browser"
	  },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
};
