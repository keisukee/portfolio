<template>
  <div class="works_container">
    <h2>Works</h2>
    <ul>

      <li class="work">
        <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image">
              <a href="https://nukistagram.herokuapp.com">
                <img src="../assets/nukistagram.png" alt="Nukistagram">
              </a>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <h3>
                <a href="https://nukistagram.herokuapp.com">Nukistagram</a>
              </h3>
              <p>
                Rails×スクレイピングで、海外の大手サイトからエロ動画を収集してくるサイトを作りました。<br>
                リンクからは本当にエロサイトに飛ぶのでご注意を。
                <a href="https://qiita.com/sukebeeeee/items/48b3348d011d4c2b256d">リリース記事</a>
                <a href="https://github.com/keisukee/Nukistagram">コードはこちら</a>
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <ul>
                  <li><small>Rails</small></li>
                  <li><small>Docker</small></li>
                  <li><small>Nokogiri(スクレイピング)</small></li>
                  <li><small>Heroku</small></li>
                  <li><small>CircleCI</small></li>
                </ul>
                <br>
              </div>
            </nav>
          </div>
        </article>
      </div>
      </li>

      <li class="work">
        <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image">
              <a href="https://keisuke-ohashi.firebaseapp.com/">
                <img src="../assets/portfolio.png" alt="Portfolio">
              </a>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <h3>
                <a href="https://keisuke-ohashi.firebaseapp.com/">MyPortfolio</a>
              </h3>
              <p>
                Vue.jsでポートフォリオサイトを制作しました。<br>
                今の所、Vue.jsらしさが全く出せてないですが、それは今後の課題ということでw
                <a href="https://github.com/keisukee/portfolio">コードはこちら</a>
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <ul>
                  <li><small>Vue.js</small></li>
                  <li><small>Bulma</small></li>
                  <li><small>Firebase</small></li>
                </ul>
                <br>
              </div>
            </nav>
          </div>
        </article>
      </div>
      </li>

    </ul>
  </div>
</template>

<script>
</script>

<style lang="sass">
  @media (min-width: 769px)
    .works_container
      width: 600px
      padding: 60px 0
      margin: 0 auto
      h2
        font-size: 30px
        font-weight: bold
        margin-bottom: 10px
      ul
        .work
          margin-bottom: 20px
          .box
            article
              .media-left
                figure
                  img
                    width: auto
                    height: 150px
              .media-content
                .content
                  p
                nav
                  ul
                    display: -webkit-flex
                    display: -ms-flex
                    display: flex
                    li
                      margin-right: 10px
  @media (max-width: 768px)
    .works_container
      width: 320px
      padding: 30px 0
      margin: 0 auto
      h2
        font-size: 30px
        font-weight: bold
        margin-bottom: 10px
      ul
        .work
          margin-bottom: 15px
          .box
            article
              .media-left
                figure
                  img
                    width: auto
                    height: 150px
              .media-content
                .content
                  h3
                    font-size: 20px
                  p
                    font-size: 16px
                nav
                  ul
                    display: -webkit-flex
                    display: -ms-flex
                    display: flex
                    flex-direction: column
                    li
                      margin-right: 10px

</style>
