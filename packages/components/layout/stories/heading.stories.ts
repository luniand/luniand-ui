import type { StoryFn } from '@storybook/vue3';
import { LHeading, LStack, LBox, LText } from '../src';
import { LButton } from '@luniand-ui/button';

export default {
  title: 'Components / Layout / Heading',
  component: { LHeading },
};

const Template: StoryFn = (args: any) => ({
  components: { LHeading },
  setup() {
    return { args };
  },
  template: `
    <LHeading>I'm a Heading</LHeading>
  `,
});

export const Basic = Template.bind({});

const SizeTemplate: StoryFn = (args: any) => ({
  components: { LHeading, LStack },
  setup() {
    return { args };
  },
  template: `
      <LStack spacing="3">
      <LHeading as="h1" size="2xl">
        In love with Vue & Nuxt
      </LHeading>
      <LHeading as="h2" size="xl">
        In love with Vue & Nuxt
      </LHeading>
      <LHeading as="h3" size="lg">
        In love with Vue & Nuxt
      </LHeading>
      <LHeading as="h4" size="md">
        In love with Vue & Nuxt
      </LHeading>
      <LHeading as="h5" size="sm">
        In love with Vue & Nuxt
      </LHeading>
      <LHeading as="h6" size="xs">
        In love with Vue & Nuxt
      </LHeading>
    </LStack>
  `,
});

export const SizeHeading = SizeTemplate.bind({});

const TruncateTemplate: StoryFn = (args: any) => ({
  components: { LHeading },
  setup() {
    return { args };
  },
  template: `
    <LHeading>
      Basic text writing, including headings, body text, lists, and more.
   </LHeading>
  `,
});

export const TruncateHeading = TruncateTemplate.bind({});

const OverrideTemplate: StoryFn = (args: any) => ({
  components: { LHeading },
  setup() {
    return { args };
  },
  template: `
  <LHeading  size="lg" fontSize="50px">
     I'm overriding this heading
  </LHeading>
  `,
});

export const OverrideStyle = OverrideTemplate.bind({});

const CompositionTemplate: StoryFn = (args: any) => ({
  components: { LHeading, LBox, LText, LButton },
  setup() {
    return { args };
  },
  template: `
  <LBox max-w="32rem">
    <LHeading mb="4">Modern online and offline payments for Africa</LHeading>
    <LText font-size="xl">
      Paystack helps businesses in Africa get paid by anyone, anywhere in the
      world
    </LText>
    <LButton size="lg" variant-color="green" mt="24px">
      Create a free account
    </LButton>
  </LBox>
  `,
});

export const Composition = CompositionTemplate.bind({});
