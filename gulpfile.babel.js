let gulp = require("gulp");
let babel = require("gulp-babel");
let del = require("del");
let plumber = require("gulp-plumber");
let concat = require("gulp-concat");
let sourcemaps = require("gulp-sourcemaps");
let sass = require("gulp-sass");

const distDir = "./dist";

//TODO task for create js bundle with es6 support
//TODO task to create css from scss
//TODO task for lint js files
//TODO tasks for executings test
//TODO add watcher

//remove distribution directory
gulp.task("clean", () => del([distDir]));

gulp.task("buildjs", ["clean"], () => {
    return gulp.src(["./browser/app.js", "./browser/modules/**/*.js"])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('sheets-module.js'))
        .pipe(babel())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distDir));
});

gulp.task('buildcss', ["clean"], function () {
    return gulp.src('./browser/scss/sheets.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        //.pipe(rename('sheets.css'))
        .pipe(gulp.dest(distDir));
});

gulp.task("default", ["clean", "buildcss", "buildjs"]);




