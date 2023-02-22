<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

// src/components/HelloWorld.vue
new URL('../assets/images/png/year.png', import.meta.url).href
// import.meta.url 获取到的地址：http://192.168.124.4:3000/src/components/HelloWorld.vue?t=1641037446646
// 拼接后的地址：http://192.168.124.4:3000/src/assets/images/png/%E5%B9%B4%E7%BB%88%E6%80%BB%E7%BB%93.png

</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style lang="scss" scoped>
h1 {
  color: $theme-color;
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>