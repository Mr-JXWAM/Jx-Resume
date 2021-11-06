<template>
  <div>
    <div id="siteWelcome" class="site-welcome active">
      <div class="loading"></div>
    </div>

    <div id="topNavBar" class="topNavBar">
      <div class="topNavBar-inner clearfix" >
        <a href="../App.vue"  class="logo" alt="logo" style="float: left; text-align:center">
          <span id="rs" class="rs">RS</span><span class="card">card</span>
        </a>
        <nav class="menu" style="float: right">
          <ul class="clearfix">
            <li>
              <a href="#siteAbout">关于</a>
            </li>
            <li>
              <a href="../vies/NineBoxImage.vue" target="_blank">作品</a>
            </li>
            <li>
              <a href="#siteSkills">技能</a>
            </li>
            <li>
              <a href="#siteWorks">项目经验</a>
              <ul class="submenu">
                <li>项目1</li>
                <li>项目2</li>
                <li>项目3</li>
              </ul>
            </li>
            <li>
              <a
                href="https://www.zhihu.com/people/linux-64-53/posts"
                target="_blank"
                >博客</a
              >
              <ul class="submenu">
                <li>博客1</li>
                <li>博客2</li>
                <li>博客3</li>
              </ul>
            </li>

            <li>
              <a href="#">日历</a>
            </li>
            <li>
              <a href="#">联系方式</a>
            </li>
            <li>
              <a href="#">其他</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template> 