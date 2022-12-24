import type { StoryFn } from '@storybook/vue3';
import { LCode } from '../src';
export default {
  title: 'Components / Code',
  component: {
    LCode,
  },
};

const Template: StoryFn = (args: any) => ({
  components: {
    LCode,
  },
  setup() {
    return { args };
  },
  template: `
    <LCode> Hello world </LCode>
  `,
});

export const Basic = Template.bind({});

const ColorCodeTemplate: StoryFn = (args: any) => ({
  components: {
    LCode,
  },
  setup() {
    return { args };
  },
  template: `
    <LCode>console.log(welcome)</LCode>
    <LCode colorScheme='red' >var chakra = 'awesome!'></LCode>
    <LCode colorScheme="yellow">npm install chakra</LCode>
  `,
});

export const ColorCode = ColorCodeTemplate.bind({});
