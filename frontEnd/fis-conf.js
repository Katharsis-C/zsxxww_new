/**
 * Created by XX on 2016/11/4.
 */

fis.set('project.ignore', [
    'bower_components/**',
    'widget/**',
    'node_modules',
    '/.gitignore',
    '/*.json',
    '/*.md',
    '/bower_components/bootstrap/dist/css/*.map',
    'test/**',
    'test/js/**'
]);

fis.match('::packager', {
    postpackager: fis.plugin('loader')
});

//     修改html里面的js和css的路径
fis.match('public/javascripts/app.js', {
    url: '/javascripts/app.js'
});
fis.match('public/stylesheets/app.css', {
    url: '/stylesheets/app.css'
});
fis.match('public/javascripts/gallery.js',{
    url: '/javascripts/gallery.js'
});
fis.match('public/stylesheets/gallery.css',{
    url: '/stylesheets/gallery.css'
});


//      对app.js的处理
fis.match('/widget/*.js', {
    url: '/javascripts/app.js',
    optimizer: fis.plugin('uglify-js'),
    release: '/public/javascripts/app.js',
    packTo: '/public/javascripts/app.js',
    requires: ['bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js']
});
fis.match('bower_components/jquery/dist/jquery.min.js', {
    url: '/javascripts/jquery.min.js',
    release: '/public/javascripts/jquery.min.js'
    // packTo: '/public/javascripts/app.js',
    // packOrder:-10
});
fis.match('bower_components/bootstrap/dist/js/bootstrap.min.js', {
    url: '/javascripts/bootstrap.min.js',
    release: '/public/javascripts/bootstrap.min.js'
    // packTo: '/public/javascripts/app.js',
    // packOrder:-9
});

//       对ie加载文件的处理
fis.match('bower_components/html5shiv/dist/html5shiv.min.js', {
    url: '/javascripts/html5shiv.min.js',
    release: '/public/javascripts/html5shiv.min.js'
});
fis.match('bower_components/respond/dest/respond.min.js', {
    url: '/javascripts/respond.min.js',
    release: '/public/javascripts/respond.min.js'
});

//         对CSS的处理
fis.match('/widget/*.css', {
    url: '/stylesheets/app.css',
    optimizer: fis.plugin('clean-css'),
    preprocessor: fis.plugin('autoprefixer', {
        "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
        "cascade": true
    }),
    packTo: '/public/stylesheets/app.css',
    release: '/public/stylesheets/app.css'
});
fis.match('bower_components/bootstrap/dist/css/bootstrap.min.css', {
    url: '/stylesheets/app.css',
    release: '/public/stylesheets/app.css',
    packTo: '/public/stylesheets/app.css'
});
fis.match('bower_components/font-awesome/css/font-awesome.min.css', {
    url: '/stylesheets/app.css',
    release: '/public/stylesheets/app.css',
    packTo: '/public/stylesheets/app.css'
});

//     对图片的处理
fis.match('/images/*.png', {
    url: '$0',
    optimizer: fis.plugin('png-compressor'),
    release: '/public/$0'
});
fis.match('/images/*.{jpg,ico}', {
    url: '$0',
    release: '/public/$0'
});
fis.match('/images/*.tif', {
    release: false
});

//    对html的处理
fis.match('*.html', {
    optimizer: fis.plugin('html-compress'),
    release: '/public/html/$0',
    useCache: false
});

//     忽略fis-conf.js
fis.match('/*.js', {
    release: false
});

//      将fonts和bootstrap需要的map文件位置移动
fis.match('bower_components/bootstrap/dist/fonts/*', {
    url: '/fonts$0',
    release: '/public/fonts/$0'
});
fis.match('bower_components/font-awesome/fonts/*', {
    url: '/fonts$0',
    release: '/public/fonts/$0'
});
fis.match('bower_components/bootstrap/dist/css/bootstrap.min.css.map', {
    release: '/public/stylesheets/$0'
});

//   gallery文件的处理
fis.match('widget/page*.css', {
    url: '/stylesheets/gallery.css',
    release: '/public/stylesheets/gallery.css',
    packTo: '/public/stylesheets/gallery.css'
});
fis.match('widget/animation.js',{
    url: '/javascripts/gallery.js',
    release: '/public/javascripts/gallery.js',
    packTo: '/public/javascripts/gallery.js',
    requires:['bower_components/jquery/dist/jquery.min.js']
});
fis.match('widget/fullPage.js',{
    url: '/javascripts/gallery.js',
    release: '/public/javascripts/gallery.js',
    packTo: '/public/javascripts/gallery.js',
    requires:['bower_components/jquery/dist/jquery.min.js']
});
fis.match('widget/loading.js',{
    url: '/javascripts/gallery.js',
    release: '/public/javascripts/gallery.js',
    packTo: '/public/javascripts/gallery.js',
    requires:['bower_components/jquery/dist/jquery.min.js']
});
fis.match('resource/**',{
    url:'$0',
    release:'public/$0'
});
fis.match('widget/autoplay.js',{
    url: '/javascripts/gallery.js',
    release: '/public/javascripts/gallery.js',
    packTo: '/public/javascripts/gallery.js',
    requires:['bower_components/jquery/dist/jquery.min.js']
});
