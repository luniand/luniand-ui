<template>
  <div>Uniland UI Vue v1</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    this.$nextTick(() => {
      this.$router.push('/u-alert/examples/base-alert')
    })
  }
})
</script>
