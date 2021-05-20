import React from "react";
import { Bold, Code, Underline } from "./LeafComponents/index";
import Italic from "./LeafComponents/Italic";
import Strike from "./LeafComponents/Strike";

const Leaf = (props) => {
  const { leaf } = props;
  if (leaf.bold) {
    return <Bold {...props} />;
  }

  if (leaf.code) {
    return <Code {...props} />;
  }

  if (leaf.underline) {
    return <Underline {...props} />;
  }

  if (leaf.italic) {
    return <Italic {...props} />;
  }

  if (leaf.strike) {
    return <Strike {...props} />;
  }

  return <span {...props.attributes}>{props.children}</span>;
};

export default Leaf;
