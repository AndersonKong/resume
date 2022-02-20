<template>
  <div class="container" id="app">
    <firstScreen />
    <secondScreen />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    firstScreen: () => import('@/components/firstScreen'),
    secondScreen: () => import('@/components/secondScreen')
  }
}
</script>

<style lang="less">
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  // max-width: 1080px;
}
</style>

<style>
  
body{
  background-color: #e1e7eb;
}
</style>
