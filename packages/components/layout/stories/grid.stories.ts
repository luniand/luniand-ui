import type { StoryFn } from "@storybook/vue3";
import { LGrid, LGridItem, LBox } from "../src";

export default {
  title: "Components / Layout / Grid",
  component: { LGrid, LGridItem },
};

const Template: StoryFn = (args: any) => ({
  components: { LGrid, LGridItem, LBox },
  setup() {
    return { args };
  },
  template: `
  <LGrid w="600px" template-columns="repeat(5, 1fr)" gap="6">
    <LBox w="100%" h="10" bg="blue.300" />
    <LBox w="100%" h="10" bg="purple.300" />
    <LBox w="100%" h="10" bg="orange.300" />
    <LBox w="100%" h="10" bg="pink.300" />
    <LBox w="100%" h="10" bg="red.300" />
  </LGrid>
  `,
});

export const Basic = Template.bind({});

const SpanningColumnsTemplate: StoryFn = (args: any) => ({
  components: { LGrid, LGridItem },
  setup() {
    return { args };
  },
  template: `
    <LGrid
      h="200px"
      w="600px"
      template-rows="repeat(2, 1fr)"
      template-columns="repeat(5, 1fr)"
      gap="6"
    >
      <LGridItem row-span="2" col-span="1" bg="blue.300" />
      <LGridItem col-span="2" bg="red.300" />
      <LGridItem col-span="2" bg="red.300" />
      <LGridItem col-span="4" bg="blue.300" />
     </LGrid>
  `,
});

export const SpanningColumns = SpanningColumnsTemplate.bind({});

const StartingAndEndingLinesTemplate: StoryFn = (args: any) => ({
  components: { LGrid, LGridItem },
  setup() {
    return { args };
  },
  template: `
    <LGrid w="600px" template-columns="repeat(5, 1fr)" gap="6">
      <LGridItem col-span="2" h="10" bg="blue.300" />
      <LGridItem col-start="4" col-end="6" h="10" bg="red.300" />
     </LGrid>
  `,
});

export const StartingAndEndingLines = StartingAndEndingLinesTemplate.bind({});
