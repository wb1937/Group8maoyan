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
        <div @click="isBrandShow=!isBrandShow">品牌</div>
        <div @click="isSpecialShow=!isSpecialShow">特色</div>
    </div>

    <!-- 区域卡 -->
    <div class="area" v-show="isAreaShow">
      <van-tabs v-model="activeName">
        <van-tab title="商区" name="商区">
         <ul>
            <li v-for="(data,index) in dataList" :key="index">{{data.text}}({{data.info}})</li>
          </ul>
        </van-tab>
        <van-tab title="地铁站" name="地铁站">
          <ul>
            <li>444</li>
            <li>555</li>
            <li>6666</li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>

    <!-- 品牌卡 -->
    <div class="brand" v-show="isBrandShow">

    </div>

    <!-- 特色卡 -->
    <div class="special" v-show="isSpecialShow">

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
        isBrandShow:false,
        isSpecialShow:false,
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
  },
  computed:{
      dataList(){
          var newarr= this.cinemaList.map(item => item.addr.slice(0,3))
          // console.log(newarr)
          //所有区
          var areaList = ["全部",...Array.from(new Set(newarr))]
          var dataList = [];
          var sum = 0;
          for(var i=0;i<areaList.length;i++){
            var num =  newarr.filter(item=>item.includes(areaList[i])).length
            sum += num
            dataList.push({
              text:areaList[i],
              info:num
            })
          }
          dataList[0].info = sum
          // console.log(dataList)
          return dataList
      }
  },
  mounted(){
         axios.get("json/cinemas.json").then(res=>{
        // console.log(res.data)
        this.cinemaList = res.data.cinemas
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
      // justify-content: space-around;
      position:fixed;
      top:130px;
      left:0px;
      width: 100%;
      background: white;
      z-index: 10;
      .van-tabs{
        width:100%;
      }
      ul{
        width:30%;
        
        overflow:hidden;
        li{
          height:40px;
          line-height:40px;
          font-size:16px;
          text-align:center;
        }
      }
    }
</style>
