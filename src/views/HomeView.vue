<script setup lang="ts">
</script>

<template>
  <main>
    <div>
      <div>
        Bug: "onBeforeRouteLeave" guard not remove after switching to another view when using keep-alive and composables api
      </div>
      Steps: 
      <ol>
        <li>Click the first link</li>
        <li>Click the second link, then the window will alert "onBeforeRouteLeave", because of the leave gurad</li>
        <li>Click the first link one more time, the window still alert "onBeforeRouteLeave", even though there is no leave guard on the second view</li>
      </ol>
    </div>
    <nav>
      <router-link to="/leave-guard">Link to: subview with leave gurad</router-link>
      <router-link to="/normal" style="margin-left: 16px;">Link to: subview without leave guard</router-link>
    </nav>
    <keep-alive> <!-- keep-alive is required for the bug -->
      <router-view></router-view>
    </keep-alive>
  </main>
</template>

<style scoped>

</style>
