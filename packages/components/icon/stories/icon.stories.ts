import type { Meta, StoryFn } from "@storybook/vue3";
import { LIcon } from "../src";

export default {
  title: "Components / Media and Icons / Icon",
  component: { LIcon },
  argTypes: {
    id: "String",
    size: "String",
  },
} as Meta<typeof LIcon>;

const BasicTemplate: StoryFn<typeof LIcon> = (args: any) => ({
  components: { LIcon },
  setup() {
    return { args };
  },
  template: '<LIcon v-bind="args" />',
});

export const Basic = BasicTemplate.bind({});
Basic.args = {
  id: "basic-icon",
  size: "24px",
};

const CustomTemplate: StoryFn<typeof LIcon> = () => ({
  components: { LIcon },
  template: `
    <LIcon>
      <path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z" />
    </LIcon>
  `,
});

export const Custom = CustomTemplate.bind({});
