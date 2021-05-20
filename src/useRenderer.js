import React, { useEffect, useMemo, useState, useCallback } from "react";
import Leaf from "./EditorComponents/Leaf";
import BlockElement from "./EditorComponents/BlockElement";

export const useRenderer = () => {
  const renderElement = useCallback((props) => <BlockElement {...props} />, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  return { renderElement, renderLeaf };
};
