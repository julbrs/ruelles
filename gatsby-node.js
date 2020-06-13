const { createFilePath } = require(`gatsby-source-filesystem`)

// manage mapbox wierd production setup
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

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content/backlanes` })
    // compute slug
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    // compute the contain Image field
    createNodeField({
      node,
      name: `containImage`,
      value: node.frontmatter.image !== undefined,
    })

    // compute star
    // TODO
  }
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    `
    type MarkdownRemark implements Node {
      star: Float
      image: File
      frontmatter: Frontmatter
    }`,
    schema.buildObjectType({
      name: "Frontmatter",
      fields: {
        surface: "Int",
        date: {
          type: "String",
          resolve(source, args, context, info) {
            const { date } = source
            if (source.date == null) {
              return "?"
            }
            return date
          },
        },
      },
    }),
  ]
  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    MarkdownRemark: {
      star: {
        // compute the number of stars !
        resolve(source, args, context, info) {
          let star = undefined

          if(source.frontmatter.surface === 'soft') {
            star = 2
          }
          return star;
        },
      },
    },
  }
  createResolvers(resolvers)
}

  exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    // Create one page per markdown file
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

    // Create one page per district file
    const districtTemplate = require.resolve(`./src/templates/district-template.js`)
    const result2 = await graphql(`
      {
        allMarkdownRemark {
          district: group(field:frontmatter___district) {
            fieldValue
            totalCount
          }
        }
      }
    `)
    // Handle errors
    if (result2.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    result2.data.allMarkdownRemark.district.forEach((district) => {
      //console.log(district)
      createPage({
        path: 'district/' + district.fieldValue,
        component: districtTemplate,
        context: {
          // additional data can be passed via context
          district: district.fieldValue,
        },
      })
    })

  }