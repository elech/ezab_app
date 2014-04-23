var gulp = require('gulp');
//var gulputil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var karma = require('karma');
var livereload = require('gulp-livereload');
var jshint = require('gulp-jshint');


var lib_js = [
  'bower_components/angular/angular.js',
  'bower_components/angular-ui-router/release/angular-ui-router.js'
];

var src_js = [
  'app/app.js',
  'app/**/**/*.js'
];

var views = [
  'app/components/**/*.html'
]



//gulp.task('dev', ['staticsvr'], function(){
//  var lr = livereload();
//  gulp.watch(['test/unit/*.js'].concat(sourceJSFiles), ['lint', 'karma-unit']);
//  gulp.watch(['app/*.html', 'app/components/**/*.html', 'app/components/**/*.css'].concat(sourceJSFiles), ['concat', 'views', 'css']).on('change', function(file){
//    console.log('css')
//    lr.changed(file.path);
//  })
//});

gulp.task('livereload', function(){
  var server = livereload();
  gulp.watch('dist/*').on('')
});

gulp.task('views', function(){
  gulp.src(views)
    .pipe(gulp.dest('build/public/components/'))
});

gulp.task('lint', function(){
  gulp.src(src_js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('minify', function(){
  gulp.src('dist/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/main.min.js'))
});

gulp.task('concat', function(){
  var allFiles = files.concat(sourceJSFiles);
  gulp.src(allFiles)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/'))
})

gulp.task('css', function(){
  gulp.src(['bower_components/bootstrap/dist/css/bootstrap.css', 'app/components/**/*.css'])
    .pipe(concat('main.css'))
    .pipe(gulp.dest('build/public/'))
})

gulp.task('karma-unit', function(){
  var server = karma.server;
  var karmaFiles = [
      'bower_components/angular-mocks/angular-mocks.js',
      'test/unit/*.js'
  ];
  karmaFiles = lib_js.concat(src_js.concat(karmaFiles));
  var config = {
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    singleRun: true,
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ],
    files: karmaFiles
  };
  
  server.start(config, function(exitCode){
    console.log('Karma exited with ' + exitCode);
  })  
})

gulp.task('staticsvr', function(next){
  var staticS = require('node-static'),
    server = new staticS.Server('./' + 'build/'),
    port = 3000;
  require('http').createServer(function(req, res){
    req.addListener('end', function(){
      server.serve(req, res);
    }).resume();
  }).listen(port, function(){
    console.log('listening on port ' + port);
    next();
  })
})

gulp.task('build', function(){
  return gulp.src(lib_js.concat(src_js))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/'));
})

gulp.task('dev', ['test', 'staticsvr'], function(){
  var lr = livereload();
  gulp.watch(src_js.concat(views), ['build', 'views', 'css']).on('change', function(file){
    lr.changed(file.path)
  });

  gulp.watch(['build/index.html']).on('change', function(file){
    lr.changed(file.path);
  });

  //watch css and sass them
});

gulp.task('test', function(){
  gulp.watch(src_js, ['lint', 'karma-unit']);
})
