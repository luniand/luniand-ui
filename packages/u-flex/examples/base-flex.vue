<template>
  <u-flex align="center">
    <u-flex :bg="{ base: 'green.50', sm: 'blue.50' }" align="flex-end">
      <uniland.p>Box 1</uniland.p>
    </u-flex>
    <u-flex
      :bg="['blue.50', 'pink.50']"
      size="150px"
      align="center"
      justify="center"
    >
      <uniland.p text-align="center" bg="orange.50"> Box 2 </uniland.p>
    </u-flex>
    <uniland.div>
      <uniland.p bg="tomato" color="white"> Box 3 </uniland.p>
    </uniland.div>
  </u-flex>
</template>
