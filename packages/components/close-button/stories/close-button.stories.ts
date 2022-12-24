import type { StoryFn } from "@storybook/vue3";
import { LCloseButton } from "../src";
import { LStack } from "@luniand-ui/layout";
export default {
  title: "Components / CloseButton",
  component: {
    LCloseButton,
  },
};

const Template: StoryFn = (args: any) => ({
  components: {
    LCloseButton,
  },
  setup() {
    return { args };
  },
  template: `
    <LCloseButton />
  `,
});

export const Basic = Template.bind({});

const SizeTemplate: StoryFn = (args: any) => ({
  components: {
    LCloseButton,
  },
  setup() {
    return { args };
  },
  template: `
    <LCloseButton  size="sm" color="red" />
    <LCloseButton size="md" />
    <LCloseButton size="lg" />
  `,
});

export const SizeCloseButton = SizeTemplate.bind({});
