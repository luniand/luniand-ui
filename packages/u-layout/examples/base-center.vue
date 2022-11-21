<template>
  <u-v-stack align="start" spacing="4">
    <u-box>
      <u-box>Center</u-box>
      <u-center w="40px" h="40px" bg="tomato" color="white">
        <u-icon name="phone"></u-icon>
      </u-center>
    </u-box>
    <u-box>
      <u-box>Square</u-box>
      <u-square size="40px" bg="purple.700" color="white">
        <u-icon name="phone"></u-icon>
      </u-square>
    </u-box>
    <u-box>
      <u-box>Circle</u-box>
      <u-circle :center-content="true" size="40px" bg="teal.700" color="white">
        <u-icon name="phone"></u-icon>
      </u-circle>
    </u-box>
    <u-box>
      <u-link to="/"> Test router link </u-link>
    </u-box>
    <u-box>
      <u-kbd color-scheme="cyan"> Test keyboard shortcut </u-kbd>
    </u-box>
  </u-v-stack>
</template>
