<template>
  <div>Uniland UI Vue v1</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  mounted() {
    this.$nextTick(() => {
      this.$router.push('/u-alert/examples/base-alert')
    })
  }
})
</script>
