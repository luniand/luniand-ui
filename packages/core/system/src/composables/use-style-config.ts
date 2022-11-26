import { computed, ComputedRef, Ref } from "@vue/runtime-core";
import { SystemStyleObject } from "@luniand-ui/styled-system";
import { ThemingProps } from "../system.types";
import { filterUndefined, get, mergeWith, runIfFn } from "@luniand-ui/utils";
import { useLuniand } from "./use-luniand";
// import type { Theme } from "@luniand-ui/theme";
type Theme = any; // TODO: replace back lib theme

export function useStyleConfig<Component extends keyof Theme["components"]>(
  themeKey: Component,
  themingProps: ThemingProps,
  options: { isMultiPart: true }
): ComputedRef<Record<string, SystemStyleObject>>;

export function useStyleConfig<Component extends keyof Theme["components"]>(
  themeKey: Component,
  themingProps: Ref<ThemingProps>,
  options: { isMultiPart: true }
): ComputedRef<Record<string, SystemStyleObject>>;

export function useStyleConfig<Component extends keyof Theme["components"]>(
  themeKey: Component,
  themingProps?: ThemingProps,
  options?: { isMultiPart?: boolean }
): ComputedRef<SystemStyleObject>;

export function useStyleConfig<Component extends keyof Theme["components"]>(
  themeKey: Component,
  themingProps?: Ref<ThemingProps>,
  options?: { isMultiPart?: boolean }
): ComputedRef<SystemStyleObject>;

export function useStyleConfig<Component extends keyof Theme["components"]>(
  themeKey: Component,
  themingProps: any,
  options: any = {}
) {
  return computed(() => {
    const { styleConfig: styleConfigProp, ...rest } =
      themingProps.value || themingProps;
    const { theme, colorMode } = useLuniand();
    // @ts-ignore
    const themeStyleConfig = get(theme, `components.${themeKey}`);

    const styleConfig = styleConfigProp || themeStyleConfig;

    const mergedProps = mergeWith(
      { theme: theme, colorMode: colorMode.value },
      styleConfig?.defaultProps ?? {},
      filterUndefined(rest)
    );

    const baseStyles = runIfFn(styleConfig?.baseStyle ?? {}, mergedProps);
    const variants = runIfFn(
      styleConfig?.variants?.[mergedProps.variant] ?? {},
      mergedProps
    );

    const sizes = runIfFn(
      styleConfig?.sizes?.[mergedProps.size] ?? {},
      mergedProps
    );

    type ComponentStyles =
      | SystemStyleObject
      | Record<string, SystemStyleObject>;
    const styles = mergeWith(
      {},
      baseStyles,
      sizes,
      variants
    ) as ComponentStyles;

    if (options.isMultiPart && styleConfig?.parts) {
      styleConfig?.parts?.forEach((part: string) => {
        // @ts-ignore
        styles[part] = styles[part] ?? {};
      });
    }

    return styles as Theme["components"][Component];
  });
}

export function useMultiStyleConfig<
  Component extends keyof Theme["components"]
>(themeKey: Component, themingProps: any) {
  return useStyleConfig(themeKey, themingProps, { isMultiPart: true });
}
