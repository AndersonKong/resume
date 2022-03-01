<template>
  <div class="four-screen" id="four-screen">
    <div class="four-screen-container">
      <div class="four-screen-title">个人作品</div>
      <div class="four-screen-content">
        <t-row style="width:100%;" justify="start">
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
      'images/blog-1.jpeg',
      'images/blog-2.jpeg',
      'images/cms-1-1.jpeg',
      'images/cms-1-2.jpeg',
      'images/weibo.jpeg'
      // 'images/test-6.jpg',
      // 'images/test-7.jpg',
      // 'images/test-8.jpg',
      // 'images/test-9.jpg'
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
  padding: 60px 0;
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
          position: relative;
          overflow: hidden;
          &::before {
            content: '';
            z-index: 10;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #495057;
            // background-image: linear-gradient(
            //   to bottom right,
            //   transparent,
            //   rgba(253, 189, 0, 1)
            // );
            // opacity: 0.3;
            transform: translate(60%, 80%) rotate(45deg);
            transition: all 0.5s ease-in-out;
          }
          &:hover:before {
            transform: translate(100%, 100%) rotate(45deg);
          }
          &:hover img {
            transform: scale(1.2);
          }
          img {
            width: 100%;
            height: 100%;
            transition: all 0.5s;
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
