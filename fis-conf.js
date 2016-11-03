/**
 * Created by XX on 2016/11/4.
 */

fis.set('project.ignore', [
    '/bower_components/**',
    '/widget/*.css',
    '/.gitignore',
    '/*.json',
    '/*.md'
]);

fis.match('::package', {
    postpackager: fis.plugin('loader')
});

fis.match('/widget/*.js', {
    optimizer: fis.plugin('uglify-js'),
    packTo: '/static/app.js'
});
fis.match('/bower_components/jquery/dist/jquery.min.js', {
    packTo: '/static/app.js',
    packOrder: -10
});
fis.match('/bower_components/bootstrap/dist/js/bootstrap.min.js', {
    packTo: '/static/app.js',
    packOrder: -9
});


fis.match('/widget/*.css', {
    preprocessor: fis.plugin('autoprefixer', {}),
    optimizer: fis.plugin('clean-css'),
    packTo: '/static/app.css'
});
fis.match('/bower_components/bootstrap/dist/css/bootstrap.min.css', {
    packTo: '/static/app.css',
    packOrder: -10
});
fis.match('/bower_components/font-awesome/css/font-awesome.min.css', {
    packTo: '/static/app.css',
    packOrder: -9
});
fis.match('/widget/general.css', {
    packOrder: -8
});

fis.match('/images/*.png', {
    optimizer: fis.plugin('png-compressor')
});

fis.match('*.html',{
    optimizer: fis.plugin('html-compress')
});
