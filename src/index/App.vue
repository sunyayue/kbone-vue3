<template>
  <div>
<!--    <div @click="change">切换</div>-->
    <div v-html="text"></div>
    <component :is="name"></component>
  </div>
</template>

<script>
import aaa from './AAA.vue'
import bbb from './BBB.vue'

export default {
  name: 'App',
  components:{
    aaa,
    bbb
  },
  data(){
    return{
      name:'aaa',
      // text:`<img src="" style="width:100%" alt="">`
      text:`<img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2496571732,442429806&fm=26&gp=0.jpg' width="100%">`
    }
  },
  mounted() {
    document.documentElement.style.fontSize = 100 + "px"
  },
  methods: {
    change(){
      this.name = 'aaa'
      // console.log(this.name)
    },
    insertImage() {
      // wx.chooseImage({
      //   count: 1,
      //   success: (res) => {
      //     this.editorCtx.insertImage({
      //       src: res.tempFilePaths[0],
      //       data: {
      //         id: 'abcd',
      //         role: 'god'
      //       },
      //       width: '100%',
      //       success: function (data) {
      //         console.log(data);
      //         console.log('insert image success');
      //       }
      //     });
      //   }
      // });
    }
  },
}
</script>

<style>
.tabbar {
  margin-top: 20px;
  padding: 0;
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: center;
}
.tabbar li {
  position: relative;
  display: block;
  height: 50px;
  width: 80px;
  text-align: center;
  line-height: 50px;
  background: #dff1e7;
  margin: 5px;
}
.tabbar li .link {
  display: block;
  width: 100%;
  height: 100%;
}
.btn {
  display: block;
  margin: 15px auto;
  width: 250px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #000;
  font-size: 16px;
  background: #dff1e7;
  border-radius: 5px;
}
</style>
