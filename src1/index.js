/*webpack入口文件*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import './assets/base.css';
import './assets/main.css';


/*左侧菜单栏 */
import menu from './components/menu.vue';
import home from './components/home.vue';


const menuArry={
  demo:
  [
    {
      title:"DataGrid（数据网格）",
      children:
      [
        {
          title:"Static Tables",
          path:'StaticTables',
          iframe:"demo/pages/demo/datagrid/StaticTables.html"
          //component:StaticTables
        },
        {
          title:"Data Tables",
          path:"DataTables",
          iframe:"demo/pages/demo/datagrid/DataTables.html"
         //component:DataTables
        },
        {
          title:"Foo Tables",
          path:"FooTables",
          iframe:"demo/pages/demo/datagrid/FooTables.html"
          //component:FooTables
        },
        {
          title:"Bootstrap Tables",
          path:"BootstrapTables",
          iframe:"demo/pages/demo/datagrid/BootstrapTables.html"
          //component:BootstrapTables
        },
        {
          title:"DataGrid",
          path:"DataGrid",
          iframe:"demo/pages/demo/datagrid/DataGrid.html"
          //component:DataGrid
        }
      ]
    },
    {
      title:"Tree（树）",
      children:
      [
        {
          title:"zTree",
          path:"zTree",
          iframe:"demo/pages/demo/tree/zTree_v3/api/API_cn.html"
        }
      ]
    },
    {
      title:"Form（表单）",
      children:
      [
        {
          title:"CitySelect（仿淘宝区域下拉）",
          path:"CitySelect",
          iframe:"http://58.213.48.24:3004/"
        },
        {
          title:"Validation",
          path:"Validation",
          iframe:"demo/pages/demo/form/form.html"
        }
      ]
    },
    {
      title:"Dialog（弹出框）",
      children:
      [
        {
          title:"图片预览（仿QQ空间预览）",
          path:"qq",
          iframe:"demo/pages/demo/dialog/qq.html"
        }
      ]
    },
    {
      title:"Uploader（上传）",
      children:
      [
        {
          title:"Dropzone",
          path:"Dropzone",
          iframe:"demo/pages/demo/uploader/Dropzone.html"
        },
        {
          title:"tUpload（仿微博上传头像）",
          path:"tUpload",
          iframe:"demo/pages/demo/uploader/tUpload.html"
        }
      ]
    },
    {
      title:"WEBGL & WEBGIS",
      children:
      [
        {
          title:"WEBGL引擎",
          path:'webgl3d',
          iframe:'demo/pages/demo/webgl/index.html'
        },
        {
          title:"WEBGL物理引擎（仿跳一跳）",
          path:'webgl',
          iframe:'https://lastsoup.github.io/jump'
        },
        {
          title:"行政区域地图应用",
          path:'map',
          iframe:'demo/pages/demo/webgl/map.html'
        },
        {
          title:"3D城市（结合GIS地图）",
          path:'3dcity',
          iframe:'demo/pages/demo/webgl/3dcity.html'
        }
      ]
    }
  ],
  plugins:
  [
    {
      title:"Base（基础）",
      children:
      [
        {
          title:"基础脚本",
          path:'base'
        },
        {
          title:"扩展脚本",
          disabled:true
        }
      ]
    },
    {
      title:"手机（WebApp）",
      children:
      [
        {
          title:"xui.js",
          disabled:true
        },
        {
          title:"Swiper",
          disabled:true
        },
        {
          title:"Iscroll",
          disabled:true
        }
      ]
    },
    {
      title:"Tool（工具）",
      children:
      [
        {
          title:"混淆加密",
          disabled:true
        },
        {
          title:"iconfont图标库",
          path:'icon',
          iframe:'https://lastsoup.github.io/themes/nifty/icons-ionicons.html'
        }
      ]
    },
    
  ]
  ,
  extend:
  [
    {
      title:"移动前端（Mobile）",
      children:
      [
        {
          title:"示例1",
          path:'mobile1',
          iframe:'https://lastsoup.github.io/mobile/boluoyuan'
        },
        {
          title:"示例2",
          path:'mobile2',
          iframe:'https://lastsoup.github.io/mobile/yui'
        }
      ]
    },
    {
      title:"打印（Print）",
      children:
      [
        {
          title:"示例1",
          path:'print1',
          iframe:'http://www.zfxxgk.suzhou.gov.cn/sxqzf/szsrmzf/201801/t20180112_946803.html'
        },
        {
          title:"示例2",
          path:'print2',
          iframe:'http://adminlte.la998.com/pages/examples/invoice-print.html'
        },
        {
          title:"printArea",
          path:'printArea',
          iframe:'demo/pages/extension/print.html'
        }
      ]
    },
    {
      title:"主题（Theme）",
      children:
      [
        {
          title:"Nifty",
          path:'nifty',
          iframe:'https://lastsoup.github.io/themes/nifty'
        },
        {
          title:"Ace",
          path:'ace',
          iframe:'https://lastsoup.github.io/themes/ace'
        },
        {
          title:"AdminLTE",
          path:'adminlte',
          iframe:'http://adminlte.la998.com/'
        }
      ]
    },
    {
      title:"甘特图（Gantt）",
      children:
      [
        {
          title:"示例",
          path:"gantt",
          iframe:"demo/pages/extension/gantt.html"
        }
      ]
    },
    {
      title:"Map（地图）",
      children:
      [
        {
          title:"百度地图（在线）",
          path:'baidumap',
          iframe:'http://lbsyun.baidu.com/jsdemo.htm#a1_2'
        },
        {
          title:"Mapbox地图",
          path:'mapbox',
          iframe:'https://docs.mapbox.com/mapbox-gl-js/examples/box.com'
        }
      ]
    },
    {
      title:"Chart（图表）",
      children:
      [
        {
          title:"EChart",
          path:'echart',
          iframe:'https://echarts.baidu.com/echarts2/doc/example.html'
        },
        {
          title:"G2(科学VPN)",
          path:'g2',
          iframe:'http://antvis.github.io/g2/demo/index.html'
        },
        {
          title:"D3",
          path:'d3',
          iframe:'https://d3js.org/'
        }
      ]
    }
  ],
  library:
  [
    {
      title:"前端",
      children:
      [
        {
          title:"个人博客（仿微博）",
          path:'blog',
          iframe:'http://609a.com:3002'
        },
        {
          title:"HTML5",
          path:'html5',
          iframe:'http://www.w3school.com.cn/html5/index.asp'
        },
        {
          title:"CSS3",
          path:'css3',
          iframe:'http://www.w3school.com.cn/css3/index.asp'
        },
        {
          title:"Flex",
          path:'flex',
          iframe:'http://www.runoob.com/w3cnote/flex-grammar.html'
        }
      ]
    },
    {
      title:"Nodejs",
      children:
      [
        {
          title:"Vue",
          path:'vue',
          iframe:'https://cn.vuejs.org/v2/guide/'
        },
        {
          title:"Vue Router",
          path:'vue-router',
          iframe:'https://router.vuejs.org/zh/'
        },
        {
          title:"Koa2",
          path:'koa2',
          iframe:'https://chenshenhai.github.io/koa2-note/'
        },
        {
          title:"webpack",
          path:'webpack',
          iframe:'https://www.html.cn/doc/webpack2/'
        }
      ]
    },
    {
      title:"WebGL",
      children:
      [
        {
          title:"threejs",
          path:'threejs',
          iframe:'https://threejs.org/examples/'
        },
        {
          title:"babylonjs",
          path:'babylonjs',
          iframe:'https://www.babylonjs.com/'
        },
        {
          title:"claygl",
          path:'claygl',
          iframe:'http://examples.claygl.xyz/'
        },
        {
          title:"hightopo",
          path:'hightopo',
          iframe:'http://www.hightopo.com/demos/index.html'
        },
        {
          title:"Oimo.js",
          path:'Oimo',
          iframe:'http://lo-th.github.io/Oimo.js'
        }
      ]
    }
  ]
};

