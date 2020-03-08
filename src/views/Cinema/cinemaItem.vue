<template>
    <li>
        <h4>{{data.nm}}</h4>
        <div class="addr">
            <p>{{data.addr}}</p>
            <span>{{data.distance}}</span>
        </div>
        <div class="tag">
            <span v-show="data.tag.allowRefund">退</span>
            <span v-show="data.tag.endorse">改签</span>
            <span v-show="data.tag.snack">小吃</span>
            <span v-show="data.tag.vipTag">折扣卡</span>
            <span v-show="data.tag.hallType" v-for="item in data.tag.hallType" :key="item">{{item}}</span>
        </div>
        <div class="promotion">
            <i>卡</i>
            <span v-show="data.promotion.cardPromotionTag">{{data.promotion.cardPromotionTag}}</span>
        </div>
    </li>
</template>
<script>
export default {
    props:["data"],
    data(){
        return {

        }
    },
    mounted() {
      
    },

}
</script>
<style scoped lang="scss">
  *{
      padding: 0;
      margin: 0;
  }
 li{
    padding:10px;
    h4{
        margin: 5px 0;
    }
    .addr{
        display: flex;
        font-size: 13px;
        color: #666;
        p{
            flex:1;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        span{
            width: 20%;
        }
    }
    .tag{
        span{
            display: inline-block;
            padding: 0 3px;
            height: 15px;
            line-height: 15px;
            border: 1px solid #f00;
            border-radius: 2px;
            font-size: .6rem;
            margin: 0 4px;
        }
    }
    .promotion{
        i{
            display: inline-block;
            width: 15px;
            height: 14px;
            line-height: 14px;
            font-size: 14px;
            font-style:normal;
            background-color: skyblue;
        }
        span{
            margin-left: 5px;
            font-size: 11px;
            color: #999;
        }
    }
 }
</style>