let gulp = require("gulp");
let babel = require("gulp-babel");
let del = require("del");
let plumber = require("gulp-plumber");
let concat = require("gulp-concat");
let sourcemaps = require("gulp-sourcemaps");
let sass = require("gulp-sass");
let karmaServer = require("karma").Server;

const distDir = "./dist";

//TODO task for lint js files
//TODO tasks for executings test


/**
 * FE SETUP
 */

gulp.task("clean", () => del([distDir]));

gulp.task("buildjs", ["clean"], () => {
    return gulp.src(["./browser/app.js", "./browser/modules/**/*.js"])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('sheets-bundle.js'))
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

// buildcss and buildjs will wait, until clean tasked finished
gulp.task("default", ["clean", "buildcss", "buildjs"]);


gulp.task("watch", ["default"], () => {
    gulp.watch(["./browser/modules/**/*.js", "./browser/scss/**"], ["default"])
        .on("change", (event) => console.log(`${event.path} was changed`));
});


/**
 * TEST CONFIG
 */

gulp.task("testbrowser", (done) => {
    new karmaServer({
        configFile: __dirname + '/test/browser/karma.conf.js',
        singleRun: true
    }, done).start();
});


gulp.task("test", ["testbrowser"]);













