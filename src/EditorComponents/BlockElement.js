import React, { useEffect, useMemo, useState } from "react";

const BlockElement = ({ attributes, children, element }) => {
  switch (element.type) {
    case "code":
      return (
        <pre
          style={{
            background: "#282828",
            padding: 15,
            marginTop: 0,
            marginBottom: 0,
            color: "#eee"
          }}
          {...attributes}
        >
          <code>{children}</code>
        </pre>
      );
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "heading-three":
      return <h3 {...attributes}>{children}</h3>;
    case "heading-four":
      return <h4 {...attributes}>{children}</h4>;
    case "heading-five":
      return <h5 {...attributes}>{children}</h5>;
    case "heading-six":
      return <h6 {...attributes}>{children}</h6>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

export default BlockElement;