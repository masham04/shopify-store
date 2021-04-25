import * as React from "react";
import "./index.css";
import { graphql, Link } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <main>
      <h3 style={{ textAlign: "center", textTransform: "uppercase" }}>
        Shopify Store
      </h3>
      <h2>Featured Products</h2>
      {data.allShopifyProduct.edges.map(({ node }, ind) => (
        <Link to={`/${node.shopifyId}`} className="card" key={ind}>
          <h3>{node.title}</h3>
          <h5>{node.description}</h5>
          <p>Price: {node.priceRange.minVariantPrice.amount}</p>
        </Link>
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
