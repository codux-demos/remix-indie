import { createBoard } from "@wixc3/react-board";

import { ComponentWrapper } from "_codux/board-wrappers/component-wrapper";

import { NotesNew } from "../../app/routes/notes.new/notes-new";

export default createBoard({
  name: "NotesNew",
  Board: () => (
    <ComponentWrapper
      actionError={{
        title: "some error",
      }}
    >
      <NotesNew />
    </ComponentWrapper>
  ),
  isSnippet: false,
  environmentProps: {
    canvasWidth: 500,
  },
});
