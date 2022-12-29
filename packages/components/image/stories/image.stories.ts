import type { Meta, StoryFn } from "@storybook/vue3";
import { LImage } from "../src";
import { LBox, LStack } from "../../layout";

export default {
  title: "Components / Image",
  component: { LImage },
} as Meta<typeof LImage>;

const Template: StoryFn<typeof LImage> = (args: any) => ({
  components: { LImage, LBox },
  setup() {
    return { args };
  },
  template: `
  <LBox w="sm">
    <LImage src="https://cdn.tgdd.vn/Files/2022/02/14/1415496/garena-free-fire-removed-2_1280x720-800-resize.jpg" alt="wibu Bakebwa" />
  </LBox>
`,
});

export const Basic = Template.bind({});

const SizeTemplate: StoryFn<typeof LImage> = (args: any) => ({
  components: { LImage, LBox, LStack },
  setup() {
    return { args };
  },
  template: `
    <LStack is-inline>
    <LImage
      size="100px"
      objectFit="cover"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQRDv_iA56ZSgIgc-1cvdtDf8H-ytSLzpRAn3EWrs4nSOVMaqMVU8_gS-uoeEY6x6vdbw&usqp=CAU"
      alt="Segun Adebayo"
    />
    <LImage
      size="150px"
      objectFit="cover"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLVh8kwP3GdHXizcQVo_4iEXgAWZU-n0n3yg&usqp=CAU"
      alt="Naruto Uzumaki"
    />
    <LImage size="200px"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-YSoTTZvS0AJBscsim5OkdjwtQoKUpr06W34STQVg6WCUMD0-7TLuf-2TcOT1Iw0h6M&usqp=CAU" alt="Sarah Drasner" />
  </LStack>
`,
});

export const Size = SizeTemplate.bind({});

const RoundedTemplate: StoryFn<typeof LImage> = (args: any) => ({
  components: { LImage, LBox, LStack },
  setup() {
    return { args };
  },
  template: `
    <LStack is-inline>
    <LImage
      rounded="full"
      h="150px"
      w="150px"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEYd-PNDeiF7Hfl0rjkrPzgBh8bhbdUGUgQ&usqp=CAU"
      alt="Jonathan Bakebwa"
    />
  </LStack>
`,
});

export const RoundedImage = RoundedTemplate.bind({});

const FallbackTemplate: StoryFn<typeof LImage> = (args: any) => ({
  components: { LImage, LBox, LStack },
  setup() {
    return { args };
  },
  template: `
    <LStack is-inline>
       <LImage src="gibberish.png" fallback-src="https://via.placeholder.com/150" />
     </LStack>
`,
});

export const FallbackSupport = FallbackTemplate.bind({});
