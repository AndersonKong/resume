<template>
  <div class="first-screen" id="first-screen">
    <!-- <div style="position:sticky;top:10px;left:0;color:blue;z-index:999;width:100%;">
      <a style="padding:10px;" href="#second-screen">Resume</a>
      <a style="padding:10px;" href="#three-screen">Skill</a>
   </div> -->
    <!-- <div class="menu">
      <div class="menu-content" ref="menuContent" :class="{ show: isShow }">
        <ul>
          <li><a href="#second-screen">Resume</a></li>
          <li><a href="#three-screen">Skill</a></li>
          <li><a href="#four-screen">Works</a></li>
        </ul>
      </div>

      <div class="menu-button" @click="menuShow">
        <span
          class="menu-global menu-top"
          :class="{ 'menu-top-click': isShow }"
        ></span>
        <span
          class="menu-global menu-middle"
          :class="{ 'menu-middle-click': isShow }"
        ></span>
        <span
          class="menu-global menu-bottom"
          :class="{ 'menu-bottom-click': isShow }"
        ></span>
      </div>
    </div> -->
    <div class="background"></div>
    <div class="first-container">
      <div class="navigation">
        <div class="nav_left">
          <div>
            <img src="@/assets/images/navigation.svg" style="width: 60vw" />
          </div>
          <div>
            <a href="#second-screen">Resume</a>
            <a href="#three-screen">Skill</a>
            <a href="#four-screen">Works</a>
          </div>
        </div>
        <div class="nav_right">
          <span>Anderson Kong</span>
          <!-- <span>Resume</span> -->
        </div>
      </div>
      <div class="content">
        <span>PERSONAL</span>
        <span>RESUME</span>
        <span>个人简历</span>
      </div>
      <div class="footer">
        <div style="word-break: noword">
          应届毕业 广东工贸职业技术学院 2019-2022
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Particle from '@/utils/particle'

function init () {
  const rhombus =
    '<svg viewBox="0 0 13 14"><path class="rhombus" d="M5.9,1.2L0.7,6.5C0.5,6.7,0.5,7,0.7,7.2l5.2,5.4c0.2,0.2,0.5,0.2,0.7,0l5.2-5.4 C12,7,12,6.7,11.8,6.5L6.6,1.2C6.4,0.9,6.1,0.9,5.9,1.2L5.9,1.2z M3.4,6.5L6,3.9c0.2-0.2,0.5-0.2,0.7,0l2.6,2.6 c0.2,0.2,0.2,0.5,0,0.7L6.6,9.9c-0.2,0.2-0.5,0.2-0.7,0L3.4,7.3C3.2,7.1,3.2,6.8,3.4,6.5L3.4,6.5z" /></svg>'

  const pentahedron =
    '<svg viewBox="0 0 561.8 559.4"><path class="pentahedron" d="M383.4,559.4h-204l-2.6-0.2c-51.3-4.4-94-37-108.8-83l-0.2-0.6L6,276.7l-0.2-0.5c-14.5-50,3.1-102.7,43.7-131.4 L212.1,23C252.4-7.9,310.7-7.9,351,23l163.5,122.5l0.4,0.3c39,30.3,56,82.6,42.2,130.3l-0.3,1.1l-61.5,198 C480.4,525.6,435.5,559.4,383.4,559.4z M185.5,439.4h195.2l61.1-196.8c0-0.5-0.3-1.6-0.7-2.1L281.5,120.9L120.9,241.2 c0,0.3,0.1,0.7,0.2,1.2l60.8,195.8C182.5,438.5,183.7,439.1,185.5,439.4z M441,240.3L441,240.3L441,240.3z"/></svg>'
  const x =
    '<svg viewBox="0 0 12 12"> <path class="x" d="M10.3,4.3H7.7V1.7C7.7,0.8,7,0,6,0S4.3,0.8,4.3,1.7v2.5H1.7C0.8,4.3,0,5,0,6s0.8,1.7,1.7,1.7h2.5v2.5 C4.3,11.2,5,12,6,12s1.7-0.8,1.7-1.7V7.7h2.5C11.2,7.7,12,7,12,6S11.2,4.3,10.3,4.3z"/></svg>'

  const circle =
    '<svg x="0px" y="0px" viewBox="0 0 13 12"> <path class="circle" d="M6.5,0.1C3.4,0.1,0.8,2.8,0.8,6s2.6,5.9,5.7,5.9s5.7-2.7,5.7-5.9S9.7,0.1,6.5,0.1L6.5,0.1z M6.5,8.8 C5,8.8,3.8,7.6,3.8,6S5,3.2,6.5,3.2S9.2,4.4,9.2,6S8,8.8,6.5,8.8L6.5,8.8z"/> </svg>'

  const point =
    '<svg viewBox="0 0 12 12"> <path class="point" d="M6,7.5L6,7.5C5.1,7.5,4.5,6.9,4.5,6v0c0-0.9,0.7-1.5,1.5-1.5h0c0.9,0,1.5,0.7,1.5,1.5v0C7.5,6.9,6.9,7.5,6,7.5z "/> </svg>'

  function randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const data = [point, rhombus, pentahedron, circle, x]

  let isPaused = false
  window.onblur = function () {
    isPaused = true
  }.bind(this)

  window.addEventListener(
    'visibilitychange',
    function () {
      if (document.hidden) isPaused = true
    }.bind(this)
  )

  window.onfocus = function () {
    isPaused = false
  }.bind(this)

  let particles = []

  setInterval(function () {
    if (!isPaused) {
      particles.push(
        new Particle(
          data[randomInt(0, data.length - 1)],
          {
            x: Math.random() * $(window).width(),
            y: $(window).height()
          },
          1 + Math.random() * 3
        )
      )
    }
  }, 200)

  function update () {
    particles = particles.filter(function (p) {
      return p.move()
    })
    requestAnimationFrame(update.bind(this))
  }
  update()
}

