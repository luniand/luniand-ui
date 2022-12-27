import type { Meta, StoryFn } from "@storybook/vue3";
import { LContainer, LBox, LStack } from "../src";

export default {
  title: "Components / Layout / Container",
  component: { LContainer },
};

const Template: StoryFn = (args: any) => ({
  components: { LContainer },
  setup() {
    return { args };
  },
  template: `
  <LContainer>
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    engineering teams. It makes sure that our experiences have a consistent look
    and feel, not just in our design specs, but in production
  </LContainer>
  `,
});

export const Basic = Template.bind({});

const ContainerSizeTemplate: StoryFn = (args: any) => ({
  components: { LContainer, LStack },
  setup() {
    return { args };
  },
  template: `
    <LStack>
    <LContainer maxW='md' bg='blue.600' color='white'>
      "md" Container
    </LContainer>
    <LContainer maxW='550px' bg='purple.600' color='white'>
      "550px" Container
    </LContainer>
    <LContainer maxW='container.sm' bg='green.400' color='#262626'>
      "container.sm" Container
    </LContainer>
  </LStack>
  `,
});

export const ContainerSize = ContainerSizeTemplate.bind({});

const CenteringTemplate: StoryFn = (args: any) => ({
  components: { LContainer, LBox },
  setup() {
    return { args };
  },
  template: `
    <LContainer maxW='2xl' bg='blue.600' centerContent>
    <LBox padding='4' bg='blue.400' color='black' maxW='md'>
      There are many benefits to a joint design and development system. Not only
      does it bring benefits to the design team, but it also brings benefits to
      engineering teams. It makes sure that our experiences have a consistent look
      and feel, not just in our design specs, but in production.
    </LBox>
  </LContainer>
  `,
});

export const CenteringTheChildren = CenteringTemplate.bind({});
