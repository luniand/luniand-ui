import type { StoryFn } from "@storybook/vue3";
import {
  LAlertDialog,
  LAlertDialogHeader,
  LAlertDialogBody,
  LAlertDialogFooter,
  LAlertDialogOverlay,
  LAlertDialogContent,
  LAlertDialogCloseButton,
} from "../src";
import { LButton } from "@luniand-ui/button";
import { useToggle } from "@vueuse/core";
import { ref } from "vue";

export default {
  title: "Components / AlertDialog",
  component: {
    LAlertDialog,
    LAlertDialogHeader,
    LAlertDialogBody,
    LAlertDialogFooter,
    LAlertDialogOverlay,
    LAlertDialogContent,
    LAlertDialogCloseButton,
    LButton,
  },
};

const Template: StoryFn = (args: any) => ({
  components: {
    LAlertDialog,
    LAlertDialogHeader,
    LAlertDialogBody,
    LAlertDialogFooter,
    LAlertDialogOverlay,
    LAlertDialogContent,
    LAlertDialogCloseButton,
    LButton,
  },
  setup() {
    const initialFocus = ref(null);

    const isOpen = ref(false);
    const open = () => {
      isOpen.value = true;
    };

    const close = () => {
      isOpen.value = false;
    };
    return { args, isOpen, close, open, initialFocus };
  },
  template: `
    <div
  >
    <LButton color-scheme="red" data-testid="open-modal" @click="open"
      >Delete customer</LButton
    >
    <!-- eslint-disable-next-line -->
    <LAlertDialog v-model="isOpen" :least-destructive-ref="() => initialFocus">
      <LAlertDialogOverlay />
      <LAlertDialogContent>
        <LAlertDialogHeader>Delete Customer</LAlertDialogHeader>
        <LAlertDialogCloseButton data-testid="close-button" />
        <LAlertDialogBody>
          Are you sure? You can't undo this action afterwards.
        </LAlertDialogBody>

        <LAlertDialogFooter>
          <LButton @click="close" mr="3" ref="initialFocus"> Cancel </LButton>
          <LButton id="initialFocus" color-scheme="red">Delete</LButton>
        </LAlertDialogFooter>
      </LAlertDialogContent>
    </LAlertDialog>
  </div>
  `,
});

export const Basic = Template.bind({});
