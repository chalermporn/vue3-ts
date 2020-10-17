<template>
  <div id="nav">

    <Nav class="mb-6" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" class="text-center"/> -->
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'

@Options({
  name: 'App',
  components: {
    HelloWorld,
    Nav
  }
})

export default class App extends Vue {
//
}
</script>

<style lang="scss">
//
</style>
