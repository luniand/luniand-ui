import type { Meta, StoryFn } from "@storybook/vue3";
import { LSpinner } from "../src";

export default {
  title: "Components / Spinner",
  component: { LSpinner },
} as Meta<typeof LSpinner>;

const Template: StoryFn<typeof LSpinner> = (args: any) => ({
  components: { LSpinner },
  setup() {
    return { args };
  },
  template: `
  <LSpinner />
  `,
});

export const Basic = Template.bind({});

const SizeTemplate: StoryFn<typeof LSpinner> = (args: any) => ({
  components: { LSpinner },
  setup() {
    return { args };
  },
  template: `
    <LSpinner size="xs" />
    <LSpinner size="sm" />
    <LSpinner size="md" />
    <LSpinner size="lg" />
    <LSpinner size="xl" />
  `,
});

export const Size = SizeTemplate.bind({});

const SpinnerColorTemplate: StoryFn<typeof LSpinner> = (args: any) => ({
  components: { LSpinner },
  setup() {
    return { args };
  },
  template: `
    <LSpinner
      thickness="4px"
      speed="0.65s"
      empty-color="teal"
      color="red"
      size="xl"
    />
  `,
});

export const SpinnerColor = SpinnerColorTemplate.bind({});
