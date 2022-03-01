<template>
  <div class="modal_container" v-if="view">
    <div class="modal" ref="modal">
      <div class="modal_content">
        <div class="close-icon" @click="close">
          <i class="iconfont icon-zhankai close"></i>
        </div>
        <img
          @mousewheel="mouseWheel"
          @mousedown="drag"
          :src="url"
          ref="ImagesBox"
        />
      </div>
    </div>
    <div class="modal_mask" ref="mask" @click="close"></div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    view: false,
    clickDown: false,
    url: '',
    scale: 1,
    offsetX: 0,
    offsetY: 0
  }),
  methods: {
    open (url) {
      this.url = url
      this.view = true
      document.body.style = 'overflow: hidden'
    },
    close () {
      this.view = false
      document.body.style = ''
    },
    mouseWheel (e) {
      let status = e.deltaY < 0
      if (status) {
        this.$refs.ImagesBox.style = `transform:scale(${this.scale + 0.1})`
        this.scale += 0.1
      } else if (!status && this.scale > 1) {
        this.$refs.ImagesBox.style = `transform:scale(${this.scale - 0.1})`

        this.scale -= 0.1
      }
    },
    drag (e) {
      this.clickDown = true

      this.$refs.ImagesBox.addEventListener('mousemove', e => {
        if (this.clickDown && this.scale > 1) {
          this.offsetX = e.clientX - this.$refs.modal.offsetLeft - e.offsetX
          this.offsetY = e.clientY - this.$refs.modal.offsetTop - e.offsetY
          console.log(this.offsetX, this.offsetY)
          this.$refs.ImagesBox.style = `transform:translate(${this.offsetX}px,${
            this.offsetY
          }px) scale(${this.scale - 0.1})`
        }
      })
      this.$refs.ImagesBox.onmouseup = () => {
        this.clickDown = false
      }
      this.$refs.modal.onmouseup = () => {
        this.clickDown = false
      }
      this.$refs.mask.onmouseup = () => {
        this.clickDown = false
      }
    }
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
.modal_container {
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  z-index: 9999;

  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal_mask {
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .modal_content {
    margin: 0 auto;
    max-width: 80vw;
    overflow: hidden;
    position: relative;
    // max-height: 50vh;
    img {
      width: auto;
      height: 800px;
      //   height: 100%;
      object-fit: cover;
      user-select: none;
      -webkit-user-drag: none;
    }
    .close-icon {
      background-color: #000;
      padding: 20px;
      right: 10px;
      top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 3;
      cursor: pointer;
      position: absolute;
      .close {
        transform: rotate(45deg) !important;
        color: #fff;
        position: absolute;
        &::before {
          transform: rotate(45deg) !important;
        }
      }
    }
  }
}
</style>
