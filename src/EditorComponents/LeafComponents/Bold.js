import React from "react";

const Bold = (props) => {
  return <strong {...props.attributes}>{props.children}</strong>;
};

export default Bold;
