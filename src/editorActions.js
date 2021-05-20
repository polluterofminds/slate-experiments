import { CustomEditor } from "./CustomEditor";
import isHotkey from "is-hotkey";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+shift+x": "strike",
  "`": "code"
};

export const handleKeyDown = (event, editor) => {
  for (const hotkey in HOTKEYS) {
    if (isHotkey(hotkey, event)) {
      event.preventDefault();
      const mark = HOTKEYS[hotkey];
      CustomEditor.toggleMark(editor, mark);
    }
  }
};
