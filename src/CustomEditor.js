import { Transforms, Editor, Element as SlateElement } from "slate";

const LIST_TYPES = ["numbered-list", "bulleted-list"];

export const CustomEditor = {
  toggleMark(editor, format) {
    const isActive = this.isMarkActive(editor, format);

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  },

  toggleBlock(editor, format) {
    const isActive = this.isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, {
      match: (n) =>
        LIST_TYPES.includes(
          !Editor.isEditor(n) && SlateElement.isElement(n) && n.type
        ),
      split: true
    });
    const newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format
    };

    Transforms.setNodes(editor, newProperties);

    if (!isActive && isList) {
      const block = { type: format, children: [] };
      Transforms.wrapNodes(editor, block);
    }
  },

  isMarkActive(editor, format) {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  },

  isBlockActive(editor, format) {
    const [match] = Editor.nodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format
    });

    return !!match;
  },

  unwrapNodes(editor) {}
};
