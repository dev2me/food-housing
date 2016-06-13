
var gulp = require("gulp")
		haml = require("gulp-haml")
		sass = require("gulp-sass");

gulp.task("sass2css", function() {
	var scss = gulp.src("src/stylesheet/main.scss")
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('build/css/'));

	return scss;
});

gulp.task("haml2html", function() {
	var hml = gulp.src("./*.haml")
			.pipe(haml())
			.pipe(gulp.dest("./"));
	return hml;
});

gulp.task("observer", function(){
	gulp.watch(["index.haml", "src/stylesheet/main.scss"],["sass2css","haml2html"]);
});

gulp.task("default", ["observer"]);