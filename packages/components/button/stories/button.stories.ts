import type { Meta, StoryFn } from "@storybook/vue3";
import { LButton } from "../src";

export default {
  title: "Components / Button",
  component: { LButton },
} as Meta<typeof LButton>;

const Template: StoryFn<typeof LButton> = (args: any) => ({
  components: { LButton },
  setup() {
    return { args };
  },
  template: `
  <LButton colorScheme='teal' size='xs'>
    Button
  </LButton>
  <LButton colorScheme='teal' size='sm'>
    Button
  </LButton>
  <LButton colorScheme='teal' size='md'>
    Button
  </LButton>
  <LButton colorScheme='teal' size='lg'>
    Button
  </LButton>
  `,
});

export const Basic = Template.bind({});
