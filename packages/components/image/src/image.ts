import {
  defineComponent,
  VueElement,
  toRefs,
  PropType,
  h,
  computed,
  ImgHTMLAttributes,
} from 'vue';

import { omit } from '@luniand-ui/utils';

import { luniand, HTMLLuniandProps, SystemProps } from '@luniand-ui/system';

import { useImage, LUseImageProps } from './use-image';

interface LNativeImageOptions {
  /**
   * The native HTML `width` attribute to the passed to the `img`
   */
  htmlWidth?: string | number;
  /**
   * The native HTML `height` attribute to the passed to the `img`
   */
  htmlHeight?: string | number;
}

interface INativeImageProps
  extends HTMLLuniandProps<'img'>,
    LNativeImageOptions {}

const LNativeImage = defineComponent({
  name: 'LNativeImage',
  props: {
    htmlWidth: {
      type: [String, Number] as PropType<LNativeImageOptions['htmlWidth']>,
      default: null,
    },
    htmlHeight: {
      type: [String, Number] as PropType<LNativeImageOptions['htmlHeight']>,
      default: null,
    },
  },
  setup(props, { attrs }) {
    return () => {
      return h(luniand.img, {
        width: props.htmlWidth,
        height: props.htmlHeight,
        ...props,
        ...attrs,
      });
    };
  },
});

interface ImageOptions extends LNativeImageOptions {
  /**
   * Fallback image `src` to show if image is loading or image fails.
   *
   * Note 🚨: We recommend you use a local image
   */
  fallbackSrc?: string;
  /**
   * Fallback element to show if image is loading or image fails.
   * @type VueElement
   */
  fallback?: VueElement;
  /**
   * Defines loading strategy
   */
  loading?: 'eager' | 'lazy';
  /**
   * How the image to fit within its bounds.
   * It maps to css `object-fit` property.
   * @type SystemProps["objectFit"]
   */
  fit?: SystemProps['objectFit'];
  /**
   * How to align the image within its bounds.
   * It maps to css `object-position` property.
   * @type SystemProps["objectPosition"]
   */
  align?: SystemProps['objectPosition'];
  /**
   * If `true`, opt out of the `fallbackSrc` logic and use as `img`
   */
  ignoreFallback?: boolean;
  size? : string;
}

export interface LImageProps
  extends LUseImageProps,
    Omit<HTMLLuniandProps<'img'>, keyof LUseImageProps>,
    ImageOptions {}

export const LImage = defineComponent({
  name: 'LImage',
  props: {
    src: {
      type: String as PropType<LImageProps['src']>,
      required: true,
    },
    size: {
      type: String as PropType<LImageProps['size']>,
      required: false,
    },
    fallback: VueElement as PropType<LImageProps['fallback']>,
    fallbackSrc: {
      type: String as PropType<LImageProps['fallbackSrc']>,
      default: null,
    },
    ignoreFallback: Boolean as PropType<LImageProps['ignoreFallback']>,
    htmlWidth: {
      type: String as PropType<LImageProps['htmlWidth']>,
      default: null,
    },
    htmlHeight: {
      type: String as PropType<LImageProps['htmlHeight']>,
      default: null,
    },
    srcSet: {
      type: String as PropType<LImageProps['srcSet']>,
      default: null,
    },
    align: {
      type: String as PropType<string>,
      default: null,
    },
    loading: {
      type: String as PropType<LImageProps['loading']>,
      default: null,
    },
    fit: {
      type: String as PropType<string>,
      default: null,
    },
    crossOrigin: {
      type: String as PropType<LImageProps['crossOrigin']>,
      default: '',
    },
    onError: {
      type: Object as PropType<ImgHTMLAttributes['onError']>,
      default: () => {},
    },
    onLoad: {
      type: Object as PropType<ImgHTMLAttributes['onLoad']>,
      default: () => {},
    },
  },
  setup(props, { attrs }) {
    const {
      fallbackSrc,
      fallback,
      src,
      size,
      srcSet,
      align,
      fit,
      loading,
      ignoreFallback,
      crossOrigin,
      ...rest
    } = toRefs(props);

    /**
     * Defer to native `img` tag if `loading` prop is passed
     */

    const shouldIgnore =
      loading.value != null ||
      ignoreFallback.value ||
      (fallbackSrc.value === undefined && fallback.value === undefined); // if the user doesn't provide any kind of fallback we should ignore it
    const { status } = useImage({
      ...props,
      ignoreFallback: shouldIgnore,
    });

    const shared = {
      objectFit: fit.value,
      objectPosition: align.value,
      ...(shouldIgnore ? rest : omit(rest, ['onError', 'onLoad'])),
    };

    const BaseStyles = computed(() => ({
      w: props.size,
      h: props.size,
      htmlWidth: shared.htmlWidth.value,
      htmlHeight: shared.htmlHeight.value,
    }));

    return () => {
      if (status.value !== 'loaded') {
        if (fallback.value) return fallback.value;

        return h(luniand(LNativeImage, { label: 'image__placeholder' }), {
          src: fallbackSrc.value,
          ...BaseStyles.value,
          ...attrs,
        });
      }

      return h(luniand(LNativeImage, { label: 'image' }), {
        src: src.value,
        srcSet: srcSet.value,
        crossOrigin: crossOrigin.value,
        loading: loading.value,
        ...BaseStyles.value,
        ...attrs,
      });
    };
  },
});
