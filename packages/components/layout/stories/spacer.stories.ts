import type { Meta, StoryFn } from "@storybook/vue3";
import { LSpacer } from "../src";

export default {
  title: "Components / Layout / Spacer",
  component: { LSpacer },
};

const Template: StoryFn = (args: any) => ({
  components: { LSpacer },
  setup() {
    return { args };
  },
  template: `
  <h1> Spacer </h1>
  <p> Spacer 1 </p>
  <LSpacer>
  </LSpacer>
  <p> Spacer 2 </p>
  `,
});

export const Basic = Template.bind({});
