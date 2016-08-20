var browserSync = require('browser-sync'),
  gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  autoprefixer = require('gulp-autoprefixer');
/**
 * 编译 stylus
 */
gulp.task('stylus', () => {
  return gulp.src('./src/assets/stylus/*.styl')
    .pipe(stylus({
      compress: true
    }).on('error', console.log))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream())
})

/**
 * html
 */
gulp.task('views', () => {
  return gulp.src('./src/views/**/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream())
})
gulp.task('img', () => {
  return gulp.src('./src/assets/i/**')
    
    .pipe(gulp.dest('./dist/i'))
    .pipe(browserSync.stream())
})
gulp.task('js', () => {
  return gulp.src('./src/assets/js/**')
    
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream())
})
/**
 * 启动 browserSync 静态服务器
 */
gulp.task('serve', ['stylus', 'views','img','js'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: './dist',
    open: false
  })

  gulp.watch('./src/assets/stylus/**/*.styl', ['stylus'])
  gulp.watch('./src/views/**/*.html', ['views'])
  gulp.watch('./src/assets/js/**', ['js'])
})

gulp.task('build', ['stylus', 'views','img','js'])

gulp.task('default', ['serve'])