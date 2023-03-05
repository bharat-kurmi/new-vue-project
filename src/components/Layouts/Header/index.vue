<script>
import { ref, toRefs } from 'vue'
export default {
   props: {
    title: String
  },

  setup(props) {
    console.log('title', props.title)

    // turn `props` into an object of refs, then destructure
    const { title } = toRefs(props)
    // `title` is a ref that tracks `props.title`
    console.log(title.value)
    
    const count = ref(1)
     return {
      count
     }
  },
}
</script>
<template>
<h2>{{ title.value }}</h2>
  <a href="https://vitejs.dev" target="_blank">
      <img src="./vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div>{{ count }} </div>
     <button @click="count++">{{ count }}</button>
     <router-link to="/logo">Logo</router-link> |
      <router-link to="/login">login</router-link>
</template>