<template>
  <div id="message">
    <h2>Hi from message component</h2>
    <app-input></app-input><!--local registered component-->
  </div>
</template>

<script>
import Input from './Input.vue';
export default {
  components: {
    'app-input': Input
  }
}
</script>

<style lang="scss">

$red: #E73A38;

  #message{
    h2{
      color: $red;
    }
  }
</style>
