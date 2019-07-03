<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>ddddddddd</p>
    <about></about>
    <works></works>
    <skills></skills>
    <sns></sns>
    <contact></contact>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import about from './components/about.vue'
import works from './components/works.vue'
import skills from './components/skills.vue'
import sns from './components/sns.vue'
import contact from './components/contact.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
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
