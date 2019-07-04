<template>
  <div class="background">
    <nav>
      <ul>
        <li>
          <router-link to="/about">About</router-link><br>
        </li>
        <li>
          <router-link to="/experiences">Experiences</router-link><br>
        </li>
        <li>
          <router-link to="/works">Works</router-link><br>
        </li>
        <li>
          <router-link to="/skills">Skills</router-link><br>
        </li>
        <li>
          <router-link to="/sns">SNS</router-link><br>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
    <h1>Welcome to My Portfolio</h1>

  </div>
</template>

<script>
</script>

<style lang="sass">
  .background
    width: 100vw
    height: 100vh
    background-color: #0FD1B2
    nav
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
    h1
      color: #FFF
      font-size: 50px
      font-weight: bold
      padding-top: 50px
      margin-right: auto



</style>
