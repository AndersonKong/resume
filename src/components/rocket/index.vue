<template>
  <div class="rocket" ref="rocket">
    <a href="#first-screen"
      ><i class="iconfont icon-rocket" @click="rocketFly"></i>
    </a>
  </div>
</template>

<script>
window.addEventListener('scroll', function () {
  console.log(window.scrollY)
  if (window.scrollY > 200) {
    window.show()
  } else if (window.scrollY == 0) {
    window.init()
  }
})
export default {
  name: 'index',
  data: () => ({
    height: -100
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
      this.$refs.rocket.style.display = 'none'
    },
    show () {
      this.$refs.rocket.style.display = 'block'
    }
  },
  mounted () {
    window.init = this.init
    window.show = this.show
  }
}
</script>
<style lang="less" scoped>
.rocket {
  position: fixed;
  display: none;
  z-index: 3;
  right: 5%;
  bottom: 20%;
  cursor: pointer;
  transition: all 1s;
  .icon-rocket {
    color: #3e82f7;
    font-size: 50px;
  }
}
</style>
