import type { Meta, StoryFn } from "@storybook/vue3";
import { LStack, LBox, LText, LHeading } from "../src";

export default {
  title: "Components / Layout / Stack",
  component: { LStack, LBox, LText, LHeading },
};

const Template: StoryFn = (args: any) => ({
  components: { LStack, LBox, LText, LHeading },
  setup() {
    return { args };
  },
  template: `
    <LStack :spacing="5">
    <LBox :p="5" shadow="md" border-width="1px">
      <LHeading>See the Vue</LHeading>
      <LText :mt="4">Vue makes front-end development a breeze.</LText>
    </LBox>
    <LBox :p="5" shadow="md" border-width="1px">
      <LHeading>Go Nuxt!</LHeading>
      <LText :mt="4">Nuxt makes writing Vue even easier.</LText>
    </LBox>
  </LStack>
  `,
});

export const Basic = Template.bind({});

const horizontallyTemplate: StoryFn = (args: any) => ({
  components: { LStack, LBox, LText, LHeading },
  setup() {
    return { args };
  },
  template: `
    <LStack :spacing="5" is-inline>
    <LBox :p="5" shadow="md" border-width="1px">
      <LHeading>See the Vue</LHeading>
      <LText :mt="4">Vue makes front-end development a breeze.</LText>
    </LBox>
    <LBox :p="5" shadow="md" border-width="1px">
      <LHeading>Go Nuxt!</LHeading>
      <LText :mt="4">Nuxt makes writing Vue even easier.</LText>
    </LBox>
  </LStack>
  `,
});

export const horizontally = horizontallyTemplate.bind({});

const ReverseTemplate: StoryFn = (args: any) => ({
  components: { LStack, LBox, LText, LHeading },
  setup() {
    return { args };
  },
  template: `
    <LStack :spacing="5" is-reversed>
    <LBox :p="5" shadow="md" border-width="1px">
      <LHeading>See the Vue</LHeading>
      <LText :mt="4">Vue makes front-end development a breeze.</LText>
    </LBox>
    <LBox :p="5" shadow="md" border-width="1px">
      <LHeading>Go Nuxt!</LHeading>
      <LText :mt="4">Nuxt makes writing Vue even easier.</LText>
    </LBox>
  </LStack>
  `,
});

export const Reverse = ReverseTemplate.bind({});

const StackingTemplate: StoryFn = (args: any) => ({
  components: { LStack, LBox, LText, LHeading },
  setup() {
    return { args };
  },
  template: `
    <LStack :spacing="4">
    <LText>Chakra component 1</LText>
    <p>HTML paragraph element</p>
    <h3>HTML heading element</h3>
    <LText>Chakra component 2</LText>
  </LStack>
  `,
});

export const StackingHTMLElement = StackingTemplate.bind({});
