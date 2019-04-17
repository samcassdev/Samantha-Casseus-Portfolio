var gulp = require('gulp'); //default
var sass = require('gulp-sass');//sass complie
var concat = require('gulp-concat'); //compile js plugins into one file
var concatCss = require('gulp-concat-css');//compile css plugins into one file
var watch = require('gulp-watch'); //sass compile to css

gulp.task('sass', function () {
    return gulp.src('html/scss/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('html/css/'));
});
gulp.task('watch', function () {
    gulp.watch('html/scss/**/*.scss', ['sass']);
});

gulp.task('concat', function () {
    return gulp.src(
            [
                'html/bower_components/jquery/dist/jquery.min.js',
                'html/js/popper.min.js',
                'html/bower_components/bootstrap/dist/js/bootstrap.min.js',
                'html/js/jquery.easing.min.js',
                'html/bower_components/pushy/js/pushy.min.js',
                'html/bower_components/waypoints/lib/jquery.waypoints.min.js',
                'html/bower_components/smooth-scroll/dist/js/smooth-scroll.min.js',
                'html/bower_components/wow/dist/wow.min.js',
                'html/js/jquery.preloader.min.js',
                'html/bower_components/magnific-popup/dist/jquery.magnific-popup.min.js',
                'html/bower_components/owl.carousel/dist/owl.carousel.min.js',
                'html/bower_components/jarallax/dist/jarallax.min.js',
                'html/bower_components/jarallax/dist/jarallax-video.min.js',
                'html/js/isotope.pkgd.min.js',
                'html/js/imagesloaded.pkgd.min.js',
                'html/bower_components/textillate/assets/jquery.lettering.js',
                'html/bower_components/textillate/assets/jquery.fittext.js',
                'html/bower_components/textillate/jquery.textillate.js',
                'html/js/jquery.sticky.js',
                'html/js/jquery.particleground.min.js',
                 'html/contact_form/contact.js'
            ])
            .pipe(concat('plugins.js'))
            .pipe(gulp.dest('html/js/plugins/'));
});

gulp.task('concatCss', function () {
    return gulp.src([
        'html/bower_components/bootstrap/dist/css/bootstrap.min.css',
        'html/bower_components/font-awesome/css/font-awesome.min.css',
        'html/bower_components/themify-icons/css/themify-icons.css',
        'html/css/animate.css',
        'html/bower_components/pushy/css/pushy.css',
        'html/bower_components/magnific-popup/dist/magnific-popup.css',
        'html/bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
        'html/bower_components/owl.carousel/dist/assets/owl.theme.default.min.css'
    ])
            .pipe(concatCss("plugins/plugins.css"))
            .pipe(gulp.dest('html/css/'));
});