<template>
  <div class="banner">
    <div class="mask"></div>
  </div>

  <main>
    <div class="userCard" id="siteAbout">
      <div class="pictureAndText clearfix">
        <div class="picture">
          <img
            src="../../img/wallhaven-k9ey86.jpg"
            width="299"
            height="347"
            alt="头像"
          />
        </div>

        <!--  右边文字  -->
        <div class="text">
          <span class="welcome"
            >Hello
            <span class="triangle"></span>
          </span>
          <h1>姓名：Mr-JXWAM</h1>
          <p><b>求职意向：</b> 前端开发工程师</p>
          <hr />
          <tbody>
            <th>年龄</th>
            <tr>
              22
            </tr>
            <th>性别</th>
            <tr>
              男
            </tr>
            <th>现居住</th>
            <tr>
              XXXX
            </tr>
            <th>邮箱</th>
            <tr>
             XXXXXXXXXXX
            </tr>
            <th>手机</th>
            <tr>
              YYYYYYYYYY
            </tr>
          </tbody>
        </div>
      </div>
      <footer class="media">
        <a href="#">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weixin"></use>
          </svg>
        </a>
        <a href="#">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-QQ"></use>
          </svg>
        </a>

        <a href="#">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github"></use>
          </svg>
        </a>
        <a href="#">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tuitetwitter44"></use>
          </svg>
        </a>
        <a href="#">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weibo"></use>
          </svg>
        </a>
      </footer>
    </div>
    <p id="downloaResume-Wrapper">
      <a
        class="downloadResume"
        href="#"
        target="_blank"
        download
      >
        下载PDF简历</a
      >
    </p>
    <p class="selfIintroduction">
      我是一个能承受日益严格的竞争压力，并能在成功和失败中完善自己，崇尚团队合作的人
    </p>
  </main>
</template>

<script>
export default {};
setTimeout(function () {
  siteWelcome.classList.remove("active");
}, 1000);

window.onscroll = function (x) {
  if (window.scrollY > 0) {
    topNavBar.classList.add("sticky");
  } else {
    topNavBar.classList.remove("sticky");
  }
};
let liTags = document.querySelectorAll("nav.menu > ul >li ");

for (let i = 0; i < liTags.length; i++) {
  liTags[i].onmouseenter = function (x) {
    x.currentTarget.classList.add("active");
  };
  liTags[i].onmouseleave = function (x) {
    x.currentTarget.classList.remove("active");
  };
}

let aTags = document.querySelectorAll("nav.menu>ul > li > a");

for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function (x) {
    x.preventDefault(); // preventDefault  阻止默认行为
    let a = x.currentTarget;
    let href = a.getAttribute("href"); // a.href 是带http协议的，a.getAttribute('href') 是用户写什么就是什么，不做任何处理
    let element = document.querySelector(href);
    let top = element.offsetTop;

    //let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop

    let currentTop = window.scrollY;
    let targetTop = top - 80;
    var coords = { y: currentTop };
    var tween1 = new tween.TWEEN(coords)
      .to({ y: targetTop }, 1000)
      .easing(TWEE.Easing.Quadratic.InOut)
      .onUpdate(function () {
        window.scrollTo(0, coords.y);
      })
      .start();
  };
}
</script>


<style type="text/css">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>