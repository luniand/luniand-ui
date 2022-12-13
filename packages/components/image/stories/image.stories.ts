import type { Meta, StoryFn } from '@storybook/vue3';
import { LImage } from '../src';

export default {
  title: 'Components / Image',
  component: { LImage },
} as Meta<typeof LImage>;

const Template: StoryFn<typeof LImage> = (args: any) => ({
  components: { LImage },
  setup() {
    return { args };
  },
  template: `
  <LImage
    borderRadius='full'
    boxSize="100px"
    objectFit="cover"
    fallbackSrc='https://via.placeholder.com/150'
    alt="Dan Abramov"
  />
  <LImage
    objectFit="cover"
    src="https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg"
    alt="Dan Abramov"
    htmlWidth="99px "
    htmlHeight="99px"
    @onLoad=""
  />
  <LImage boxSize="200px" src="https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg" alt="Dan Abramov" />`,
});

export const Basic = Template.bind({});
Basic.args = {};
