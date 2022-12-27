import type { Meta, StoryFn } from "@storybook/vue3";
import { LDivider, LBox, LFlex } from "../src";

export default {
  title: "Components / Layout / Divider",
  component: { LDivider, LBox, LFlex },
};

const Template: StoryFn = (args: any) => ({
  components: { LDivider },
  setup() {
    return { args };
  },
  template: `
  <LDivider />
  `,
});

export const Basic = Template.bind({});

const ChangingTheOrientationTemplate: StoryFn = (args: any) => ({
  components: { LDivider, LFlex },
  setup() {
    return { args };
  },
  template: `
    <LFlex>
    <span>Part 1</span>
      <LDivider orientation="vertical" />
    <span>Part 2</span>
   </LFlex>
  `,
});

export const ChangingTheOrientation = ChangingTheOrientationTemplate.bind({});

const ChangingTheborderColorTemplate: StoryFn = (args: any) => ({
  components: { LDivider, LBox },
  setup() {
    return { args };
  },
  template: `
  <LBox>
    <span>Part 1</span>
    <LDivider border-color="red.200" />
    <span>Part 2</span>
   </LBox>
  `,
});

export const ChangingTheborderColor = ChangingTheborderColorTemplate.bind({});
