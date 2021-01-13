const fetch = require("node-fetch")

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const result = await fetch(
    `https://api.github.com/repos/nicework-company/unhandledexception.club/contributors`
  )
  const resultData = await result.json()
  createNode({
    data: resultData,
    id: `contributors`,
    parent: null,
    children: [],
    internal: {
      type: `Contributors`,
      contentDigest: createContentDigest(resultData),
    },
  })
}
