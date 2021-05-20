import React from "react";

const Strike = (props) => {
  return <strike {...props.attributes}>{props.children}</strike>;
};

export default Strike;
