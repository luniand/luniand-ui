import { useTheme } from "@luniand-ui/system";
import { isObject } from "@luniand-ui/utils";
import { useMediaQuery } from "./use-media-query";

export type UseBreakpointOptions = {
  ssr?: boolean;
  fallback?: string;
};

/**
 * React hook used to get the current responsive media breakpoint.
 *
 * For SSR, you can use a package like [is-mobile](https://github.com/kaimallea/isMobile)
 * to get the default breakpoint value from the user-agent.
 *
 * TODO: check something went wrong on type of variable
 */
export function useBreakpoint(arg?: string | UseBreakpointOptions) {
  const opts = isObject(arg) ? arg : { fallback: arg ?? "base" };
  const theme = useTheme();

  const breakpoints = theme.__breakpoints!.details.map(
    // @ts-ignore
    ({ minMaxQuery, breakpoint }) => ({
      breakpoint,
      query: minMaxQuery.replace("@media screen and ", ""),
    })
  );

  // @ts-ignore
  const fallback = breakpoints.map((bp) => bp.breakpoint === opts.fallback);
  const values = useMediaQuery(
    // @ts-ignore
    breakpoints.map((bp) => bp.query),
    // @ts-ignore
    { fallback, ssr: opts.ssr }
  );

  const index = values.findIndex((value) => value == true);
  return breakpoints[index]?.breakpoint ?? opts.fallback;
}
