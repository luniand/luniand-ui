import type { Meta, StoryFn } from "@storybook/vue3";
import { LIcon } from "../src";

export default {
  title: "Components / Media and Icons / Icon",
  component: { LIcon },
  argTypes: {
    id: "String",
    size: "String",
  },
} as Meta<typeof LIcon>;

const Template: StoryFn<typeof LIcon> = (args: any) => ({
  components: { LIcon },
  setup() {
    return { args };
  },
  template: '<LIcon v-bind="args" />',
});

export const Basic = Template.bind({});
Basic.args = {
  id: "basic-icon",
  size: "24px",
};
