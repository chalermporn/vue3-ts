<template>
  <div class="bg-gray-900">
    <div class=" container">
      <header class="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-2">
        <div class="flex items-center justify-between px-4 py-2 sm:p-0">
          <div>
            <img class="h-8" src="../assets/logo.png" alt="Workcation">
          </div>
          <div class="sm:hidden">
            <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              </svg>
            </button>
          </div>
        </div>
        <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
          <router-link to="/" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Home</router-link>
          <router-link to="/about" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">About</router-link>
        </nav>
      </header>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'Nav'
})
export default class Nav extends Vue {
 isOpen: any= false
}
</script>
