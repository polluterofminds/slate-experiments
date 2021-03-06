import "./styles.css";
import React, { useEffect, useMemo, useState } from "react";
import { BaseEditor, createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { handleKeyDown } from "./editorActions";
import { useRenderer } from "./useRenderer";

const App = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const { renderElement, renderLeaf } = useRenderer();
  // Add the initial value when setting up our state.
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }]
    }
  ]);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Editable
        placeholder="Write something great"
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={(event) => handleKeyDown(event, editor)}
      />
    </Slate>
  );
};

export default App;
