var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browsersync = require('browser-sync'),
    reload = browsersync.reload;
var path = {
	HTML:'./*.html',
	CSS:'./css/*.css',
	JS:'./js/*.js',
}
gulp.task('html',function(){
	return gulp.src(path.HTML)
	       .pipe(gulp.dest('./'));
})
gulp.task('css',function(){
	return gulp.src(path.STYLUS)
	       .pipe(gulp.dest('./css'))
	       .pipe(browsersync.stream());
});
gulp.task('minifyjs',function(){
	return gulp.src(path.JS)
	       .pipe(uglify())
	       .pipe(gulp.dest('./js'));
})
gulp.task('watch',function(){
	browsersync.init({
		server:{baseDir:"./"}
	});
	gulp.watch(path.HTML,['html'],reload);
	gulp.watch(path.CSS,['css']);
	gulp.watch(path.JS,['minifyjs']);
});
gulp.task('default',['watch']);
