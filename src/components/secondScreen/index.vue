<template>
  <div class="secondScreen">
    <div class="resume">
      <p>
        &emsp;来自广东省汕尾市,就读于广东工贸职业技术学院【专科学历应届生】。大学期间出于对于编程的喜爱，两年以来通过互联网和校内团体接触了Web开发，秉着对编程从0到1的成就感，让我对前端网页开发这个方向产生了浓厚的兴趣和求知欲。在校内参与过社团的小项目，接触了前后端的领域，积累了Web开发的基础。
      </p>
      <b>联系方式</b>
      <br />
      <p><b>微信</b>AndersonKong</p>
      <p><b>电话</b>18927912786</p>
      <p><b>邮箱</b>AndersonKong@hotmail.com</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'secondScreen'
}
</script>
<style lang="less" scope>
.secondScreen {
  width: 100vw;
  height: 100vh;
  background-color: #202020;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  .resume {
    width: 1080px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
