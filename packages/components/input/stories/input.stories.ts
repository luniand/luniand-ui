import type { StoryFn } from "@storybook/vue3";
import {
  LInput,
  LInputAddon,
  LInputGroup,
  LInputLeftAddon,
  LInputLeftElement,
  LInputRightAddon,
  LInputRightElement,
} from "../src";
import { LStack, LBox } from "@luniand-ui/layout";
import { ref } from "vue";
import { LIcon } from "../../icon";

export default {
  title: "Components / Input",
  component: {
    LInput,
    LInputAddon,
    LInputGroup,
    LInputLeftAddon,
    LInputLeftElement,
    LInputRightAddon,
    LInputRightElement,
    LStack,
    LIcon,
  },
};

const Template: StoryFn = (args: any) => ({
  components: {
    LInput,
  },
  setup() {
    return { args };
  },
  template: `
    <LInput  placeholder="Basic usage"   />
  `,
});

export const Basic = Template.bind({});

const SizeTemplate: StoryFn = (args: any) => ({
  components: {
    LInput,
    LInputAddon,
    LInputGroup,
    LInputLeftAddon,
    LInputLeftElement,
    LInputRightAddon,
    LInputRightElement,
    LStack,
  },
  setup() {
    return { args };
  },
  template: `
    <LStack spacing="3">
      <LInput placeholder="large size" size="lg" />
      <LInput placeholder="default size" size="md" />
      <LInput placeholder="small size" size="sm" />
  </LStack>
  `,
});

export const SizeInput = SizeTemplate.bind({});

const variantsTemplate: StoryFn = (args: any) => ({
  components: {
    LInput,
    LInputAddon,
    LInputGroup,
    LInputLeftAddon,
    LInputLeftElement,
    LInputRightAddon,
    LInputRightElement,
    LStack,
  },
  setup() {
    return { args };
  },
  template: `
    <LStack spacing="3">
      <LInput variant="outline" placeholder="Outline" />
      <LInput variant="filled" placeholder="Filled" />
      <LInput variant="flushed" placeholder="Flushed" />
      <LInput variant="unstyled" placeholder="Unstyled" />
  </LStack>
  `,
});

export const VariantsInput = variantsTemplate.bind({});

const LeftandRightAddonTemplate: StoryFn = (args: any) => ({
  components: {
    LInput,
    LInputAddon,
    LInputGroup,
    LInputLeftAddon,
    LInputLeftElement,
    LInputRightAddon,
    LInputRightElement,
    LStack,
  },
  setup() {
    return { args };
  },
  template: `
    <LStack spacing="3">
    <LInputGroup>
    <LInputLeftAddon>+234</LInputLeftAddon>
    <LInput type="tel" roundedLeft="0" placeholder="phone number" />
  </LInputGroup>
  <LInputGroup size="sm">
    <LInputLeftAddon>https://</LInputLeftAddon>
    <LInput rounded="0" placeholder="mysite" />
    <LInputRightAddon>.com</LInputRightAddon>
  </LInputGroup>
  </LStack>
  `,
});

export const LeftAndRightAddons = LeftandRightAddonTemplate.bind({});

const InsideInputTemplate: StoryFn = (args: any) => ({
  components: {
    LInput,
    LInputAddon,
    LInputGroup,
    LInputLeftAddon,
    LInputLeftElement,
    LInputRightAddon,
    LInputRightElement,
    LStack,
    LIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <LStack spacing="3">
      <LInputGroup>
      <LInputLeftElement><LIcon name="phone" color="gray.300" /></LInputLeftElement>
      <LInput type="phone" placeholder="Phone number" />
    </LInputGroup>

    <LInputGroup>
      <LInputLeftElement color="gray.300" fontSize="1.2em">¥</LInputLeftElement>
      <LInput placeholder="Enter amount" />
      <LInputRightElement><LIcon name="check" color="green.500" /></LInputRightElement>
    </LInputGroup>
    </LStack>
  `,
});

export const ElementInsideInput = InsideInputTemplate.bind({});

const PasswTemplate: StoryFn = (args: any) => ({
  components: {
    LInput,
    LInputAddon,
    LInputGroup,
    LInputLeftAddon,
    LInputLeftElement,
    LInputRightAddon,
    LInputRightElement,
    LStack,
  },
  setup() {
    const password = ref("saobang2");
    const show = ref(false);
    return { args, password, show };
  },
  template: `
    <LInputGroup size="md">
    <LInput
      pr="4.5rem"
      :type="show ? 'text' : 'password'"
      placeholder="Enter password"
      v-model="password"
    />
    <LInput-right-element width="4.5rem">
      <c-button h="1.75rem" size="sm" @click="show = !show">
        {{ show ? 'Hide' : 'Show' }}
      </c-button>
    </LInput-right-element>
  </LInputGroup>
  `,
});

export const PasswordInput = PasswTemplate.bind({});

const BorderTemplate: StoryFn = (args: any) => ({
  components: {
    LInput,
    LInputAddon,
    LInputGroup,
    LInputLeftAddon,
    LInputLeftElement,
    LInputRightAddon,
    LInputRightElement,
    LStack,
  },
  setup() {
    return { args };
  },
  template: `
    <LStack spacing="3">
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
    </LStack>
  `,
});

export const BorderColorInput = BorderTemplate.bind({});
