import React from "react";

const Italic = (props) => {
  return <em {...props.attributes}>{props.children}</em>;
};

export default Italic;
