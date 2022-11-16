import * as UislandComponents from "@uisland-ui/vue-next"

export const componentResolver = (name: string) => {
  if (name in UislandComponents) {
    return {
      importName: name,
      path: `@uisland-ui/vue-next`,
    }
  }
}
