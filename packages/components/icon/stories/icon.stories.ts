import { LIcon } from "../src";

export default {
  title: "Components / Media and Icons / Icon",
  component: { LIcon },
};

const Template = (args) => ({
  components: { LIcon },
  setup() {
    return { args };
  },
  template: '<LIcon v-bind="args" />',
});

export const Basic = Template({
  id: "basic-icon",
  fontSize: "24px",
});
