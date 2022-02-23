<template>
  <div class="rocket" ref="rocket">
    <a href="#first-screen"
      ><i class="iconfont icon-rocket" @click="rocketFly"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    height: -150
  }),
  methods: {
    rocketFly () {
      const rocket = this.$refs.rocket
      rocket.style.transform = `translate(0,${this.height}px)`
      rocket.addEventListener('transitionend', () => {
        rocket.style.display = 'none'
      })
    },
    init () {
      this.height = 0
      thi
    }
  }
}
</script>
<style lang="less" scoped>
.rocket {
  position: fixed;
  z-index: 3;
  right: 5%;
  bottom: 20%;
  cursor: pointer;
  transform: translate(0, 80px);
  //   transform: translateY(-80px);
  transition: all 1s;
  .icon-rocket {
    color: #fdbd00;
    font-size: 50px;
  }
}
</style>
