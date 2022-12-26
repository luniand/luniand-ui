import type { StoryFn } from "@storybook/vue3";
import { LTextarea } from "../src";
import { ref } from "vue";
export default {
  title: "Components / TextArea",
  component: {
    LTextarea,
  },
};

const Template: StoryFn = (args: any) => ({
  components: {
    LTextarea,
  },
  setup() {
    return { args };
  },
  template: `
    <LTextarea placeholder="Here is a sample placeholder" />
  `,
});

export const Basic = Template.bind({});

const DisabledTemplate: StoryFn = (args: any) => ({
  components: {
    LTextarea,
  },
  setup() {
    return { args };
  },
  template: `
  <LTextarea  is-disabled placeholder="A disabled textarea" />
`,
});

export const DisabledTextarea = DisabledTemplate.bind({});

const InvalidTextareaTemplate: StoryFn = (args: any) => ({
  components: {
    LTextarea,
  },
  setup() {
    const check = ref(true);
    return { args, check };
  },
  template: `
  <LTextarea is-invalid  required error-border-color="crimson" placeholder="An invalid textarea" />
`,
});

export const InvalidTextarea = InvalidTextareaTemplate.bind({});
