const path = require("path")
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
        allShopifyProduct(sort: { fields: [title] }) {
            edges {
              node {
                title
                images {
                  originalSrc
                }
                shopifyId
                description
                availableForSale
                priceRange {
                  maxVariantPrice {
                    amount
                  }
                  minVariantPrice {
                    amount
                  }
                }
              }
            }
          }
    }
  `)
  console.log(JSON.stringify(result))
  const products = result.data.allShopifyProduct.edges

  products.forEach(({node}) => {
    createPage({
      path: node.shopifyId,
      component: path.resolve(`src/template/product.jsx`),
      context: node,
    })
  })
  
  
}