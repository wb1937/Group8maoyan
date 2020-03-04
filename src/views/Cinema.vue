<template>
  <div>
    <div class="title">
      <!-- @click="handleChangePage('/city')" -->
        <div class="city">上海</div> 
        <button class="search" @click="handleClick()">
            <i class="iconfont icon-search"></i>
            <span>搜影院</span>
        </button>
    </div>

    <div class="select">
        <!-- 所有区域显示与隐藏，只有显示时添加高亮 -->
        <!--  -->
        <div @click="isAreaShow=!isAreaShow" :class="isAreaShow?'active':''" >全城</div>
        <div>品牌</div>
        <div>特色</div>
    </div>

    <div class="area" v-show="isAreaShow">
      <van-tabs v-model="activeName" >
        <van-tab title="商区" name="商区">
         <ul>
            <li>1111111111</li>
            <li>3333333</li>
            <li>44444</li>
          </ul>
        </van-tab>
        <van-tab title="地铁站" name="地铁站">
          <ul>
            <li>444</li>
            <li>555</li>
            <li>6666</li>
          </ul>
        </van-tab>
        <van-tab title="地铁站1" name="地铁站1">
          <ul>
            <li>444</li>
            <li>555</li>
            <li>6666</li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>

    <div class="content">
      <ul>
        <cinema-item v-for="(data,index) in cinemaList" :key="index" :data="data">

        </cinema-item>
      </ul>
    </div>
  </div>
</template>
<script>
import cinemaItem from './Cinema/cinemaItem'
import axios from 'axios'
import Vue from 'vue'
import { Tab, Tabs ,Toast} from 'vant'

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Toast);
export default {
  data(){
    return {
        isAreaShow:false,
        cinemaList:[],
        activeName:"商区",
    }
  },
  components:{
    cinemaItem
  },
  methods:{
    handleClick(){
      this.$router.push('/search')
    },
    // onClick(name, title) {
    //   Toast(title);
    //   if(title === "商区"){
    //       var newarr= this.cinemaList.map(item => item.addr).slice(0,4)

    //       var areaList = ["全部",...Array.from(new Set(newarr))]
    //       var dataList = [];
    //       for(var i=0;i<areaList.length;i++){
    //         var num =  newarr.filter(item=>item.includes(areaList[i])).length
    //         dataList.push({
    //           text:areaList[i],
    //           info:num
    //         })
    //       }
    //       this.items = dataList
    //   }else{

    //   }
    // },
  },
  computed:{

  },
  mounted(){
      axios.get("json/cinemas.json").then(res=>{
          // console.log(res.data)
          this.cinemaList = res.data.cinemas
          console.log(this.cinemaList)
      })
  }
}
</script>
<style scoped lang="scss"> 
    .active{
        color: red;
    }
    .title{
      display: flex;
      position: fixed;
      top: 50px;
      left: 0;
      width: 100%;
      padding:0 10px;
      box-sizing: border-box;
      height: 40px;
      line-height: 40px;
      background-color: #eee;
      z-index: 10;
      .city{
        width: 20%;
      }
      .search{
        flex: 1;
        height: 30px;
        margin: 5px 0;
        border:1px solid #ddd;
        border-radius :3px;
        background-color: #fff;
        text-align: center;
        line-height: 30px;
        span{
          display: inline;
          font-size: 14px;
        }
      }
    }
    .select{
      display: flex;
      position:fixed;
      top:90px;
      left:0px;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: white;
      z-index: 10;
      div{
        flex:1;
        text-align: center;
      }
    }

    .content{
      position: relative;
      top:130px;
      // height:300px;
      overflow: hidden;
    }

    .area{
      display: flex;
      justify-content: space-around;
      position:fixed;
      top:130px;
      left:0px;
      width: 100%;
      background: white;
      z-index: 10;
    }
</style>
