<template>
  <div class="cntb">
    <canvas ref="canvas" type="2d" width="600" height="400" @touchstart="clickCanvas"/>
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
  },
  methods: {
    async clickCanvas(event) {
      console.log('gaga')
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
