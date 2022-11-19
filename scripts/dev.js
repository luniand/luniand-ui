const UnilandComponents = require("@uniland-ui/vue")
const { writeFileSync, existsSync, mkdirSync } = require("fs")
const { resolve } = require("path")

const BUILD_DIR = resolve(__dirname, "../build/")

async function main() {
  const components = {}
  for (const prop in UnilandComponents) {
    if (prop.startsWith("C")) {
      components[prop] = UnilandComponents[prop]
    }
  }

  if (!existsSync(BUILD_DIR)) {
    mkdirSync(BUILD_DIR)
  }

  writeFileSync(
    resolve(__dirname, "../build/components.json"),
    JSON.stringify(components, null, 2),
    { encoding: "utf8" }
  )
}

main()
  .then(() => console.log("Successfully generated components build"))
  .catch((error) => console.error("Error generating components", error))
