---
to: packages/<%=h.changeCase.paramCase(name)%>/package.json
---

{
  "name": "<%= '@uisland-ui/' + h.changeCase.paramCase(name)%>",
  "description": "<%= 'Uisland UI Vue | ' + h.changeCase.sentence(description) + ' component'%>",
  "version": "0.0.0-alpha.0",
  "main": "<%= 'dist/uisland-ui-' + h.changeCase.paramCase(name) + '.cjs.js' %>",
  "module": "<%= 'dist/uisland-ui-' + h.changeCase.paramCase(name) + '.esm.js' %>",
  "author": "Albert Tran <trantoan.fox.97@gmail.com>",
  "homepage": "https://github.com/uisland-ui/uisland-ui-vue-next#readme",
  "license": "MIT",
  "files": [
    "dist"
  ],
  "exports": {
    ".": {
      "require": "<%= './dist/uisland-ui-' + h.changeCase.paramCase(name) + '.cjs.js' %>",
      "default": "<%= './dist/uisland-ui-' + h.changeCase.paramCase(name) + '.esm.js' %>"
    }
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/uisland-ui/uisland-ui-vue-next.git"
  },
  "bugs": {
    "url": "https://github.com/uisland-ui/uisland-ui-vue-next/issues"
  },
  "sideEffects": false,
    "scripts": {
    "clean": "rimraf dist"
  },
  "dependencies": {
    "@uisland-ui/vue-system": "0.1.0-alpha.5"
  },
  "devDependencies": {
    "vue": "^3.1.4"
  },
  "peerDependencies": {
    "vue": "^3.1.4"
  },
  "publishConfig": {
    "access": "public"
  }
}
