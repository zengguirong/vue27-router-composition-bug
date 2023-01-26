<template>
  <div>
    Subview with leave guard
  </div>
</template>

<script setup>
import { onBeforeRouteLeave } from 'vue-router/composables'

onBeforeRouteLeave((to, from, next) => {
  alert('onBeforeRouteLeave')
  next()
})
</script>

<!-- using options api will not trigger the bug -->
<!-- 
<script>
export default {
  beforeRouteLeave(to, from, next) {
    alert('beforeRouteLeave')
    next()
  }
}
</script>
-->
