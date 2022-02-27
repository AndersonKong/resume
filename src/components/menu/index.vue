<template>
  <div class="menu">
    <ul>
      <li>
        <a href="#second-screen">
          <i class="iconfont icon-skill1"></i>
          <span>简历</span>
        </a>
      </li>
      <li>
        <a href="#three-screen">
          <i class="iconfont icon-resume-line"></i>
          <span>技能</span>
        </a>
      </li>
      <li>
        <a href="#four-screen">
          <i class="iconfont icon-zuopin"></i>
          <span>作品</span>
        </a>
      </li>
      <li>
        <a href="#four-screen">
          <i class="iconfont icon-evaluate"></i>
          <span>评价</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: () => ({}),
  methods: {}
}
</script>
<style lang="less" scoped>
.menu {
  position: fixed;
  display: none;
  z-index: 3;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #495057;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    li {
      height: 100%;
      display: flex;
      align-items: center;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #e9ecef;
        font-size: 24px;
        .iconfont {
          font-size: 40px;
        }
      }
    }
  }
}
</style>
