<template>
  <div id="app">
    <top></top>
    <router-view/>
  </div>
</template>

<script>
import top from './components/top.vue'
import about from './components/about.vue'
import experiences from './components/experiences.vue'
import works from './components/works.vue'
import skills from './components/skills.vue'
import sns from './components/sns.vue'
import contact from './components/contact.vue'

export default {
  name: 'App',
  components: {
    top,
    about,
    works,
    skills,
    sns,
    contact
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
