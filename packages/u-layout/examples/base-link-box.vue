<template>
  <uniland.div py="4">
    <uniland.div py="4">
      <u-link-box as="article">
        <u-heading as="h2" font-size="20">
          <!-- prettier-ignore -->
          <u-link-overlay is-external href="https://vue.uniland-ui.com">Some blog post</u-link-overlay>
        </u-heading>
        <p>
          As a side note, using quotation marks around an attribute value is
          required only if this value is not a valid identifier.
        </p>
        <u-link is-external href="https://google.com">Some inner link</u-link>
      </u-link-box>
    </uniland.div>
  </uniland.div>
</template>
<script setup></script>
