import React from "react";

const product = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{pageContext.title}</h1>
      <img
        src={pageContext.images[0].originalSrc}
        alt="pic"
        width="300px"
        height="300px"
      />
      <p>{pageContext.description}</p>
    </div>
  );
};

export default product;
