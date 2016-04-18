'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

// Load multimocks gulp task
var multimocksGulp = require('angular-multimocks/app/package/tasks/gulp/multimocksGulp');

// Define multimocks
gulp.task('multimocks', function () {
  // Call the multimocks gulp task with apropriate configuration
  multimocksGulp({
    src: path.join(conf.paths.src, '/app/mocks'),
    dest: path.join(conf.paths.tmp, '/serve/app/multimocks.module.js')
  });
});

