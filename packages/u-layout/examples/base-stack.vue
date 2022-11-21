<template>
  <uniland.div py="4">
    <uniland.div py="4">
      <uniland.div>Stack Default</uniland.div>
      <u-stack spacing="4" divider>
        <uniland.div w="40px" h="40px" bg="yellow.200"> 1 </uniland.div>
        <uniland.div w="40px" h="40px" bg="tomato"> 2 </uniland.div>
        <uniland.div w="40px" h="40px" bg="pink.100"> 3 </uniland.div>
      </u-stack>
    </uniland.div>

    <uniland.div py="4">
      <uniland.div>Horizontal</uniland.div>
      <u-h-stack spacing="10">
        <uniland.div w="40px" h="40px" bg="yellow.200"> 1 </uniland.div>
        <uniland.div w="40px" h="40px" bg="tomato"> 2 </uniland.div>
        <uniland.div w="40px" h="40px" bg="pink.100"> 3 </uniland.div>
      </u-h-stack>
    </uniland.div>

    <uniland.div py="4">
      <uniland.div>Vertical</uniland.div>
      <u-v-stack spacing="2" align="stretch">
        <uniland.div h="40px" bg="yellow.200"> 1 </uniland.div>
        <uniland.div h="40px" bg="tomato"> 2 </uniland.div>
        <uniland.div h="40px" bg="pink.100"> 3 </uniland.div>
      </u-v-stack>
    </uniland.div>
  </uniland.div>
</template>
