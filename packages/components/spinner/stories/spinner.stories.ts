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
  <LSpinner size='xs' />
  <LSpinner size='sm' />
  <LSpinner size='md' />
  <LSpinner size='lg' />
  <LSpinner size='xl' />
  `,
});

export const Basic = Template.bind({});
