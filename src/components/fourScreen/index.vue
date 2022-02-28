<template>
  <div class="four-screen" id="four-screen">
    <div class="four-screen-title">个人作品</div>
    <div class="four-screen-content">
        <!-- <div class="content-image">
          <div class></div>
        </div>
        <div class="content-image">
          <img src="@/assets/images/test-2.jpg">
        </div>
        <div class="content-image">
          <img src="@/assets/images/test-3.jpg">
        </div>
        <div class="content-image">
          <img src="@/assets/images/test-4.jpg">
        </div>
        <div class="content-image">
          <img src="@/assets/images/test-5.jpg">
        </div>
        <div class="content-image">
          <img src="@/assets/images/test-6.jpg">
        </div>
        <div class="content-image">
          <img src="@/assets/images/test-7.jpg">
        </div>
        <div class="content-image">
          <img src="@/assets/images/test-8.jpg">
        </div>
        <div class="content-image">
          <img src="@/assets/images/test-9.jpg">
        </div> -->
        <t-row style="width:100%">
          <t-col class="content-images" :md="4" :sm="6" :xs="12" v-for="(item,index) in images" :key="index">
            <div class="images-container">
              <img :src="item" >
            </div>
          </t-col>
        </t-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fourScreen',
  data: () => ({
    images:[
      'images/test-1.jpg',
      'images/test-2.jpg',
      'images/test-3.jpg',
      'images/test-4.jpg',
      'images/test-5.jpg',
      'images/test-6.jpg',
      'images/test-7.jpg',
      'images/test-8.jpg',
      'images/test-9.jpg',
      
    ]
  }),
  methods: {
    
  }
}
</script>
<style lang="less" scoped>
.four-screen {
  width: 100%;
  max-width: 1080px;
  height: auto;
  margin: 0 auto;
  .four-screen-title{
    display: flex;
    justify-content: center;
    font-size: 34px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #505050;
    margin-bottom: 50px;
  }
  .four-screen-content{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
    .content-images{
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 20px;
      .images-container{
        width: 300px;
        height: 400px;
        overflow: hidden;
      img{
      width: 100%;
      height: 100%;
      transition: all 0.5s;
      &:hover{
        transform: scale(1.2);
      }
    }
      }
    }
    
    
  //   .content-image{
  //     width: 300px;
  //     height: 400px;
  //     overflow: hidden;
  //     img{
  //       width: 100%;
  //       height: 100%;
  //       &:hover{
  //         transform: scale(1.2);
  //         transition: all 0.5s;
  //       }
  //     }
  //   }
  // }
  }
}
</style>
