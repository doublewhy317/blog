<script setup>
import { ref } from "vue";

import { a } from "@/utils";

console.log(a, 222);
const count = ref(0);
</script>

<template>
  <div>我叫夯大力</div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>