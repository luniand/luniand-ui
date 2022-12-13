import type { StoryFn } from '@storybook/vue3';
import {
  LInput,
  LInputAddon,
  LInputGroup,
  LInputLeftAddon,
  LInputLeftElement,
  LInputRightAddon,
  LInputRightElement,
} from '../src';

export default {
  title: 'Components / Input',
  component: {
    LInput,
    LInputAddon,
    LInputGroup,
    LInputLeftAddon,
    LInputLeftElement,
    LInputRightAddon,
    LInputRightElement,
  },
};

const Template: StoryFn = (args: any) => ({
  components: {
    LInput,
    LInputAddon,
    LInputGroup,
    LInputLeftAddon,
    LInputLeftElement,
    LInputRightAddon,
    LInputRightElement,
  },
  setup() {
    return { args };
  },
  template: `
    <LInput placeholder='extra small size' size='xs' />
    <LInput placeholder='small size' size='sm' />
    <LInput placeholder='medium size' size='md' />
    <LInput placeholder='large size' size='lg' />
    <LInput variant='outline' placeholder='Outline' />
    <LInput variant='filled' placeholder='Filled' />
    <LInput variant='flushed' placeholder='Flushed' />
    <LInput variant='unstyled' placeholder='Unstyled' />
    <LInputGroup>
    <LInput type='tel' placeholder='phone number' />
  </LInputGroup>

  <LInput-group>
    <LInput-left-addon>+234</LInput-left-addon>
    <LInput type="tel" roundedLeft="0" placeholder="phone number" />
  </LInput-group>

  <LInput-group size="sm">
  <LInput-left-addon>https://</LInput-left-addon>
  <LInput rounded="0" placeholder="mysite" />
  <LInput-right-addon>.com</LInput-right-addon>
</LInput-group>

<LInput focusBorderColor='lime' placeholder='Here is a sample placeholder' />
<LInput focus-border-color="lime" placeholder="Here is a sample placeholder" />
  <LInput
    focus-border-color="pink.400"
    placeholder="Here is a sample placeholder"
  />
  <LInput
    is-invalid
    error-border-color="red.300"
    placeholder="Here is a sample placeholder"
  />
  <LInput
    is-invalid
    error-border-color="crimson"
    placeholder="Here is a sample placeholder"
  />
  <LInput
 placeholder="Select Date and Time"
 size="md"
 type="datetime-local"
/>
  `,
});

export const Basic = Template.bind({});
