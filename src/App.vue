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

.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  // max-width: 1080px;
}
</style>
