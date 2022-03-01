<template>
  <div class="menu">
    <ul>
      <li v-for="(item, i) in menuList" :key="i" @click="changeMenu(i)">
        <a :href="item.url" :class="{ active: current === i }">
          <i class="iconfont" :class="`icon-${item.icon}`"></i>
          <span>{{ item.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    current: 0,
    menuList: [
      { title: '首屏', icon: 'skill1', url: '#first-screen' },
      { title: '简历', icon: 'resume-line', url: '#second-screen' },
      { title: '技能', icon: 'skill1', url: '#three-screen' },
      { title: '作品', icon: 'zuopin', url: '#four-screen' }
    ]
  }),
  methods: {
    changeMenu (i) {
      this.current = i
    }
  }
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
        font-size: 18px;
        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

        &.active {
          color: #fdbe00;
        }
        .iconfont {
          font-size: 40px;
        }
      }
    }
  }
}
</style>
