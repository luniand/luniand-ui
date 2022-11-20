<template>
  <u-stack spacing="{3}">
    <u-text fontSize="6xl">(6xl) In love with React & Next</u-text>
    <u-text fontSize="5xl">(5xl) In love with React & Next</u-text>
    <u-text fontSize="4xl">(4xl) In love with React & Next</u-text>
    <u-text fontSize="3xl">(3xl) In love with React & Next</u-text>
    <u-text fontSize="2xl">(2xl) In love with React & Next</u-text>
    <u-text fontSize="xl">(xl) In love with React & Next</u-text>
    <u-text fontSize="lg">(lg) In love with React & Next</u-text>
    <u-text fontSize="md">(md) In love with React & Next</u-text>
    <u-text fontSize="sm">(sm) In love with React & Next</u-text>
    <u-text fontSize="xs">(xs) In love with React & Next</u-text>
  </u-stack>
  <u-divider my="4" />
  <u-text>truncated:</u-text>
  <u-text maxW="sm" isTruncated>
    Lorem ipsum is placeholder text commonly used in the graphic, print, and
    publishing industries for previewing layouts and visual mockups.
  </u-text>
  <u-divider my="4" />
  <u-text>line clamp:</u-text>
  <u-text :noOfLines="[1, 2, 3]" maxW="sm">
    "The quick brown fox jumps over the lazy dog" is an English-language
    pangram—a sentence that contains all of the letters of the English alphabet.
    Owing to its existence, Uniland was created.
  </u-text>
</template>
