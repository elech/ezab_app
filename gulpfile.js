var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var karma = require('karma');
var livereload = require('gulp-livereload');
var jshint = require('gulp-jshint');
var connect = require('connect');
var serveStatic = require('serve-static');
var proxy = require('proxy-middleware');
var url = require('url');
var replace = require('gulp-replace');


var lib_js = [
  'bower_components/angular/angular.js',
  'bower_components/angular-ui-router/release/angular-ui-router.js',
  'bower_components/angular-flash/dist/angular-flash.js',
  'bower_components/d3/d3.js',
  'bower_components/codemirror/lib/codemirror.js',
  'bower_components/codemirror/mode/javascript.js',
  'bower_components/angular-ui-bootstrap/dist/ui-bootstrap-0.11.0.js'
];

var src_js = [
  'app/app.js',
  'app/**/**/*.js'
];

var views = [
  'app/components/**/*.html'
]

var css = [
  'bower_components/codemirror/lib/codemirror.css',
  'app/components/main.css',
  'app/components/**/*.css'
];

gulp.task('livereload', function(){
  var server = livereload();
  gulp.watch('dist/*').on('')
});

gulp.task('views', function(){
  gulp.src(views)
    .pipe(gulp.dest('build/public/components/'))

  gulp.src(['bower_components/angular-ui-bootstrap/template/modal/window.html'])
    .pipe(gulp.dest('build/public/components/bootstrap/'))
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
  gulp.src(css)
    .pipe(concat('main.css'))
    .pipe(gulp.dest('build/public'))
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
  var app = connect();

  app.use('/api/v1/tokens', proxy(url.parse('http://localhost:8000/api/v1/tokens')));
  app.use('/api/v1/webproperties', proxy(url.parse('http://localhost:8000/api/v1/webproperties')));
  app.use('/api/v1/campaigns', proxy(url.parse('http://localhost:8000/api/v1/campaigns')));
  app.use(serveStatic('build/', {'index': 'index.html'}));
  app.listen(3000, function(){
    next();
    console.log('listen');
  });
})

gulp.task('build', function(){
  return gulp.src(lib_js.concat(['bower_components/angular-mocks/angular-mocks.js', 'test/mocks.js'].concat(src_js)))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/public/'));
})

gulp.task('dev', ['test', 'staticsvr'], function(){
  var lr = livereload();
  gulp.watch(src_js.concat(views), ['build', 'views', 'css']).on('change', function(file){
    lr.changed(file.path);
  });

  gulp.watch(['build/index.html']).on('change', function(file){
    lr.changed(file.path);
  });

  gulp.watch(css, ['build', 'views', 'css']).on('change', function(file){
    lr.changed(file.path);
  })

  //watch css and sass them
});

gulp.task('prodbuild', function(){
  return gulp.src(lib_js.concat(src_js))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/public'));
})

gulp.task('prodviews', function(){
  gulp.src(views)
    .pipe(gulp.dest('dist/public/components/'))
});

gulp.task('prodcss', function(){
  gulp.src(css)
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/public/'))
})

gulp.task('prodindex', function(){
  gulp.src('build/index.html')
    .pipe(replace(/EZAB_DEV/, 'EZAB_APP'))
    .pipe(gulp.dest('dist/'))
})

//how it should look in prod
gulp.task('dist', ['prodbuild', 'prodviews', 'prodcss', 'prodindex'], function(){
  //do something
});


gulp.task('test', function(){
  gulp.watch(src_js.concat(['test/unit/*.js']), ['karma-unit']);
});
