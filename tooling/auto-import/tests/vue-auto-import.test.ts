import { componentResolver } from "../src"

it("should resolve uniland components with import name and path", () => {
  const components = [
    "CCloseButton",
    "CBox",
    "CPortal",
    "CHStack",
    "CVStack",
    "CBox",
    "CCircle",
    "USquare",
    "CKbd",
  ]

  const path = "@uniland-ui/vue-next"

  components.forEach((templateComponent: string) => {
    expect(componentResolver(templateComponent)).toEqual({
      importName: templateComponent,
      path,
    })
  })
})
