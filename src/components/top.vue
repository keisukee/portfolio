<template>
  <div class="background">
    <nav>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#works">Wroks</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

        <li>
          <!-- <div class="dropdown is-active"> -->
          <!-- TODO dropdownがうまく作動しないので後で直す -->
          <div class="dropdown">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span class="dropdown-text">Accounts</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <a href="https://github.com/keisukee" class="dropdown-item" target="_blank">
                  Github
                </a>
                <hr class="dropdown-divider">
                <a href="https://qiita.com/sukebeeeee" class="dropdown-item" target="_blank">
                  Qiita
                </a>
                <hr class="dropdown-divider">
                <a href="https://twitter.com/sukebeeeeei" class="dropdown-item" target="_blank">
                  Twitter
                </a>
                <hr class="dropdown-divider">
                <a href="https://www.wantedly.com/users/67034394" class="dropdown-item" target="_blank">
                  Wantedly
                </a>

              </div>
            </div>
          </div>
        </li>

      </ul>
    </nav>

    <h1>Welcome to My Portfolio</h1>

  </div>
</template>

<script>
</script>

<style lang="sass">
  @media (min-width: 769px)
    .background
      width: 100vw
      height: 60vh
      background-color: #0FD1B2
      nav
        width: 100vw
        background-color: #0FD1B2
        opacity: 0.9
        position: fixed
        z-index: 9999
        ul
          display: -webkit-flex
          display: -ms-flex
          display: flex
          justify-content: space-between
          width: 600px
          margin: 0 auto
          li
            padding: 10px
            a
              font-size: 20px
              font-weight: bold
              color: #FFF
            .dropdown
              button
                background-color: #0FD1B2
                border: none
                .icon
                  i
                    color: #FFF
              .dropdown-trigger
                .dropdown-text
                  color: #FFF
              .dropdown-menu
      h1
        color: #FFF
        font-size: 70px
        font-weight: bold
        padding-top: 150px
        margin-right: auto
</style>