Vue.use(VueRouter);
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Index = { template: '<div class="main"><center><h1>欢迎使用anUI！</h1><p>作者：cqy</p><p>联系方式：qingtang166@qq.com</p></center></div>' }


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const menuRoutes=function(arr,active){
  if(!arr)return;
  var children=[];
  for(var i = 0; i < arr.length; i++){
    var item=arr[i].children;
    if(!item)continue; 
    for(var j = 0; j <item.length; j++){
      var oldchild=item[j];
      if(!oldchild.path)continue;
      var src=oldchild.iframe?oldchild.iframe:"/#/404";
      oldchild["meta"]={active:active,group:arr[i].title,title:oldchild.title,src:src};
      //router-view换成Iframe
      // var iframeStr='<div style="width:100%;height:100%;overflow: hidden;"><iframe src="'+(oldchild.iframe?oldchild.iframe:"http://www.0non0.com")+'" frameborder="no" scrolling="auto" allowtransparency="true" width="100%" height="100%"></iframe></div>';
      // var Iframe = {template:iframeStr}
      // oldchild.component=Iframe;
      //router-view换成Iframe
      children.push(oldchild);
    }
  }
  return children;
}

const routes = [
  { 
    path: '/',
    redirect:'/demo/StaticTables',
    meta:{title:"首页",active:"home"}
  },
  // { 
  //   path: '/home', 
  //   default:'/home',
  //   meta:{title:"Home（首页）",active:"home"}, 
  //   component:home 
  // },
  { 
    path: '/404', 
    default:'/404',
    component:{template:"<div>404</div>"}
  },
  { 
    path: '/demo', 
    default:'/demo/StaticTables',
    meta:{title:"Demo（教程）",active:"demo"}, 
    component: menu,
    children: menuRoutes(menuArry.demo,"demo")
  },
  { 
    path: '/plugins', 
    default:'/plugins/base',
    meta:{title:"Plugins（插件）",active:"plugins"}, 
    component: menu,
    children: menuRoutes(menuArry.plugins,"plugins")
  },
  { 
    path: '/extend', 
    default:'/extend/mobile1',
    meta:{title:"Extension（扩展）",active:"extend"}, 
    component: menu,
    children: menuRoutes(menuArry.extend,"extend")
  },
  { 
    path: '/library', 
    default:'/library/blog',
    meta:{title:"Library（藏书阁）",active:"library"}, 
    component: menu,
    children: menuRoutes(menuArry.library,"library")
  },
  { 
    path: '/download', 
    meta:{title:"Donwload（下载）",active:"download"}, 
    component: menu,
    children: menuRoutes(null,"download")
  },
  { 
    path: '/docs', 
    meta:{title:"Document（帮助文档）",active:"docs"}
  }
]


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  //mode: 'history',
  routes // (缩写) 相当于 routes: routes
})


router.beforeEach((to, from, next) => {
  to.query["head"]=routes;
  to.query["menu"]=menuArry[to.meta.active];
  to.params["showtabs"]=false;
  if (to.meta.group) {
      document.title = "anUI "+to.meta.group;
  }
  console.log(to);
  next()
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
