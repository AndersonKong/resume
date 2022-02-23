<template>
  <div class="three-screen">
    <div class="content-box">
      <t-row style="height:100%;">
        <t-col :md="6" style="height:100%;">
          <div class="skill_left">
            <div class="personal_intro">
              <span>
                勤奋是学习的枝叶，当然很苦，智慧是学习的花朵，当然香郁。
                <!-- 来自广东省汕尾市,就读于广东工贸职业技术学院【专科学历应届生】。 -->
              </span>
              <span
                >大学期间出于对于编程的喜爱，两年以来通过互联网和校内团体接触了Web开发，秉着对编程从0到1的成就感，让我对前端网页开发这个方向产生了浓厚的兴趣和求知欲。在校内参与过社团的小项目，接触了前后端的领域，积累了Web开发的基础。
              </span>
            </div>
            <div class="other_skills">
              <div class="skill-title">技术</div>
              <div class="progress-bar">
                <ul>
                  <li>
                    <div class="progress-val">
                      <span>CSS3，Sass，Less </span>
                      <span>80% </span>
                    </div>
                    <div class="bar">
                      <span></span>
                    </div>
                  </li>
                  <li>
                    <div class="progress-val">
                      <span>Vuex，VueRouter </span>
                      <span>70% </span>
                    </div>
                    <div class="bar">
                      <span></span>
                    </div>
                  </li>
                  <li>
                    <div class="progress-val">
                      <span>NodeJS </span>
                      <span>50% </span>
                    </div>
                    <div class="bar">
                      <span></span>
                    </div>
                  </li>
                  <li>
                    <div class="progress-val">
                      <span>Laravel </span>
                      <span>60% </span>
                    </div>
                    <div class="bar">
                      <span></span>
                    </div>
                  </li>
                  <li>
                    <div class="progress-val">
                      <span>Git </span>
                      <span>80% </span>
                    </div>
                    <div class="bar">
                      <span></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </t-col>
        <t-col :md="6" style="height:100%;">
          <div class="skill_right">
            <div class="download_container">
              <div class="download">
                <div>Download Resume.docx</div>
                <div>
                  <i class="iconfont icon-xiazai"></i>
                </div>
              </div>
            </div>
            <div class="core_skills">
              <div class="core-skill-title">核心技术</div>
              <ul>
                <li>
                  <div class="circle-bar">
                    <!-- <div></div> -->
                    <svg>
                      <circle></circle>
                    </svg>
                    <div>80%</div>
                  </div>
                  <div class="core_skills_name">JavaScript,ES6</div>
                </li>
                <li>
                  <div class="circle-bar">
                    <svg>
                      <circle></circle>
                    </svg>
                    <div>80%</div>
                  </div>
                  <div class="core_skills_name">TypeScript</div>
                </li>

                <li>
                  <div class="circle-bar">
                    <!-- <div></div> -->
                    <svg>
                      <circle></circle>
                    </svg>
                    <div>80%</div>
                  </div>
                  <div class="core_skills_name">Vuejs</div>
                </li>
              </ul>
            </div>
          </div>
        </t-col>
      </t-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'threeScreen',
  data: () => ({}),
  methods: {},
  mounted () {}
}
</script>
<style lang="less" scoped>
@font-color: #505050;
@font-low-color: #bbbec0;
@color: #ffd43b;

.three-screen {
  width: 100vw;
  // height: 100vh;
  .content-box {
    max-width: 1080px;
    height: 100%;
    margin: 0 auto;
    padding: 50px 50px;

    .skill_left {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding-right:30px;
      max-width: 1080px;
      .personal_intro {
        height: 30%;
        display: flex;
        flex-direction: column;
        span {
          word-break: break-all;
          line-height: 28px;
          text-indent: 2em;
          &:nth-child(1) {
            color: @font-color;
            font-size: 30px;
            letter-spacing: 4px;
            margin-bottom: 20px;
            line-height: 40px;
            font-weight: 700;
          }
          &:nth-child(2) {
            color: @font-low-color;
            font-size: 16px;
            letter-spacing: 1px;
          }
        }
      }
      .other_skills {
        width: 100%;
        align-self: end;
        .skill-title {
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 30px;
          color: @font-color;
        }
        .progress-bar {
          width: 100%;
          ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            li {
              width: 100%;
              display: flex;
              flex-direction: column;
              margin-bottom: 20px;
              .progress-val {
                display: flex;
                justify-content: space-between;
                color: @font-color;
                margin-bottom: 10px;
              }
              .bar {
                width: 100%;
                height: 14px;
                border-radius: 10px;
                background-color: #adb5bd;
                span {
                  width: 80%;
                  height: 100%;
                  background-color: @color;
                  display: block;
                  z-index: 1;
                  border-radius: 10px;
                }
              }
            }
          }
        }
      }
    }
    .skill_right {
      width: 100%;
      max-width: 1080px;
      height: 100%;
      display: flex;
      flex-direction: column;
      .download_container {
        height: 30%;
        .download {
          display: flex;
          margin-left: auto;
          margin-top: 50px;
          width: 300px;
          height: 100px;
          div {
            display: flex;
            justify-content: center;
            align-items: center; // margin-top: 50px;
            &:nth-child(1) {
              width: 70%;
              height: 100%;
              background-color: @color;
              font-weight: 700;
            }
            &:nth-child(2) {
              width: 30%;
              height: 100%;
              background-color: #495057;
              cursor: pointer;
              .icon-xiazai {
                color: @color;
                font-size: 20px;
              }
            }
          }
        }
      }

      @circle-size: 120px;
      @circle-width: 10px;
      .core_skills {
        width: 100%;
        .core-skill-title {
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 30px;
          color: @font-color;
        }
        ul {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          padding: 50px 0;
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            .circle-bar {
              width: @circle-size;
              height: @circle-size;
              box-sizing: border-box;
              border-radius: 50%;
              border: @circle-width solid #495057;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              @circle-r: (@circle-size - @circle-width) / 2;
              @circle-d: @circle-r * 6.28;
              svg {
                width: @circle-size;
                height: @circle-size;
                circle {
                  cx: calc(@circle-size / 2);
                  cy: calc(@circle-size / 2);
                  r: calc(@circle-r);
                  fill: none;
                  stroke-width: @circle-width;
                  stroke-dasharray: calc(@circle-d);
                  stroke-dashoffset: 56;
                  transform-origin: center;
                  transform-box: fill-box;
                  transform: rotate(180deg);
                  -webkit-transform: rotate(180deg);

                  stroke: @color;
                }
              }
              div {
                font-size: 20px;
                color: @font-color;
                z-index: 2;
              }
            }
            .core_skills_name {
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
