---
to: packages/<%=h.changeCase.paramCase(name)%>/package.json
---

{
  "name": "<%= '@uniland-ui/' + h.changeCase.paramCase(name)%>",
  "description": "<%= 'Uniland UI Vue | ' + h.changeCase.sentence(description) + ' component'%>",
  "version": "0.0.0-alpha.0",
  "main": "<%= 'dist/uniland-ui-' + h.changeCase.paramCase(name) + '.cjs.js' %>",
  "module": "<%= 'dist/uniland-ui-' + h.changeCase.paramCase(name) + '.esm.js' %>",
  "author": "Albert Tran <trantoan.fox.97@gmail.com>",
  "homepage": "https://github.com/uniland-ui/uniland-ui-vue-next#readme",
  "license": "MIT",
  "files": [
    "dist"
  ],
  "exports": {
    ".": {
      "require": "<%= './dist/uniland-ui-' + h.changeCase.paramCase(name) + '.cjs.js' %>",
      "default": "<%= './dist/uniland-ui-' + h.changeCase.paramCase(name) + '.esm.js' %>"
    }
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/uniland-ui/uniland-ui-vue-next.git"
  },
  "bugs": {
    "url": "https://github.com/uniland-ui/uniland-ui-vue-next/issues"
  },
  "sideEffects": false,
    "scripts": {
    "clean": "rimraf dist"
  },
  "dependencies": {
    "@uniland-ui/system": "0.1.0-alpha.5"
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
