/* 
* @Author: anchen
* @Date:   2017-08-23 21:47:24
* @Last Modified by:   anchen
* @Last Modified time: 2017-08-24 22:01:58
*/

new Vue({
    el:"#app",
    data:{
        title:"hello world",
        totalMoney:0,
        producList:[]
    },
    filters:{

    },
    mounted:function (){
        this.cartView();
    },
    methods:{
        cartView:function (){
            var _this = this;
            this.$http.get("data/cart.json",{"id":123}).then(function (res) {
                _this.producList = res.body.result.list;
                _this.totalMoney = res.body.result.totalMoney;
            });
        }
    }
});