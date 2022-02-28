<template>
  <div class="four-screen" id="four-screen">
    <div class="four-screen-container">
      <div class="four-screen-title">个人作品</div>
      <div class="four-screen-content">
        <t-row style="width:100%">
          <t-col
            class="content-images"
            :md="4"
            :sm="6"
            :xs="12"
            v-for="(item, index) in images"
            :key="index"
          >
            <div class="images-container">
              <img :src="item" @click="imagePopup(item)" />
            </div>
          </t-col>
        </t-row>
      </div>
    </div>
    <ImageModal ref="ImageModal" />
    <!-- <div class="image-pop" ref="imagePop">
      <div class="image-pop-frame">
        <img src="images/test-1.jpg" />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'fourScreen',
  components: {
    ImageModal: () => import('@/components/modal')
  },
  data: () => ({
    images: [
      'images/test-1.jpg',
      'images/test-2.jpg',
      'images/test-3.jpg',
      'images/test-4.jpg',
      'images/test-5.jpg',
      'images/test-6.jpg',
      'images/test-7.jpg',
      'images/test-8.jpg',
      'images/test-9.jpg'
    ]
  }),
  methods: {
    imagePopup (url) {
      this.$refs.ImageModal.open(url)

      // this.$refs.imagePop.style.display = 'flex'
    }
  }
}
</script>
<style lang="less" scoped>
.four-screen {
  width: 100%;
  position: relative;
  .four-screen-container {
    width: 100%;
    max-width: 1080px;
    height: auto;
    margin: 0 auto;
    .four-screen-title {
      display: flex;
      justify-content: center;
      font-size: 34px;
      font-weight: 700;
      letter-spacing: 2px;
      color: #505050;
      margin-bottom: 50px;
    }
    .four-screen-content {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 80px;
      .content-images {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 20px;
        .images-container {
          width: 300px;
          height: 400px;
          cursor: pointer;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            transition: all 0.5s;

            &:hover {
              transform: scale(1.2);
            }
          }
        }
      }
    }
  }
  .image-pop {
    width: 100vw;
    height: 100vh;
    flex: 1;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background: rgba(5, 4, 4, 0.8);
    display: none;
    justify-content: center;
    align-items: center;
    .image-pop-frame {
      width: auto;
      height: 400px;
      img {
        width: 100%;
        height: 100%;
        user-select: none;
      }
    }
  }
}
</style>
