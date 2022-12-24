import type { StoryFn } from '@storybook/vue3';
import {
  LBreadcrumb,
  LBreadcrumbItem,
  LBreadcrumbLink,
  LBreadcrumbSeparator,
} from '../src';
import { LStack } from '@luniand-ui/layout';
export default {
  title: 'Components / BreadCrumb',
  component: {
    LBreadcrumb,
    LBreadcrumbItem,
    LBreadcrumbLink,
    LBreadcrumbSeparator,
  },
};

const Template: StoryFn = (args: any) => ({
  components: {
    LBreadcrumb,
    LBreadcrumbItem,
    LBreadcrumbLink,
    LBreadcrumbSeparator,
  },
  setup() {
    return { args };
  },
  template: `
        <LBreadcrumb>
        <LBreadcrumbItem>
            <LBreadcrumbLink href="#">Breadcrumb 1</LBreadcrumbLink>
        </LBreadcrumbItem>

        <LBreadcrumbItem>
            <LBreadcrumbLink href="#">Breadcrumb 2</LBreadcrumbLink>
        </LBreadcrumbItem>

        <LBreadcrumbItem isCurrentPage>
            <LBreadcrumbLink href="#">Breadcrumb 2</LBreadcrumbLink>
        </LBreadcrumbItem>
        </LBreadcrumb>
  `,
});

export const Basic = Template.bind({});

const SeparatorsTemplate: StoryFn = (args: any) => ({
  components: {
    LBreadcrumb,
    LBreadcrumbItem,
    LBreadcrumbLink,
    LBreadcrumbSeparator,
  },
  setup() {
    return { args };
  },
  template: `
    <LBreadcrumb :add-separator="false">
    <LBreadcrumbItem>
        <LBreadcrumbLink href="#">Breadcrumb 1</LBreadcrumbLink>
        <LBreadcrumbSeparator color="blue" font-size="35px" font-weight="bold" />
    </LBreadcrumbItem>

    <LBreadcrumbItem>
        <LBreadcrumbLink href="#">Breadcrumb 2</LBreadcrumbLink>
        <LBreadcrumbSeparator color="firebrick" font-size="20px" />
    </LBreadcrumbItem>
    
    <LBreadcrumbItem isCurrentPage>
        <LBreadcrumbLink href="#">Breadcrumb 2</LBreadcrumbLink>
    </LBreadcrumbItem>
    </LBreadcrumb>
  `,
});

export const SeparatorsBreadCrumb = SeparatorsTemplate.bind({});

const RouterTemplate: StoryFn = (args: any) => ({
  components: {
    LBreadcrumb,
    LBreadcrumbItem,
    LBreadcrumbLink,
    LBreadcrumbSeparator,
  },
  setup() {
    return { args };
  },
  template: `
    <LBreadcrumb separator="›">
    <LBreadcrumbItem>
        <LBreadcrumbLink as="nuxt-link" to="/">Components</LBreadcrumbLink>
    </LBreadcrumbItem>

    <LBreadcrumbItem>
        <LBreadcrumbLink as="nuxt-link" to="/breadcrumb">Breadcrumb</LBreadcrumbLink>
    </LBreadcrumbItem>
    </LBreadcrumb>
  `,
});

export const RouterBreadCrumb = RouterTemplate.bind({});
