<template>
  <h1>{{title}}</h1>
  <h3>{{ message }} </h3>
</template>
<script>
export default {
  name: 'Logo',
  props:{
      message: 'Logo Message'
  },
  data() {
    return {
      title: 'Logo'
    }
  }
}
</script>