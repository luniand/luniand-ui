<script>
import { uniland } from '@uniland-ui/vue-system'
import { defineComponent, h } from 'vue'
import { RouterLink } from 'vue-router'

const Stories = defineComponent({
  props: ['stories'],
  inheritAttrs: false,
  setup(props) {
    return () => {
      const unilandLogo = h(
        uniland(RouterLink),
        {
          to: '/',
          _hover: { color: 'blue.400' },
        },
        () =>
          h(uniland.img, {
            w: '120px',
            mt: 4,
            src:
              'https://res.cloudinary.com/xtellar/image/upload/v1584242872/uniland-ui/uniland-ui-vue.png',
          })
      )

      const storyTitle = (story) =>
        h(uniland.h3, { mt: 2, mb: 0, fontWeight: 'bold' }, () => story.name)

      const storyItem = (story) => {
        if (story.path === '/') {
          return unilandLogo
        } else
          return h(
            uniland(RouterLink),
            {
              to: story.path,
              _hover: { color: 'blue.400' },
            },
            () => story.name
          )
      }

      const liItem = (story) =>
        h(
          uniland.li,
          {
            pl: 2,
            fontSize: '0.8rem',
            key: story.path,
          },
          () => [
            story.children ? storyTitle(story) : storyItem(story),
            story.children && h(Stories, { stories: story.children }),
          ]
        )

      return h(uniland.nav, { overflowY: 'scroll', w: '250px' }, () =>
        h(
          uniland.ul,
          {
            p: 0,
            m: 0,
            w: '175px',
            listStyleType: 'none',
          },
          () => props.stories.map(liItem)
        )
      )
    }
  },
})
export default Stories
</script>