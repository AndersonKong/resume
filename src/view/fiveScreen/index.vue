<template>
  <div class="five-screen" id="five-screen">
    <div class="footer">

      <div class="footer-eval">
        <div class="eval-title">个人评价</div>
        <div class="eval-content">
          {{ eval }}
        </div>
      </div>
      <div class="footer-contact">
        <div class="contact contact-wechat">
          <span class="contact-icon">
            <i class="iconfont icon-wechat"></i>
          </span>
          <div class="contact-msg">
            <span>微信</span>
            <span>{{ contact.wechat }}</span>
          </div>
        </div>
        <div class="contact contact-email">
          <span class="contact-icon">
            <i class="iconfont icon-email"></i>
          </span>
          <div class="contact-msg">
            <span>邮箱</span>
            <span>{{ contact.email }}</span>
          </div>
        </div>
        <div class="contact contact-phone">
          <span class="contact-icon">
            <i class="iconfont icon-phone"></i>
          </span>
          <div class="contact-msg">
            <span>电话</span>
            <span>{{ contact.mobile }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fiveScreen',
  data: () => ({
    contact: {
      wechat: 'Anderson-Kong',
      email: 'AndersonKong@hotmail.com',
      mobile: '18927912786'
    },
    eval:
      '兴趣是最好的老师，通过自学手段，掌握了部分前端技术并且拥有自己的理解，从静态文本标签到网页交互脚本，不断挑战自我，学习了Javscript基础以及使用Vue等框架，对后端也有着PHP+Python的不同程度学习，相信自己能对未来的工作付诸更多的努力，积极参与团队项目'
  }),
  methods: {}
}
</script>
<style lang="less" scoped>
.five-screen {
  width: 100%;
  background-color: #495057;

  .footer {
    max-width: 1080px;
    padding: 50px;
    margin: 0 auto;
    .footer-contact {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .contact {
        display: flex;
        // justify-content: space-between;
        align-items: center;
        padding: 10px;
        border: 2px solid #e9ecef;
        border-radius: 4px;
        margin-bottom: 40px;
        transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover{
          border-color: #fdbd00;
          .contact-icon{
            background-color: #fdbd00;
          }
          .contact-msg span{
            color: #fdbd00;
          }
        }
        .contact-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
          border: 5px solid #212529;
          margin-right: 30px;
          flex-shrink: 1;
          i {
            font-size: 16px;
            color: #212529;
          }
          transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        .contact-msg {
          display: flex;
          flex-direction: column;
          padding: 10px;
          span {
            display: flex;
            color: #e9ecef;
            font-size: 14px;
            &:nth-child(1) {
              font-size: 18px;
              font-weight: 700;
              padding-bottom: 20px;
            }
            transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
          }
        }
      }
    }
    .footer-eval {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      .eval-title {
        font-size: 28px;
        color: #fdbd00;
        font-weight: 700;
        margin-bottom: 20px;
      }
      .eval-content {
        font-size: 16px;
        color: #e9ecef;
        letter-spacing: 1px;
        text-indent: 2em;
        line-height: 25px;
      }
    }
  }
}
</style>
