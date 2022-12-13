import { h, defineComponent, PropType, computed, ComputedRef } from "vue";
import {
  luniand,
  ThemingProps,
  useMultiStyleConfig,
  createStylesContext,
  DOMElements,
  SystemStyleObject,
} from "@luniand-ui/system";

import { createContext, getValidChildren } from "@luniand-ui/utils";
import { LCheckIcon, LErrorIcon, LInfoIcon, LWarningIcon } from "./icons";

const STATUSES = {
  info: {
    colorScheme: "blue",
    icon: LInfoIcon,
  },
  success: {
    colorScheme: "green",
    icon: LCheckIcon,
  },
  warning: {
    colorScheme: "orange",
    icon: LWarningIcon,
  },
  error: {
    colorScheme: "red",
    icon: LErrorIcon,
  },
  loading: { icon: LInfoIcon, colorScheme: "blue" },
};

const [StylesProvider, useStyles] = createStylesContext("LAlert");
type AlertStatus = keyof typeof STATUSES;
export type AlertVariant = "solid" | "subtle" | "left-accent" | "top-accent";

interface AlertContext {
  status: ComputedRef<AlertStatus>;
}

const [AlertProvider, useAlertContext] = createContext<AlertContext>({
  name: "AlertContext",
  errorMessage:
    "useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Lalert />`",
});

export const LAlert = defineComponent({
  name: "LAlert",
  props: {
    as: {
      type: [String, Object] as PropType<DOMElements>,
      default: "div",
    },
    status: {
      type: [String] as PropType<AlertStatus>,
      default: "info",
    },
    colorScheme: {
      type: [String] as PropType<string>,
    },
    styleConfig: {
      type: [Object] as PropType<any>,
    },
    variant: {
      type: [String] as PropType<AlertVariant>,
      default: "solid",
    },
  },
  setup(props, { slots, attrs }) {
    const colorScheme = computed<string>(
      () => props.colorScheme || STATUSES[props?.status]?.colorScheme
    );

    const themingProps = computed<ThemingProps>(() => ({
      colorScheme: colorScheme.value,
      variant: props.variant,
    }));

    AlertProvider({ status: computed(() => props.status) });
    const styles = useMultiStyleConfig("Alert", themingProps);
    StylesProvider(styles);

    const alertStyles = computed<SystemStyleObject>(() => ({
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ...styles.value.container,
    }));

    return () =>
      h(
        luniand.div,
        {
          role: "alert",
          __label: "alert",
          __css: alertStyles.value,
          ...attrs,
        },
        () => getValidChildren(slots)
      );
  },
});

export const LAlertTitle = defineComponent({
  name: "LAlertTitle",
  setup(_, { attrs, slots }) {
    const styles = useStyles();
    return () =>
      h(
        luniand.div,
        {
          __label: "alert__title",
          // TODO: add text into type of useStyleConfig
          // @ts-ignore
          __css: styles.value?.title,
          ...attrs,
        },
        slots
      );
  },
});

export const LAlertDescription = defineComponent({
  name: "LAlertDescription",
  setup(_, { attrs, slots }) {
    const styles = useStyles();
    return () => {
      return h(
        luniand.div,
        {
          __label: "alert__description",
          // TODO: add text into type of useStyleConfig
          // @ts-ignore
          __css: styles.value?.description,
          ...attrs,
        },
        () => getValidChildren(slots)
      );
    };
  },
});

export const LAlertIcon = defineComponent({
  name: "LAlertIcon",
  setup(_, { attrs, slots }) {
    const styles = useStyles();
    const { status } = useAlertContext();
    const { icon: BaseIcon } = STATUSES[status.value];
  
    const css = computed(() =>
      // TODO: add text into type of useStyleConfig
      // @ts-ignore
      status.value === "loading" ? styles.value?.spinner : styles.value?.icon
    );

    const validChildren = getValidChildren(slots);

    return () =>
      h(
        luniand.span,
        {
          display: "inherit",
          __label: "alert__icon",
          ...attrs,
          // TODO: add text into type of useStyleConfig
          // @ts-ignore
          __css: css.value,
        },
        () =>
          validChildren.length ? slots : h(BaseIcon, { h: "100%", w: "100%" })
      );
  },
});
