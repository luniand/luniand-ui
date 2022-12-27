import type { StoryFn } from "@storybook/vue3";
import { LStack, LText } from "../src";

export default {
  title: "Components / Layout / Text",
  component: { LStack, LText },
};

const Template: StoryFn = (args: any) => ({
  components: { LStack, LText },
  setup() {
    return { args };
  },
  template: `
    <LText>Vue is amazing, don't you think?</LText>
  `,
});

export const Basic = Template.bind({});

const SizeTemplate: StoryFn = (args: any) => ({
  components: { LText, LStack },
  setup() {
    return { args };
  },
  template: `
      <LStack spacing="3">
        <LStack :spacing="3">
        <LText fontSize="6xl">In love with Vue and Nuxt</LText>
        <LText fontSize="5xl">In love with Vue and Nuxt</LText>
        <LText fontSize="4xl">In love with Vue and Nuxt</LText>
        <LText fontSize="3xl">In love with Vue and Nuxt</LText>
        <LText fontSize="2xl">In love with Vue and Nuxt</LText>
        <LText fontSize="xl">In love with Vue and Nuxt</LText>
        <LText fontSize="lg">In love with Vue and Nuxt</LText>
        <LText fontSize="md">In love with Vue and Nuxt</LText>
        <LText fontSize="sm">In love with Vue and Nuxt</LText>
        <LText fontSize="xs">In love with Vue and Nuxt</LText>
      </LStack>
    </LStack>
  `,
});

export const SizeHeading = SizeTemplate.bind({});

const TruncateTemplate: StoryFn = (args: any) => ({
  components: { LText },
  setup() {
    return { args };
  },
  template: `
  <LText color="gray.500" is-truncated>
   “I was attracted to JavaScript because of the ability to just build something and share it instantly with the world. You put it on the web, and you get a URL, you can send it to anyone with a browser. That was the part that just attracted me to the web and to JavaScript.”
  </LText>
  `,
});

export const TruncateHeading = TruncateTemplate.bind({});

const OverrideTemplate: StoryFn = (args: any) => ({
  components: { LText, LStack },
  setup() {
    return { args };
  },
  template: `
      <LText fontSize="50px" color="vue">
      I'm using a custom font-size value for this text
    </LText>
    <h2> Override the element <h2>
    <LStack :spacing="3">
  <LText as="i">Italic</LText>

    <LText as="u">Underline</LText>

    <LText as="abbr">I18N</LText>

    <LText as="cite">Citation</LText>

    <LText as="del">Deleted</LText>

    <LText as="em">Emphasis</LText>

    <LText as="ins">Inserted</LText>

    <LText as="kbd">Ctrl + C</LText>

    <LText as="mark">Highlighted</LText>

    <LText as="s">Strikethrough</LText>

    <LText as="samp">Sample</LText>

    <LText as="sub">sub</LText>

    <LText as="sup">sup</LText>
  </LStack>
  `,
});

export const OverrideStyle = OverrideTemplate.bind({});
