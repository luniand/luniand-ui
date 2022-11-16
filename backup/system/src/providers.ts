import { createContext } from "@uisland-ui/vue-utils"
import { Dict } from "@uisland-ui/utils"
import { SystemStyleObject } from "@uisland-ui/styled-system"
import { ComputedRef } from "@vue/reactivity"

const [StylesProvider, useStyles] = createContext<
  ComputedRef<Dict<SystemStyleObject> | SystemStyleObject>
>({
  name: "StylesContext",
  errorMessage:
    "useStyles: `styles` is undefined. Seems you forgot to provide `StylesProvider(...)` ",
})

export { StylesProvider, useStyles }

export const createStylesContext = (componentName: string) =>
  createContext<ComputedRef<Dict<SystemStyleObject> | SystemStyleObject>>({
    name: `${componentName}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${componentName} />" `,
  })
