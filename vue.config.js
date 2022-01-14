var glob = require('glob');
var path = require('path');

//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
	let entries = {};
        // basename, pathname;
        
	glob.sync(globPath).forEach(function(entry,i) {
		// basename = path.basename(entry, path.extname(entry));
        // pathname = basename; // 正确输出js和html的路径
        
		let filename=entry.split('src/pages/')[1]
		let middlePath=filename.split('/index.html')[0]
		let dirList=middlePath.split("/")

		entries[dirList[dirList.length-1]] = {
			entry: 'src/pages/' + middlePath + '/main.js',
			template: 'src/pages/' + middlePath + '/index.html',
			filename: middlePath + '.html',
		};
	});
    // console.log(entries)
    return entries;    
};

module.exports = {
    publicPath: '/', // 官方要求修改路径在这里做更改，默认是根目录下，可以自行配置
    outputDir: 'dist', //标识是打包哪个文件
    pages: getEntry('src/pages/**/index.html'),
    productionSourceMap: false,
    devServer: {
      open: true, // 项目构建成功之后，自动弹出页面
      host: 'localhost', // 主机名，也可以127.0.0.0 || 做真机测试时候0.0.0.0
      port: 8081, // 端口号，默认8080
      https: false, // 协议
      //跨域代理
      proxy: {
          '/api':{
            target:'http://www.baidu.com',// 测试环境
            changeOrigin: true,
            secure: false, // 不校验证书(https接口不能省略此参数)
            timeout:5000,//设置超时时间
            pathRewrite:{
                "^/api":""
            }
          }
      }
    },
    css: {
        loaderOptions: {
            sass: {
                // 根据自己样式文件的位置调整
                prependData: `@import "@/assets/css/base.scss";`//新版scss-loader(8.0及以上)
                // data:`@import "@/assets/css/base.scss";`//旧版sass-loader写法(8.0以下)
            }
        }
    }
};