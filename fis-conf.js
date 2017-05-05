//----使用雪碧图--------------
fis.match('::packager', {
  spriter:fis.plugin('csssprites')
});

fis.match('/img/*.{jpg,png,gif}', {
  useHash: true
});

fis.match('*.{js,css}', {
  useHash: true
});

fis.match('/js/*.js', {
  optimizer: fis.plugin('uglify-js'),
  useHash: true
});

fis.match('/css/*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css'),
  useHash: true
});

fis.match('/img/*.png', {
  optimizer: fis.plugin('png-compressor')
});

// You need install it.
// npm i fis-optimizer-html-minifier [-g]

//-----html压缩----------------------
fis.match('/*.html', {
  //invoke fis-optimizer-html-minifier
  optimizer: fis.plugin('html-minifier')
});



//资源定位---------------
/*fis.match('*.{js,css,png,gif}', {
    useHash: true // 开启 md5 戳
});*/

// 所有的 js
fis.match('/js/**.js', {
    //发布到/static/js/xxx目录下
    release : '/static/js$0'
});

// 所有的 css
fis.match('/css/**.css', {
    //发布到/static/css/xxx目录下
    release : '/static/css$0'
});

// 所有img目录下的.png，.gif文件
fis.match('/img/(*.{png,gif,jpg})', {
    //发布到/static/pic/xxx目录下
    release: '/static/pic/$1$2'
});

//sass预处理
fis.match('*.scss', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('scss'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css'
})