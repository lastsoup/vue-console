<template>
  <div class="main">
       <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
          <!-- Sidebar user panel -->
          <!-- search form -->
          <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
              <input type="text" name="q" class="form-control" placeholder="搜索...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="iconfont icon-sousuo"></i></button>
              </span>
            </div>
          </form>
          <!-- /.search form -->
          <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu">
             <li  v-for="item in $route.query.menu" :class="['treeview '+($route.meta.group==item.title?'active':'')]">
               <a href="javascript:;">
                <i class="iconfont icon-circle"></i><span>{{item.title}}</span>
                <i class="iconfont icon-zuo pull-right"></i>
               </a>
                <ul class="treeview-menu" :style="[{display: $route.meta.group==item.title?'block':'none'}]">
                    <li v-for="i in item.children">
                        <router-link v-if="i.disabled" :to="{path:i.path?i.path:'javascript:;'}"  class="disabled" event="">{{i.title}}</router-link>
                        <router-link v-else :to="{path:i.path?i.path:'javascript:;'}" >{{i.title}}</router-link>
                    </li>
                </ul>
            </li>
          </ul>
        </section>
        <!-- /.sidebar -->
      </aside>

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            <span id="mainHeadName"></span>
            <small id="mainHeadContent"></small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>业务</a></li>
            <li class="active" id="mainHeadActive"></li>
          </ol>
        </section>
        <!-- Main content -->
        <section class="content" id="maincontent">
          <router-view></router-view>
        </section>
      </div><!-- /.content-wrapper -->
  </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'Hello 6World!'
            }
        },
        methods:{
            addTab:function(){
               $.addTab(this.$route.meta.title,this.$route.meta.src);
            },
            goLink:function(){
                $.loadIframe({src:this.$route.meta.src});
            }
        },
         mounted:function(){
            // if(!this.$route.params.showtabs)
                //this.goLink()
         },
         watch: {
          // 如果路由有变化，会再次执行该方法
          "$route"(to, from){
            //    if(this.$route.params.showtabs)
            //     this.addTab();
            // else
            //     this.goLink()
          }
        }
    }
</script>
