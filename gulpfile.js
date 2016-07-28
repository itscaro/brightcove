const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('browserify');
const glob = require("glob")
 
gulp.task('babel', (cb) => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('browserify', ['babel'], (cb) => {
  glob("build/**/*.js", function (er, files) {
      for(var file of files) {
	console.log(file)
        browserify(file)
          .bundle()
          .pipe(source(file.replace('build/js/', '')))
          .pipe(gulp.dest('dist/js'));
      }

      cb()
  })
});

gulp.task('default', ['browserify']);
