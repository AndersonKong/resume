<template>
  <div class="modal_container" v-if="view">
    <div class="modal">
      <div class="modal_content">
        <div class="close-icon" @click="close">
          <i class="iconfont icon-zhankai close"></i>
        </div>
        <img :src="url" />
      </div>
    </div>
    <div class="modal_mask" @click="close"></div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    view: false,
    url: ''
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
    }
  }
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
    overflow-y: auto;
    position: relative;
    // max-height: 50vh;
    img {
      width: auto;
      height: 800px;
      //   height: 100%;
      object-fit: cover;
      user-select: none;
    }
    .close-icon {
      background-color: #000;
      padding: 20px;
      right: 10px;
      top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
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
