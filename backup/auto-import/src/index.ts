import * as UnilandComponents from "@uniland-ui/vue-next"

export const componentResolver = (name: string) => {
  if (name in UnilandComponents) {
    return {
      importName: name,
      path: `@uniland-ui/vue-next`,
    }
  }
}
