<template>
  <div class="cntb">
<!--    <canvas ref="canvas" type="2d" width="600" height="400" @touchstart="clickCanvas"/>-->
    <canvas ref="canvas" type="2d" width="600" height="400" />
  </div>
</template>

<script>
export default {
  name: 'BBB',
  mounted() {
    const canvas = this.$refs.canvas
    console.log(canvas)
    canvas.width = 600
    canvas.height = 400
    canvas.addEventListener("touchstart", this.clickCanvas);
  },
  methods: {
    clickCanvas(event) {
      console.log('emit:touchstart')
      console.log(event)
    }
  },
}
</script>

<style>
.cntb {
  background: aqua;
}
</style>
