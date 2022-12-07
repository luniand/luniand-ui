import type { Meta, StoryFn } from "@storybook/vue3";
import { LFlex } from "../src";

export default {
  title: "Components / Layout / Flex",
  component: { LFlex },
} as Meta<typeof LFlex>;

const Template: StoryFn<typeof LFlex> = (args: any) => ({
  components: { LFlex },
  setup() {
    return { args };
  },
  template: `
    <LFlex v-bind="args">
      <span>Albert Tran</span>
      <span>Toan Tran</span>
      <span>Luniand UI!</span>
    </LFlex>
  `,
});

export const Vertical = Template.bind({});
Vertical.args = {
  gap: 4,
  direction: "column",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  gap: 4,
};
