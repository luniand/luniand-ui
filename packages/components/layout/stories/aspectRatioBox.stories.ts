import type { Meta, StoryFn } from "@storybook/vue3";
import { LAspectRatio, LFlex, LBox, LText } from "../src";
import { LImage } from "@luniand-ui/image";

export default {
  title: "Components / Layout / Aspectratiosbox",
  component: { LAspectRatio },
};

const Template: StoryFn = (args: any) => ({
  components: { LAspectRatio, LBox },
  setup() {
    return { args };
  },
  template: `
    <LAspectRatio max-w="560px" :ratio="1">
    <LBox
      as="iframe"
      title="naruto"
      src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
      allow-full-screen
    />
  </LAspectRatio>
  `,
});

export const Basic = Template.bind({});

const EmbedResponsiveImageTemplate: StoryFn = (args: any) => ({
  components: { LAspectRatio, LBox, LImage },
  setup() {
    return { args };
  },
  template: `
    <LAspectRatio max-w="400px" :ratio="4 / 3">
      <LImage src="https://vignette.wikia.nocookie.net/naruto/images/d/dc/Naruto's_Sage_Mode.png/revision/latest?cb=20150124180545" alt="sage mode naruto" object-fit="cover" />
    </LAspectRatio>
  `,
});

export const EmbedResponsiveImage = EmbedResponsiveImageTemplate.bind({});

const EmbedaresponsivemapTemplate: StoryFn = (args: any) => ({
  components: { LAspectRatio, LBox, LImage },
  setup() {
    return { args };
  },
  template: `
  <LAspectRatio :ratio="16 / 9">
  <LBox
    as="iframe"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.280806814!2d32.52908495891268!3d0.31302911611656636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9d74b39b%3A0x4538903dd96b6fec!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sng!4v1586053287932!5m2!1sen!2sng"
    frameborder="0"
    allowfullscreen=""
    aria-hidden="false"
    tabindex="0"
    alt="Kampala, Uganda"
  />
</LAspectRatio>
  `,
});

export const EmbedAResponsiveMapTemplate = EmbedaresponsivemapTemplate.bind({});
