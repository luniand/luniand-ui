import {
    ImgHTMLAttributes,
    ref,
    getCurrentInstance,
    computed,
    h,
    HTMLAttributes,
    onMounted,
  } from 'vue';
  
  declare module 'vue' {
    interface ImgHTMLAttributes extends HTMLAttributes {
      loading?: 'lazy' | 'eager';
    }
  }
  
  export interface LUseImageProps {
    /**
     * The image `src` attribute
     */
    src?: string;
    /**
     * The image `srcset` attribute
     */
    srcSet?: string;
    /**
     * The image `sizes` attribute
     */
    sizes?: string;
    /**
     * A callback for when the image `src` has been loaded
     */
    onLoad?: ImgHTMLAttributes['onLoad'];
    /**
     * A callback for when there was an error loading the image `src`
     */
    onError?: ImgHTMLAttributes['onError'];
    /**
     * If `true`, opt out of the `fallbackSrc` logic and use as `img`
     */
    ignoreFallback?: boolean;
    /**
     * The key used to set the crossOrigin on the HTMLImageElement into which the image will be loaded.
     * This tells the browser to request cross-origin access when trying to download the image data.
     */
    crossOrigin?: ImgHTMLAttributes['crossorigin'];
    loading?: ImgHTMLAttributes['loading'];
  }
  
  type Status = 'loading' | 'failed' | 'pending' | 'loaded';
  
  export function useImage(props: LUseImageProps) {
    const { src, srcSet, crossOrigin, sizes, ignoreFallback } = props;
  
    const ctx = getCurrentInstance();
    const status = ref<Status>('pending');
    const image = ref<HTMLImageElement | null>();
  
    const loadImage = () => {
      if (src) {
        image.value = new Image();
        image.value.src = src;
        if (crossOrigin) image.value.crossOrigin = crossOrigin;
        if (srcSet) image.value.srcset = srcSet;
        if (sizes) image.value.sizes = sizes;
  
        image.value.onload = (event) => {
          status.value = 'loaded';
          ctx?.emit('onLoad', event);
        };
        image.value.onerror = (error) => {
          status.value = 'failed';
          ctx?.emit('onError', error);
        };
      } else return false;
    };
  
    onMounted(() => loadImage());
  
    const statusRef = computed(() =>
      ignoreFallback && status.value ? 'loaded' : status.value
    );
  
    return { status: statusRef, image };
  }
  
  export type UseImageReturn = ReturnType<typeof useImage>;
  