<template>
  <div class="rocket" ref="rocket">
    <a href="#first-screen"
      ><i class="iconfont icon-rocket" @click="rocketFly"></i>
    </a>
  </div>
</template>

<script>
function rocketShow () {
  if (window.scrollY > 200) {
    window.show()
  } else if (window.scrollY <= 20) {
    window.init()
  }
}
function throttle (func, delay) {
  var last = 0
  return function () {
    var now = Date.now()
    if (now >= delay + last) {
      func.apply(this, arguments)
      last = now
    } else {
      console.log('距离上次调用的时间差不满足要求哦')
    }
  }
}

function debounce (func, delay) {
  var timeout
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, arguments)
    }, delay)
  }
}

window.addEventListener('scroll', throttle(rocketShow, 100))
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
    color: #fdbd00;
    font-size: 50px;
  }
}
</style>
