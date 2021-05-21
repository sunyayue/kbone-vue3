<template>
  <div class="cnt">
    <p>I am aaa</p>
    <label>
      <input
          :value="name"
          placeholder="请输入"
          type="text"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'AAA',
  data(){
    return{
      name:'姓名'
    }
  }
}
</script>

<style>
.cnt {
  width: 100%;
  text-align: center;
  font-size: 0.16rem;
}
label{
  height: 0.3rem;
  display: inline-block;
  background: #eeeeee;
}
input{
  height: .3rem;
  min-height: 0;
}
</style>
