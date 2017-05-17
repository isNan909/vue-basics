<template>
  <div id="app">
    <app-message></app-message><!--global component declaration-->
    <hr>
    <router-link to="/"> Home </router-link>
    <router-link to="/Users"> Users </router-link>
    <hr>
    <router-view></router-view><!--setting up the router from home and user component inside main-->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Appliacation'
    }
  }
}
</script>

<style lang="scss">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
