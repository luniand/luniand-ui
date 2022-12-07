import {
  luniand,
  ComponentWithProps,
  DeepPartial,
  ResponsiveValue,
  DOMElements,
} from "@luniand-ui/system";
import { h, defineComponent, PropType, computed } from "vue";
import { SNAO } from "@luniand-ui/utils";
import { UGrid, GridProps } from "./grid";
import { isNull, isNumber, mapResponsive } from "@luniand-ui/utils";

interface SimpleGridOptions {
  /**
   * The width at which child elements will break into columns. Pass a number for pixel values or a string for any other valid CSS length.
   */
  minChildWidth?: GridProps["minWidth"];
  /**
   * The number of columns
   */
  columns?: ResponsiveValue<number>;
  /**
   * The gap between the grid items
   */
  spacing?: GridProps["gridGap"];
  /**
   * The column gap between the grid items
   */
  spacingX?: GridProps["gridGap"];
  /**
   * The row gap between the grid items
   */
  spacingY?: GridProps["gridGap"];
}

export interface SimpleGridProps extends GridProps, SimpleGridOptions {}

/**
 * SimpleGrid
 *
 * Vue component make that providers a simpler interface, and
 * make its easy to create responsive grid layouts.
 *
 * @see Docs https://vue.luniand-ui.com/docs/layout/simple-grid
 */
export const USimpleGrid: ComponentWithProps<DeepPartial<SimpleGridProps>> =
  defineComponent({
    name: "USimpleGrid",
    props: {
      as: {
        type: [Object, String] as PropType<DOMElements>,
        default: "ul",
      },
      minChildWidth: SNAO as PropType<SimpleGridProps["minWidth"]>,
      columns: SNAO as PropType<SimpleGridProps["columns"]>,
      spacing: SNAO as PropType<SimpleGridProps["gridGap"]>,
      spacingX: SNAO as PropType<SimpleGridProps["gridGap"]>,
      spacingY: SNAO as PropType<SimpleGridProps["gridGap"]>,
    },
    setup(props, { slots, attrs }) {
      const templateColumns = computed(() =>
        props.minChildWidth
          ? widthToColumns(props.minChildWidth)
          : countToColumns(props.columns)
      );

      return () =>
        h(
          luniand(UGrid, {
            as: props.as,
            __label: "simple-grid",
            gap: props.spacing,
            columnGap: props.spacingX,
            rowGap: props.spacingY,
            templateColumns: templateColumns.value,
            ...attrs,
          }),
          {},
          slots
        );
    },
  });

function toPx(n: string | number) {
  return isNumber(n) ? `${n}px` : n;
}

function widthToColumns(width: any) {
  return mapResponsive(width, (value) =>
    isNull(value) ? null : `repeat(auto-fit, minmax(${toPx(value)}, 1fr))`
  );
}

function countToColumns(count: any) {
  return mapResponsive(count, (value) =>
    isNull(value) ? null : `repeat(${value}, minmax(0, 1fr))`
  );
}
