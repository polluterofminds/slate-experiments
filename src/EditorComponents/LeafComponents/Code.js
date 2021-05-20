import React from "react";

const Code = (props) => {
  return (
    <code style={{ background: "#eee", padding: 2 }} {...props.attributes}>
      {props.children}
    </code>
  );
};

export default Code;
