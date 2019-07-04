<template>
  <div class="skills_container">
    <h2>Skills</h2>
    <ul class="cards_container">

      <li class="skills_card">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Ruby</p>
          </header>
          <div class="card-content">
            <div class="content">
              <ul>
                <li>Ruby On Rails</li>
              </ul>
            </div>
          </div>
        </div>
      </li>

      <li class="skills_card">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">HTML/CSS</p>
          </header>
          <div class="card-content">
            <div class="content">
              <ul>
                <li>Slim, Haml</li>
                <li>Sass, Scss</li>
                <li>Bootstrap, Bulma</li>
                <li>BEM</li>
              </ul>
            </div>
          </div>
        </div>
      </li>

      <li class="skills_card">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">JavaScript</p>
          </header>
          <div class="card-content">
            <div class="content">
              <ul>
                <li>jQuery</li>
                <li>Vue.js</li>
              </ul>
            </div>
          </div>
        </div>
      </li>

      <li class="skills_card">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Java</p>
          </header>
          <div class="card-content">
            <div class="content">
              <small>大学の授業で扱ったのみ</small>
            </div>
          </div>
        </div>
      </li>

      <li class="skills_card">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">C</p>
          </header>
          <div class="card-content">
            <div class="content">
              <small>大学の授業で扱ったのみ</small>
            </div>
          </div>
        </div>
      </li>

      <li class="skills_card">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Python</p>
          </header>
          <div class="card-content">
            <div class="content">
              <small>大学の授業で扱ったのみ</small>
            </div>
          </div>
        </div>
      </li>

      <li class="skills_card">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">DB</p>
          </header>
          <div class="card-content">
            <div class="content">
              <ul>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
              </ul>
            </div>
          </div>
        </div>
      </li>

      <li class="skills_card">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">インフラ</p>
          </header>
          <div class="card-content">
            <div class="content">
              <ul>
                <li>Heroku</li>
              </ul>
            </div>
          </div>
        </div>
      </li>

      <li class="skills_card">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">ツール</p>
          </header>
          <div class="card-content">
            <div class="content">
              <ul>
                <li>Github</li>
                <li>Slack</li>
                <li>Adobe XD</li>
                <li>Pivotal Tracker</li>
              </ul>
            </div>
          </div>
        </div>
      </li>

      <li class="skills_card">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">趣味＆特技もろもろ</p>
          </header>
          <div class="card-content">
            <div class="content">
              <ul>
                <li>英語（TOEIC 925点, TOEFL iBT 93点）</li>
                <li>サッカー</li>
                <li>筋トレ</li>
              </ul>
            </div>
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
</script>

<style lang="sass">
  .skills_container
    width: 600px
    padding-top: 20px
    margin: 0 auto
    h2
      font-size: 30px
      font-weight: bold
      margin-bottom: 10px
    .cards_container
      display: -webkit-flex
      display: -ms-flex
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      .skills_card
        padding-bottom: 25px
        .card
          width: 180px
          height: 180px
          .card-content
            padding: 0
            margin: 0
            .content
              padding: 0
              margin: 0
              ul
                padding: 10px 0 0 0
                margin: 0
                li
                  list-style: none

</style>
