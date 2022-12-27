import type { Meta, StoryFn } from "@storybook/vue3";
import { LCenter, LBox, LStack } from "../src";
import { LIcon } from "@luniand-ui/icons";

export default {
  title: "Components / Layout / Center",
  component: { LCenter },
};

const Template: StoryFn = (args: any) => ({
  components: { LCenter },
  setup() {
    return { args };
  },
  template: `
    <LCenter bg='purple.300' h='100px' color='white'>
      This is the Center
   </LCenter>
  `,
});

export const Basic = Template.bind({});

const WithiconsTemplate: StoryFn = (args: any) => ({
  components: { LCenter, LIcon, LBox, LStack },
  setup() {
    return { args };
  },
  template: `
    <LStack spacing="3">
    <LCenter w='40px' h='40px' bg='purple.300' color='white'>
      <LIcon name="" />
    </LCenter>
    <LCenter w='40px' h='40px' bg='purple.300' color='white'>
      <LBox as='span' fontWeight='bold' fontSize='lg'>
        1
      </LBox>
    </LCenter>
  </LStack>
  `,
});

export const WithIcons = WithiconsTemplate.bind({});
