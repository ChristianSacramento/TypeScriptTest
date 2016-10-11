var gulp = require('gulp');
var ts = require('gulp-typescript');


gulp.task('devChristian', function(){
    return gulp.src('*.ts')
    .pipe(ts({
        noImplicitAny: false,
        target: 'ES3',
    }))   
    .pipe(gulp.dest('.'));
});


gulp.task('devWatch', ['devChristian'] , function(){
    return gulp.watch('*.ts', ['devChristian']);
});

