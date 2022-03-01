<template>
  <div class="container" id="app">
    <rocket />
    <bottom-menu />
    <firstScreen />
    <secondScreen />
    <threeScreen />
    <fourScreen />
    <fiveScreen />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    rocket: () => import('@/components/rocket'),
    bottomMenu: () => import('@/components/menu'),
    firstScreen: () => import('@/view/firstScreen'),
    secondScreen: () => import('@/view/secondScreen'),
    threeScreen: () => import('@/view/threeScreen'),
    fourScreen: () => import('@/view/fourScreen'),
    fiveScreen: () => import('@/view/fiveScreen')
  }
}
</script>

<style lang="less">
@font-face {
  font-family: '新细明体';
  src: url('~@/assets/css/font/新細明體v7.03(R).ttf');
}

html {
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
  .menu {
    display: block !important;
  }
  .container {
    margin-bottom: 100px !important;
  }
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

  // 第五页
  .footer-contact {
    flex-direction: column !important;
  }
  .contact-icon {
    margin-right: 10px !important;
  }
  .contact-msg {
    padding: 0 !important;
  }
}
@media print {
  // .resume_about {
  //   margin-bottom: 400px !important;
  // }

  .QRcode {
    img {
      width: 300px !important;
      height: 300px !important;
      margin-bottom: 50px;
    }
  }

  .download_container {
    display: none !important;
  }
  .menu,
  .rocket,
  .four-screen {
    display: none !important;
  }
  .three-screen {
    margin-top: 200px !important;
  }
}
@media (min-width: 1080px) {
  .three-screen {
    height: 100vh !important;
  }
}
@media (max-width: 750px) {
  .menu ul li a {
    font-size: 12px !important;
  }
  .modal_content {
    height: 600px !important;
  }
  .content-box {
    padding: 0 0 0 50px !important;
  }
}
</style>
