<template>
  <div class="container" id="app">
    <firstScreen />
    <secondScreen />
    <threeScreen />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    firstScreen: () => import('@/components/firstScreen'),
    secondScreen: () => import('@/components/secondScreen'),
    threeScreen: () => import('@/components/threeScreen')
  }
}
</script>

<style lang="less">
@font-face {
  font-family: '新细明体';
  src: url('~@/assets/css/font/新細明體v7.03(R).ttf');
}

html{
  scroll-behavior: smooth;
}

.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  // max-width: 1080px;
}
@media (max-width: 1080px) {
  // 第一页
  .firstScreen {
    // padding: 50px !important;
  }
  .nav_left {
    display: none !important ;
  }
  .nav_right {
    align-items: center !important;
    font-size: 40px !important;
  }
  .navigation {
    justify-content: center !important;
  }
  .content {
    span {
      font-size: 40px !important;
    }
  }

  //第三页
  .download_container {
    // display: none !important;
    visibility: hidden;
  }
}
@media print {
  .resume_about {
    margin-bottom: 400px !important;
    height: 800px !important;
    margin-bottom: 400px !important;
  }

  .download_container {
    display: none !important;
  }
}
@media (min-width: 1080px) {
  .three-screen {
    height: 100vh !important;
  }
}
</style>
