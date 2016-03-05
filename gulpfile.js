var gulp = require('gulp');
// everything I npm install needs to be required in gulpfile
// by requiring it, it pulls it from package.json
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });
});

// Gulp watch syntax
// gulp.watch('app/scss/**/*.scss', ['sass']);

// Gulp watch syntax if you need task to occur before another
// gulp.task('watch', ['array', 'of', 'tasks', 'to', 'complete','before', 'watch'], function (){
//   // ...
// })

gulp.task('watch', ['browserSync'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Other watchers
})
