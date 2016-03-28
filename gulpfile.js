/**
 * Created by deronlee on 3/25/16.
 */

var gulp = require('gulp');
var test = require('./test/test')

gulp.task('default', function() {
    // place code for your default task here
    test.testmain();
});

