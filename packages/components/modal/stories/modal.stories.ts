import type { StoryFn } from "@storybook/vue3";
import {
  LModal,
  LModalOverlay,
  LModalContent,
  LModalHeader,
  LModalFooter,
  LModalBody,
  LModalCloseButton,
} from "../src";
import { LButton } from "@luniand-ui/button";
import { ref } from "vue";

export default {
  title: "Components / Modal",
  component: {
    LModal,
    LModalOverlay,
    LModalContent,
    LModalHeader,
    LModalFooter,
    LModalBody,
    LModalCloseButton,
    LButton,
  },
};

const Template: StoryFn = (args: any) => ({
  components: {
    LModal,
    LModalOverlay,
    LModalContent,
    LModalHeader,
    LModalFooter,
    LModalBody,
    LModalCloseButton,
    LButton,
  },
  setup() {
    const isOpen = ref(false);
    const finalFocus = ref();
    const initialFocus = ref();

    const open = () => {
      isOpen.value = true;
    };

    const close = () => {
      isOpen.value = false;
    };
    return { args, isOpen, finalFocus, initialFocus, open, close };
  },
  template: `
    <div
    d="flex"
    justify-content="center"
    align-items="center"
    h="full"
    w="100%"
  >
    <LButton color-scheme="blue" data-testid="open-modal" @click="open"
      >Open modal</LButton
    >
    <LButton ref="finalFocus" data-testid="final-focus" ml="3"
      >Other LButton</LButton
    >
    <!-- eslint-disable-next-line -->
    <LModal
      v-model="isOpen"
      :initial-focus-ref="() => $refs.initialFocus"
      :final-focus-ref="() => $refs.finalFocus"
    >
      <LModalOverlay />
      <LModalContent>
        <LModalHeader>Modal header</LModalHeader>
        <LModalCloseButton data-testid="close-LButton" />
        <LModalBody>
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi.
          </p>
        </LModalBody>

        <LModalFooter>
          <LButton @click="close" mr="3"> Close </LButton>
          <LButton id="initialFocus" ref="initialFocus"
            >Secondary action</LButton
          >
        </LModalFooter>
      </LModalContent>
    </LModal>
  </div>
  `,
});

export const Basic = Template.bind({});
