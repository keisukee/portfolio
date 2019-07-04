<template>
  <div id="app">
    <top></top>
    <about id="about"></about>
    <experiences id="experiences"></experiences>
    <works id="works"></works>
    <skills id="skills"></skills>
    <contact id="contact"></contact>
  </div>
</template>

<script>
import top from './components/top.vue'
import about from './components/about.vue'
import experiences from './components/experiences.vue'
import works from './components/works.vue'
import skills from './components/skills.vue'
import contact from './components/contact.vue'

export default {
  name: 'App',
  components: {
    top,
    about,
    experiences,
    works,
    skills,
    contact
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
