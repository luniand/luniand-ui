import type { Meta, StoryFn } from "@storybook/vue3";
import { LButton ,LButtonGroup } from "../src";

export default {
  title: "Components / Button",
  component: { LButton ,LButtonGroup },
};

const Template: StoryFn = (args: any) => ({
  components: { LButton , LButtonGroup },
  setup() {
    return { args };
  },
  template: `
  <LButton colorScheme='teal' size='xs'>
    Button
  </LButton>
  <LButton colorScheme='teal' size='sm'>
    Button
  </LButton>
  <LButton colorScheme='teal' size='md'>
    Button
  </LButton>
  <LButton colorScheme='teal' size='lg'>
    Button
  </LButton>
  <LButtonGroup :spacing="4">
  <LButton isLoading variantColor="blue" variant="solid">
    Email
  </LButton>
  <LButton
    is-loading
    loading-text="Submitting"
    variant-color="blue"
    variant="outline"
  >
    Submit
  </LButton>
</LButtonGroup>    
<LButton size="md" height="50px" width="250px" border="2px" border-color="green.500 leftIcon rightIcon">
    Button
  </LButton>
  `,
});

export const Basic = Template.bind({});
