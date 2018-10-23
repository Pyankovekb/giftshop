var gulp = require('gulp'),
    sass = require('gulp-sass'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache');


gulp.task('sass', function() {
    return gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss'])
            .pipe(sass({outputStyle: 'expanden'}).on('error', sass.logError))
            .pipe(gulp.dest('app/css'))
});


gulp.task('clear', function() {
    return del.sync('dist/');
});

gulp.task('watch', function() {
    gulp.watch(['app/sass/**/*.sass', 'app/sass/**/*.scss'], ['sass'])
});

gulp.task('default', ['watch']);


gulp.task('cacheClear', function() {
    return cache.clearAll();
})

gulp.task('img', function() {
    gulp.src('app/img/**/*')
                .pipe(cache(imagemin({
                    interlaced: true,
                    progressive: true,
                    svgoPlugins: [{removeViewBox: false}],
                    une: [pngquant()]
                })))
                .pipe(gulp.dest('dist/img'));
})


gulp.task('build', ['clear', 'sass', 'img'], function() {
    var buildCss = gulp.src([
        'app/css/main.css',
    ])
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
    .pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'));

    var buldHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist/'));
});

