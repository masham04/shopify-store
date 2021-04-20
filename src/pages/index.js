import * as React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  console.log(data);
  console.log(
    JSON.stringify(data.allShopifyProduct.edges.map((el) => el.node.title))
  );
  return (
    <main>
      <h1>HomePage</h1>
      {data.allShopifyProduct.edges.map(({ node }) => (
        <div>
          <h3>{node.title}</h3>
          <p>{node.priceRange.minVariantPrice.amount}</p>
        </div>
      ))}
    </main>
  );
};

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          shopifyId
          description
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
