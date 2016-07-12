const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');
const babel = require('gulp-babel');
const browserify = require('browserify');
var transform = require('vinyl-transform');
var source = require('vinyl-source-stream');
var fs = require('fs');

gulp.task('compress', (cb) => {
  pump([
      gulp.src('src/**/*.js'),
      uglify(),
      gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('babel', (cb) => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('browserify', ['babel'], (cb) => {
  fs.readdir('./build/js', (err, files) => {
    for(var file of files) {
      if (file.match(/.+js$/)) {
        console.log(file)
        browserify('build/js/' + file)
          .bundle()
          .pipe(source(file))
          .pipe(gulp.dest('dist/js'));
      }
    }

    cb()
  })
});

gulp.task('default', ['browserify']);
