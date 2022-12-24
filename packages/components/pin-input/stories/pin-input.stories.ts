import type { StoryFn } from '@storybook/vue3';
import { LPinInput, LPinInputField } from '../src';
import { ref } from 'vue';

export default {
  title: 'Components / PinInput',
  component: { LPinInput, LPinInputField },
};

const Template: StoryFn = (args: any) => ({
  components: { LPinInput, LPinInputField },
  setup() {
    const value = ref(['1', '3']);
    return { args, value };
  },
  template: `
    <LPinInput v-model="value">
        <LPinInputField />
        <LPinInputField />
        <LPinInputField />
        <LPinInputField />
    </LPinInput>
    `,
});

export const Basic = Template.bind({});
