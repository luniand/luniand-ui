import type { StoryFn } from "@storybook/vue3";
import { LKbd, LBox, LStack } from "../src";
import { LIcon } from "@luniand-ui/icons";

export default {
  title: "Components / Layout / Kbd",
  component: { LKbd },
};

const Template: StoryFn = (args: any) => ({
  components: { LKbd },
  setup() {
    return { args };
  },
  template: `
    <h1> Keyboard Key </h1>
    <span>
      <LKbd>shift</LKbd> + <LKbd>H</LKbd>
    </span>
  `,
});

export const Basic = Template.bind({});

const ModifierTemplate: StoryFn = (args: any) => ({
  components: { LKbd, LIcon, LBox, LStack },
  setup() {
    return { args };
  },
  template: `
    <LStack spacing="3">
    <span> The only punctuation you should need is the + to indicate that a combination of keys will activate the shortcut. </span>
    <span>
      <LKbd>shift</LKbd> + <LKbd>H</LKbd>
    </span>
    <span> For a sequence of keys where one must follow the other, write "then" in between. Stick to lowercase to match the non-letter keys. </span>
    <span>
      <LKbd>shift</LKbd> then <LKbd>H</LKbd>
    </span>
    <span> If two different keys can execute the same action or the shortcut itself may look different on the user’s keyboard, write "or" in between. </span>
    <span>
    <LKbd>alt</LKbd> or <LKbd>option</LKbd>
    </span>
  </LStack>
  `,
});

export const Modifier = ModifierTemplate.bind({});
