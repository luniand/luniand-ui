---
to: packages/<%=h.changeCase.paramCase(name)%>/package.json
---

{
  "name": "<%= '@uisland-ui/' + h.changeCase.paramCase(name)%>",
  "version": "0.0.0-alpha.0",
  "main": "<%= 'dist/uisland-ui-' + h.changeCase.paramCase(name) + '.cjs.js' %>",
  "module": "<%= 'dist/uisland-ui-' + h.changeCase.paramCase(name) + '.esm.js' %>",
  "files": [
    "dist"
  ],
  "exports": {
    ".": {
      "require": "<%= './dist/uisland-ui-' + h.changeCase.paramCase(name) + '.cjs.js' %>",
      "default": "<%= './dist/uisland-ui-' + h.changeCase.paramCase(name) + '.esm.js' %>"
    }
  },
  "description": "<%= 'Uisland UI Vue | ' + h.changeCase.pascalCase(name) + ' module'%>",
  "repository": "https://github.com/uisland-ui/uisland-ui-vue-next.git",
  "author": "Albert Tran trantoan.fox.97@gmail.com",
  "license": "MIT",
  "scripts": {
    "build": "rimraf ./dist && concurrently yarn:build:*",
    "build:esm": "cross-env BABEL_ENV=esm babel src --root-mode upward --extensions .ts,.tsx -d dist/esm --source-maps",
    "build:cjs": "cross-env BABEL_ENV=cjs babel src --root-mode upward --extensions .ts,.tsx -d dist/cjs --source-maps",
    "watch": "concurrently yarn:watch:*",
    "watch:esm": "cross-env BABEL_ENV=esm babel src --root-mode upward --extensions .ts,.tsx -d dist/esm --source-maps --watch",
    "watch:cjs": "cross-env BABEL_ENV=cjs babel src --root-mode upward --extensions .ts,.tsx -d dist/cjs --source-maps --watch",
    "watch:types": "cross-env tsc --emitDeclarationOnly --declaration --declarationDir dist/types --watch --incremental"
  }
}
