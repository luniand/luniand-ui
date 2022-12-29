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
import { LFormControl, LFormLabel } from "../../form-control";
import { LInput } from "../../input";
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

const BlockTemplate: StoryFn = (args: any) => ({
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
    const blockScrollOnMount = ref(false);

    const open = () => {
      isOpen.value = true;
    };

    const close = () => {
      isOpen.value = false;
    };
    return {
      args,
      isOpen,
      finalFocus,
      initialFocus,
      open,
      close,
      blockScrollOnMount,
    };
  },
  template: `
      <div
       style="background-color: #ffffff; border-width:1px; border-style: solid; border-color: #000000; height: 500px; padding: 50px "
      >
      <h2> Try Scrolling when Modal opens# </h2>
      <LButton color-scheme="blue" data-testid="open-modal" @click="open"
        >Open modal</LButton
      >
      <!-- eslint-disable-next-line -->
      <LModal
        v-model="isOpen"
        :initial-focus-ref="() => $refs.initialFocus"
        :final-focus-ref="() => $refs.finalFocus"
        :block-scroll-on-mount="blockScrollOnMount"
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

export const BlockScrolling = BlockTemplate.bind({});

const FocusTemplate: StoryFn = (args: any) => ({
  components: {
    LModal,
    LModalOverlay,
    LModalContent,
    LModalHeader,
    LModalFooter,
    LModalBody,
    LModalCloseButton,
    LButton,
    LFormControl,
    LInput,
    LFormLabel,
  },
  setup() {
    const isOpen = ref(false);
    const initialRef = ref();
    const finalRef = ref();
    const content = ref();

    const open = () => {
      isOpen.value = true;
    };

    const close = () => {
      isOpen.value = false;
    };

    function innitTest($refs) {
      console.log("hehehehehe");
      $refs.initialRef;
    }
    return {
      args,
      isOpen,
      open,
      close,
      initialRef,
      finalRef,
      content,
      innitTest,
    };
  },
  template: `
      <div>
      <LButton mr="3" @click="open">Open Modal</LButton>
      <LButton ref="finalRef">
        I'll receive focus on close
      </LButton>
      <LModal
        v-model="isOpen"
        :initialFocusRef="() => $refs.finalRef"
        :final-focus-ref="() => $refs.finalRef"
        :is-open="isOpen"
        :on-close="close"
      >
      <LModalOverlay />
        <LModalContent ref="content">
          <LModalHeader>Create your account</LModalHeader>
          <LModalCloseButton />
          <LModalBody>
            <LFormControl>
              <LFormLabel>First name</LFormLabel>
              <LInput ref="initialRef" placeholder="First name" />
            </LFormControl>
  
            <LFormControl mt="4">
              <LFormLabel>Last name</LFormLabel>
              <LInput placeholder="Last name" />
            </LFormControl>
          </LModalBody>
          <LModalFooter>
            <LButton variant-color="blue" mr="3" @click="close">
              Cancel
            </LButton>
            <LButton @click="close">Save</LButton>
          </LModalFooter>
        </LModalContent>
       
      </LModal>
    </div>
`,
});

export const FocusElement = FocusTemplate.bind({});