export default {
  name: 'firstScreen',
  data: () => ({
    isClicking: true,
    isShow: false
  }),
  methods: {
    menuShow () {
      if (this.isClicking) {
        this.isShow = true
        console.log(this.$refs.menuContent)
        $('.menu-content').slideDown()
        // this.$refs.menuContent.style.height = `100%`
        this.isClicking = false
      } else if (this.isClicking === false) {
        this.isShow = false
        this.isClicking = true
        $('.menu-content').slideUp()
      }
    }
  },
  mounted () {
    init()
  }
}
</script>
<style lang="less" scope>
@import '~@/assets/css/codepf.css';
@color: #495057;
.first-screen {
  width: 100vw;
  height: 100vh;
  // padding: 150px;
  display: flex;
  flex-direction: column;
  .menu {
    width: 100%;
    height: 50%;
    z-index: 4;
    display: none;
    position: absolute;
    .menu-button {
      cursor: pointer;
      // margin: 0 auto;
      padding-left: 1.25em;
      position: relative;
      width: 40px;
      height: 40px;
      margin-left: 10px;
      margin-top: 10px;
      .menu-global {
        backface-visibility: hidden;
        position: absolute;
        left: 0;
        border-top: 7px solid #212529;
        width: 100%;
        transition: 0.55s;
        // background-color: #212121;
      }
      .menu-top {
        top: 0;
      }
      .menu-middle {
        top: 18px;
      }
      .menu-bottom {
        top: 36px;
      }
      .menu-top-click {
        backface-visibility: hidden;
        top: 15px;
        transform: rotate(50deg);
        transition: 0.55s 0.5s;
      }
      .menu-middle-click {
        opacity: 0;
      }
      .menu-bottom-click {
        backface-visibility: hidden;
        top: 15px;
        transform: rotate(-410deg);
        transition: 0.35s 0.3s;
      }
    }
    .menu-content {
      width: 100%;
      height: 100%;
      position: absolute;
      display: none;
      background-color: #495057;
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding-top: 50px;
        transition: 1s;
        li {
          width: 100%;
          display: flex;
          justify-content: center;
          a {
            color: #f7f7f7;
            font-size: 30px;
            padding: 20px 0;
            letter-spacing: 4px;
          }
        }
      }
    }
  }
  .first-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    padding: 50px 0;
    .navigation {
      display: flex;
      justify-content: space-between;
      .nav_left {
        z-index: 2;
        display: flex;
        flex-direction: column;
        user-select: none;
        div {
          &:nth-child(2) {
            display: flex;
            a {
              padding: 0 10px;
              font-size: 20px;
              color: @color;
            }
          }
        }
      }
      .nav_right {
        z-index: 2;
        color: @color;
        font-size: 36px;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        font-weight: 700;
      }
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      letter-spacing: 4vw;
      justify-content: center;
      align-items: center;
      z-index: 2;
      position: relative;
      user-select: none;
      span {
        font-size: 60px;
        color: #ced4da;
        &:nth-child(3) {
          font-size: 60px;
          white-space: nowrap;
          position: absolute;
          color: #212121;
          font-weight: 700;
          z-index: 3;
          letter-spacing: 4vw;
        }
      }
    }
    .footer {
      z-index: 2;
      div {
        font-size: 18px;
        color: @color;
        display: flex;
        flex-direction: row;
        align-items: center;
        &::before {
          content: '';
          width: 0;
          display: flex;
          border-style: solid;
          border-color: transparent transparent @color transparent;
          border-width: 0 1rem 1.2rem 1rem;
          margin-right: 20px;
        }
      }
    }
  }

  .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #edf3f8;
    background: -moz-radial-gradient(
      center,
      ellipse cover,
      #edf3f8 1%,
      #dee3e8 100%
    );
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      #edf3f8 1%,
      #dee3e8 100%
    );
    background: radial-gradient(ellipse at center, #edf3f8 1%, #dee3e8 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr="#edf3f8", endColorstr="#dee3e8",GradientType=1 );
  }
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,600');
  .more-pens {
    position: fixed;
    left: 20px;
    bottom: 20px;
    z-index: 10;
    font-family: 'Montserrat';
    font-size: 12px;
  }

  a.white-mode,
  a.white-mode:link,
  a.white-mode:visited,
  a.white-mode:active {
    font-family: 'Montserrat';
    font-size: 12px;
    text-decoration: none;
    background: #212121;
    padding: 4px 8px;
    color: #f7f7f7;
  }
  a.white-mode:hover,
  a.white-mode:link:hover,
  a.white-mode:visited:hover,
  a.white-mode:active:hover {
    background: #edf3f8;
    color: #212121;
  }

  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .background {
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #edf3f8;
    background: -moz-radial-gradient(
      center,
      ellipse cover,
      #edf3f8 1%,
      #dee3e8 100%
    );
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      #edf3f8 1%,
      #dee3e8 100%
    );
    background: radial-gradient(ellipse at center, #edf3f8 1%, #dee3e8 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#edf3f8", endColorstr="#dee3e8",GradientType=1 );
  }
}
</style>
