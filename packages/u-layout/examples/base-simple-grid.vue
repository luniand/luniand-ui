<template>
  <u-button size="sm" @click="minw = '200px'" mb="4"
    >increase min width</u-button
  >
  <u-simple-grid
    columns="2"
    :spacingX="['5px', '40px']"
    :spacingY="['5px', '20px']"
    :minChildWidth="minw"
  >
    <u-box bg="tomato" height="80px"></u-box>
    <u-box bg="tomato" height="80px"></u-box>
    <u-box bg="tomato" height="80px"></u-box>
    <u-box bg="tomato" height="80px"></u-box>
    <u-box bg="tomato" height="80px"></u-box>
  </u-simple-grid>
</template>
<script setup lang="ts">
import { ref } from "vue"

const minw = ref("100px")
</script>
