<template>
  <div class="secondScreen">
    <div class="resume">
      <t-row style="width: 100%; margin: 0 20px">
        <t-col class="personal_msg" style="margin:0 20px;" :md="6">
            <div class="personal_about">
              <span class="msg_tag">姓名:</span>
              <span class="msg_value">江佩杰</span>
              <span class="msg_tag">英文名:</span>
              <span class="msg_value">AndersonKong</span>
              <span class="msg_tag">电话:</span>
              <span class="msg_value">18927912786</span>
              <span class="msg_tag">微信:</span>
              <span class="msg_value">AndersonKong</span>
              <span class="msg_tag">邮箱:</span>
              <span class="msg_value">AndersonKong@hotmail.com</span>
              <span class="msg_tag">钉钉:</span>
              <span class="msg_value">AndersonKong@hotmail.com</span>
            </div>
        </t-col>
        <t-col :md="6">
          <t-col>
            <t-row class="experience"> 12312321 </t-row>
            <t-row class="experience"> </t-row>
            <t-row class="experience"> </t-row>
            <t-row class="experience"> </t-row>
          </t-col>
        </t-col>
      </t-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "secondScreen",
};
</script>
<style lang="less" scope>
@fontSize: 18px;

.secondScreen {
  width: 100vw;
  height: 100vh;
  // background-color: #202020;
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
  .personal_about{
    display: grid;
    grid-template-columns:8em 1fr;
    text-align: right;
    // grid-template-rows: 1fr 1fr;
    span{
      margin-left: 20px;
      color: #505050;
      font-size: 20px;
      font-weight: bold;
      &.msg_value{
        text-align: left !important;
        color: #808080;
      }
    }
  }

  .personal_msg {
    padding: 50px;
  }
  // .msg_tag {
  //   color: #808080;
  //   margin-right: 20px;
  //   font-size: @fontSize;
  // }
  // .msg_value {
  //   color: #000;
  //   font-size: @fontSize;
  // }
  .experience {
    display: flex;
    margin-bottom: 16px;
  }
  .experience:nth-child(1)::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: aquamarine;
  }
  .experience::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #808080;
  }
}
</style>
