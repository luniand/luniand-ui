import { LFlex } from "../src";

export default {
  title: "Components / Flex",
  component: { LFlex },
};

const Template = (args: any, slots: any) => ({
  components: { LFlex },
  setup() {
    return { args, slots };
  },
  template: '<LFlex v-bind="args">{{ slots }}</LFlex>',
});

export const Default = Template({}, "Hello");
