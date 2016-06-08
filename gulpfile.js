var browserSync         = require('browser-sync');
var webpackConfig 		= require('./webpack.config.js');
var gulp                = require('gulp');
var webpack             = require('webpack');
var gutil               = require('gulp-util');
var path                = require('path');
var fs                  = require('fs');
var compress            = require('compression');
var minifyHTML          = require('gulp-minify-html');

////////////////
//BROWSERSYNC //
////////////////
gulp.task('browser-sync', function() {
    browserSync.init({
    	server: {
            baseDir: path.join(__dirname, 'dist'),
            middleware:[
                compress()
            ]
        },
        ghostMode: {
            clicks: false,
            forms: false,
            scroll: true
        },
        port:8080,
        notify: false,
        open: 'local',
        browser: ['google chrome'], //, 'firefox']
        //logLevel: "debug"
        //proxy: "localhost:3000"
    });
});


gulp.task('webpack', function(callback) {
    webpack(webpackConfig, function(err, stats) {
                                if(err) throw new gutil.PluginError('webpack', err);
                                gutil.log('[webpack]', stats.toString({
                                    colors:true
                                }));
                                callback();
                                //console.log(stats.compilation)
                            });
});

gulp.task('html', function() {
    var opts = {
        conditionals: true,
        spare:true,
        comments:false
    };
 
    //if(PRODUCTION){
    //    return gulp.src(['./src/index.html', './src/app/**/*.html'])
    //                .pipe(minifyHTML(opts))
    //                .pipe(gulp.dest('./dist/'));
    //}else{
    gulp.src('./src/index.html').pipe(gulp.dest('./dist/'));

        return gulp.src(['./src/app/**/*.html', './src/app/**/*.css'])
                    .pipe(gulp.dest('./dist/app/'));
    //}
  
});

gulp.task('default', ['webpack', 'html', 'browser-sync'], function() {

    gulp.watch(
                'src/**/*.html',

                function(e){
                    gulp.start.apply(gulp, ['html', browserSync.reload])
                });

    gulp.watch([
                'src/**/*.js', 
                'src/**/*.ts', 
                'src/**/*.json',
                ],

                function(e){
                    gulp.start.apply(gulp, ['webpack', browserSync.reload])
                });
    
    gulp.watch([
                'src/app/styles/**/*.less',
                'src/app/styles/**/*.css'],

                function(e){
                    gulp.start.apply(gulp, ['webpack', browserSync.reload])
                });
});