// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular-devkit/build-angular/plugins/karma')
        ],
        client:{
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, 'coverage'), reports: [ 'html', 'lcovonly' ],
            fixWebpackSourcePaths: true
        },

        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,

        // for all platforms
        // browsers: ['Chrome', 'Firefox', 'Opera'],

        // only for mac
        // browsers: ['Chrome', 'Firefox', 'Opera', 'Safari'],

        browsers: ['ChromeHeadlessCI'],

        // browsers: ['ChromeHeadless'],
        // browsers: ['Chrome'],
        // browsers: ['Firefox'],
        // browsers: ['Opera'],
        // browsers: ['OperaWindows'],
        // browsers: ['Safari'],
        // browsers: ['Edge'],

        customLaunchers: {
            ChromeHeadlessCI: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            },
            OperaWindows: {
                base: 'Opera',
                flags: ['--ran-launcher']
            }
        },

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: 1,

        browserNoActivityTimeout: 100000,

        autoWatch: true,
        singleRun: true
    });
};
