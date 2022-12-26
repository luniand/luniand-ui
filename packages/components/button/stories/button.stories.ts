import type { StoryFn } from '@storybook/vue3';
import { LButton, LButtonGroup } from '../src';
import { LStack, LBox, LWrap, LWrapItem } from '@luniand-ui/layout';

export default {
  title: 'Components / Button',
  component: { LButton, LButtonGroup },
};

const Template: StoryFn = (args: any) => ({
  components: { LButton },
  setup() {
    return { args };
  },
  template: `
    <LButton color-scheme="teal">
      Button
    </LButton>
  `,
});

export const Basic = Template.bind({});

const SizesTemplate: StoryFn = (args: any) => ({
  components: { LButton, LStack },
  setup() {
    return { args };
  },
  template: `
    <LStack spacing="4" direction="row" align="center">
      <LButton color-scheme="teal" size="xs">
        Button
      </LButton>
      <LButton color-scheme="teal" size="sm">
        Button
      </LButton>
      <LButton color-scheme="teal" size="md">
        Button
      </LButton>
      <LButton color-scheme="teal" size="lg">
        Button
      </LButton>
    </LStack>
  `,
});

export const Sizes = SizesTemplate.bind({});

const VariantsTemplate: StoryFn = (args: any) => ({
  components: { LButton, LStack },
  setup() {
    return { args };
  },
  template: `
    <LStack spacing="4" direction="row" align="center">
      <LButton color-scheme="teal" variant="solid">
        Button
      </LButton>
      <LButton color-scheme="teal" variant="outline">
        Button
      </LButton>
      <LButton color-scheme="teal" variant="ghost">
        Button
      </LButton>
      <LButton color-scheme="teal" variant="link">
        Button
      </LButton>
    </LStack>
  `,
});

export const Variants = VariantsTemplate.bind({});

const ColorsTemplate: StoryFn = (args: any) => ({
  components: { LButton, LButtonGroup, LStack, LBox, LWrap, LWrapItem },
  setup() {
    return { args };
  },
  template: `
    <LStack spacing="4" direction="column" align-items="flex-start" justify-content="flex-start">
      <LBox
        display="flex"
        align-items="center"
        justify-content="center"
        width="100%"
        py="12"
        bg-image="https://bit.ly/2Z4KKcF"
        bg-position="center"
        bg-repeat="no-repeat"
        mb="2"
      >
        <LButtonGroup gap="4">
          <LButton colorScheme="whiteAlpha">WhiteAlpha</LButton>
          <LButton colorScheme="blackAlpha">BlackAlpha</LButton>
        </LButtonGroup>
      </LBox>
      <LWrap spacing="4">
        <LWrapItem>
          <LButton colorScheme="gray">Gray</LButton>
        </LWrapItem>
        <LWrapItem>
          <LButton colorScheme="red">Red</LButton>
        </LWrapItem>
        <LWrapItem>
          <LButton colorScheme="orange">Orange</LButton>
        </LWrapItem>
        <LWrapItem>
          <LButton colorScheme="yellow">Yellow</LButton>
        </LWrapItem>
        <LWrapItem>
          <LButton colorScheme="green">Green</LButton>
        </LWrapItem>
        <LWrapItem>
          <LButton colorScheme="teal">Teal</LButton>
        </LWrapItem>
        <LWrapItem>
          <LButton colorScheme="blue">Blue</LButton>
        </LWrapItem>
        <LWrapItem>
          <LButton colorScheme="cyan">Cyan</LButton>
        </LWrapItem>
        <LWrapItem>
          <LButton colorScheme="purple">Purple</LButton>
        </LWrapItem>
        <LWrapItem>
          <LButton colorScheme="pink">Pink</LButton>
        </LWrapItem>
        <LWrapItem>
          <LButton colorScheme="linkedin">Linkedin</LButton>
        </LWrapItem>
        <LWrapItem>
          <LButton colorScheme="facebook">Facebook</LButton>
        </LWrapItem>
        <LWrapItem>
          <LButton colorScheme="messenger">Messenger</LButton>
        </LWrapItem>
        <LWrapItem>
          <LButton colorScheme="whatsapp">Whatsapp</LButton>
        </LWrapItem>
        <LWrapItem>
          <LButton colorScheme="twitter">Twitter</LButton>
        </LWrapItem>
        <LWrapItem>
          <LButton colorScheme="telegram">Telegram</LButton>
        </LWrapItem>
      </LWrap>
    </LStack>
  `,
});

export const Colors = ColorsTemplate.bind({});

const IconTemplate: StoryFn = (args: any) => ({
  components: { LButton, LStack, LButtonGroup },
  setup() {
    return { args };
  },
  template: `
    <LStack spacing="4" direction="row" align="center">
      <LButtonGroup :spacing="4">
      <LButton left-icon="email" colorScheme="blue" variant="solid">
        Email
      </LButton>
      <LButton right-icon="arrow-forward" colorScheme="blue" variant="outline">
        Call us
      </LButton>
    </LButtonGroup>  
    </LStack>
  `,
});

export const ButtonwithIcon = IconTemplate.bind({});

const LoadingTemplate: StoryFn = (args: any) => ({
  components: { LButton, LButtonGroup },
  setup() {
    return { args };
  },
  template: `
    <LButtonGroup :spacing="4">
    <LButton isLoading colorScheme="blue" variant="solid">
      Email
    </LButton>
    <LButton
      is-loading
      colorScheme="blue"
      variant="outline"
    >
      Submit
    </LButton>
  </LButtonGroup>  
  `,
});

export const ButtonLoadingState = LoadingTemplate.bind({});

const AccessibilityTemplate: StoryFn = (args: any) => ({
  components: { LButton, LButtonGroup },
  setup() {
    return { args };
  },
  template: `
    <LButton size="md" height="50px" width="250px" border="2px" border-color="green.500">
      Button
    </LButton>  
  `,
});

export const Accessibility = AccessibilityTemplate.bind({});

const CustomButtonTemplate: StoryFn = (args: any) => ({
  components: { LButton, LButtonGroup, LBox },
  setup() {
    return { args };
  },
  template: `
      <LBox
      as="button"
      height="24px"
      line-height="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      border="1px"
      px="8px"
      rounded="2px"
      fontSize="14px"
      font-weight="semibold"
      bg="#f5f6f7"
      border-color="#ccd0d5"
      color="#4b4f56"
      :_active="{ bg: 'tomato' }"
    >
      Join Group
    </LBox>  
  `,
});

export const CustomButton = CustomButtonTemplate.bind({});
