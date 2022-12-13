import type { Meta, StoryFn } from '@storybook/vue3';
import {
  LFormControl,
  LFormLabel,
  LFormErrorMessage,
  LFormHelperText,
} from '../src';

import {
  LInput,
  LInputAddon,
  LInputGroup,
  LInputLeftAddon,
  LInputLeftElement,
  LInputRightAddon,
  LInputRightElement,
} from '../../input';

export default {
  title: 'Components / FormControl',
  component: {
    LFormControl,
    LFormLabel,
    LFormErrorMessage,
    LFormHelperText,
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
    LFormControl,
    LFormLabel,
    LFormErrorMessage,
    LFormHelperText,
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
  <LForm-control>
  <LForm-label for="email">Email address</LForm-label>
  <LInput type="email" id="email" aria-describedby="email-helper-text" />
  <LForm-helper-text id="email-helper-text">
    We'll never share your email.
  </LForm-helper-text>
</LForm-control>
  `,
});

export const Basic = Template.bind({});
