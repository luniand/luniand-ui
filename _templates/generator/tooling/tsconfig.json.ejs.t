---
to: tooling/<%=h.changeCase.paramCase(name)%>/tsconfig.json
---

{
  "extends": "../../tsconfig.json",
  "include": ["src", "./index.ts", "./index.ts"]
}