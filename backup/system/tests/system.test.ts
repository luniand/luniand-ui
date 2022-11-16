import { render, screen } from "../../test-utils/src"
import { defineComponent, h } from "vue"
import { uisland } from "../src"

describe("uisland() works", () => {
  const renderComponent = (options?: Record<string, any>) =>
    render({
      components: {
        uisland: defineComponent({
          setup(_, { slots }) {
            return () => h(uisland("span", {}), {}, slots)
          },
        }),
      },
      template: `<uisland>child-element</uisland>`,
      ...options,
    })

  it("should be render properly", () => {
    const { asFragment } = renderComponent()
    expect(asFragment()).toMatchSnapshot()
  })

  it("should be render default slot", () => {
    renderComponent()
    expect(screen.getByText("child-element")).toBeInTheDocument()
  })
})

describe("as prop", () => {
  const FakeRouterLink = defineComponent({
    props: ["to"],
    setup(props, { slots }) {
      return () => h("a", { href: props.to }, { default: () => slots })
    },
  })
  it('render dom elements like as="h1"', () => {
    const { container, asFragment } = render({
      components: {
        uisland: defineComponent({
          setup(_, { slots }) {
            return () => h(uisland("h1", {}), {}, slots)
          },
        }),
      },
      template: `<uisland>as h1</uisland>`,
    })

    expect(asFragment()).toMatchSnapshot()
    expect(container.querySelector("h1")).toBeInTheDocument()
  })

  it('resolve global vue components like as="router-link"', () => {
    const { container, asFragment } = render(
      {
        components: {
          uisland: defineComponent({
            props: ["as"],
            setup(props, { slots, attrs }) {
              return () => h(uisland(props.as), {}, slots)
            },
          }),
        },
        template: `<uisland as="fake-router-link" to="https://google.com">as router-link</uisland>`,
      },
      // testing-library options
      {
        global: {
          components: {
            FakeRouterLink,
          },
        },
      }
    )

    expect(container.querySelector("a")).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('render Vue Component like :as="RouterLink"', () => {
    const { container, asFragment } = render({
      components: {
        uisland: defineComponent({
          setup(_, { slots }) {
            return () =>
              h(
                uisland(FakeRouterLink, { to: "https://vue.uisland-ui.com/" }),
                {},
                slots
              )
          },
        }),
      },
      template: `<uisland>as RouterLink</uisland>`,
    })

    expect(container.querySelector("a")).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})
