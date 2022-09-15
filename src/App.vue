<template>
  <div class="div1">{{ count }}</div>
  <Com1></Com1>
</template>
<script setup lang="ts">
// 启用了 TypeScript
import { ref } from 'vue';
import Com1 from './Com-1.vue';

const count = ref('100');

// const s = 1;
// function func(arg: string) {
//   console.log(arg);
// }
// func(s);

// enum E1 {
//   A = 0,
//   B = 0,
// }
</script>
<style scoped lang="less">
@div-color: #00ff00;
.div1 {
  color: @div-color;
  display: flex;
}
</style>
