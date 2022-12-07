import type { Meta, StoryFn } from "@storybook/vue3";
import { LBox } from "../src";

export default {
  title: "Components / Layout / Box",
  component: { LBox },
} as Meta<typeof LBox>;

const Template: StoryFn<typeof LBox> = (args: any) => ({
  components: { LBox },
  setup() {
    return { args };
  },
  template: `
    <LBox>
      <LBox bg="green" w="50%" p="4">
        Welcome to Box
      </LBox>
      <LBox
        position="relative"
        bg="red.400"
      >
        Welcome to second Box
      </LBox>
    </LBox>
  `,
});

export const Basic = Template.bind({});
