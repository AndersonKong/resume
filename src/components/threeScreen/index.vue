<template>
  <div class="three-screen" id="three-screen">
    <div class="content-box">
      <t-row :md="6">
        <t-col :md="6"
          ><div class="personal_intro">
            <span>
              勤奋是学习的枝叶，当然很苦，智慧是学习的花朵，当然香郁。
              <!-- 来自广东省汕尾市,就读于广东工贸职业技术学院【专科学历应届生】。 -->
            </span>
            <span>{{ introduce }}</span>
          </div>
        </t-col>
        <t-col :md="6"
          ><div class="download_container">
            <div class="download">
              <div>Download Resume.docx</div>
              <div>
                <a>
                  <i class="iconfont icon-xiazai"></i>
                </a>
              </div>
            </div>
          </div>
        </t-col>
      </t-row>
      <t-row :md="6">
        <t-col :md="6"
          ><div class="other_skills">
            <div class="skill-title">技术</div>
            <div class="progress-bar">
              <ul>
                <li v-for="(item, index) in skill" :key="index">
                  <div class="progress-val">
                    <span>{{ item.name }}</span>
                    <span>{{ item.mastery }}</span>
                  </div>
                  <div class="bar">
                    <span ref="masteryBar"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </t-col>
        <t-col :md="6">
          <div class="core_skills">
            <div class="core-skill-title">核心技术</div>
            <ul>
              <li v-for="(item, index) in coreSkill" :key="index">
                <div class="circle-bar">
                  <svg>
                    <circle ref="circle"></circle>
                  </svg>
                  <div>{{ item.mastery }}</div>
                </div>
                <div class="core_skills_name">{{ item.name }}</div>
              </li>
            </ul>
          </div>
        </t-col>
      </t-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'threeScreen',
  data: () => ({
    introduce:
      '大学期间出于对于编程的喜爱，两年以来通过互联网和校内团体接触了Web开发，秉着对编程从0到1的成就感，让我对前端网页开发这个方向产生了浓厚的兴趣和求知欲。在校内参与过社团的小项目，接触了前后端的领域，积累了Web开发的基础。',
    skill: [
      {
        name: 'CSS3，Sass，Less',
        mastery: `80%`
      },
      {
        name: 'Vuex，VueRouter',
        mastery: `70%`
      },
      {
        name: 'NodeJS',
        mastery: `50%`
      },
      {
        name: 'Laravel',
        mastery: `60%`
      },
      {
        name: 'Git',
        mastery: `80%`
      }
    ],
    coreSkill: [
      {
        name: 'Javascript，ES6',
        mastery: `80%`
      },
      {
        name: 'Typescript',
        mastery: `70%`
      },
      {
        name: 'Vuejs',
        mastery: `70%`
      }
    ]
  }),
  methods: {
    renderBar () {
      this.skill.forEach((item, index) => {
        this.$refs.masteryBar[index].style.width = item.mastery
      })
      const r = window
        .getComputedStyle(this.$refs.circle[0], null)
        .strokeDasharray.replace('px', '')
      this.coreSkill.forEach((item, index) => {
        let mastery = item.mastery.replace('%', '')
        mastery = 1 - mastery / 100
        this.$refs.circle[index].style.strokeDashoffset = r * mastery
      })
    }
  },
  mounted () {
    this.renderBar()
  }
}
</script>
<style lang="less" scoped>
@font-color: #505050;
@font-low-color: #bbbec0;
@color: #fdbd00;

.three-screen {
  width: 100vw;
  // height: 100vh;
  margin-top: 80px;
  // background-color: #5b7599;
  display: flex;
  align-items: center;

  .content-box {
    max-width: 1080px;
    // height: 100%;
    margin: 0 auto;
    margin-top: 30px;
    padding: 50px 50px;

    .personal_intro {
      width: 90%;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
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
            width: 90%;
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
              //google chrome explore
              -webkit-print-color-adjust: exact;
              //firefox explore
              -moz-print-color-adjust: exact;

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
    .download_container {
      // height: 30%;
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
            a {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
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
            border: @circle-width solid #a6b0bb;
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
                stroke-dashoffset: 0;
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
</style>
