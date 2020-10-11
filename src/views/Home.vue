<template>
  <div class="home text-center">
    <div class=" bg-no-repeat bg-center  w-60 h-48 text-center" :style="{ backgroundImage: 'url(' + require('@/assets/logo.png') + ')' }"></div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" class="text-center"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
