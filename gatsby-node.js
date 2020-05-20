exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /mapbox-gl/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }

  // Create one page per markdown file
  exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const backlaneTemplate = require.resolve(`./src/templates/backlane-template.js`)
    const result = await graphql(`
      {
        allMarkdownRemark(
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: backlaneTemplate,
        context: {
          // additional data can be passed via context
          slug: node.fields.slug,
        },
      })
    })
  }