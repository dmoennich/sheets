let gulp = require("gulp");
let del = require("del");


//TODO task for creating public folder and copy views, css and js files there
//TODO add watcher

//remove distribution directory
gulp.task("clean", () => del(["dist"]));





