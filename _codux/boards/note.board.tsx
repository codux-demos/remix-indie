import { createBoard } from "@wixc3/react-board";

import { ComponentWrapper } from "_codux/board-wrappers/component-wrapper";

import { NoteDetailsPage } from "../../app/routes/notes.$noteid/comp";

export default createBoard({
  name: "note",
  Board: () => (
    <ComponentWrapper
      data={{
        note: {
          id: "1",
          title: "aaa",
          body: "this is me pretty note",
        },
      }}
    >
      <NoteDetailsPage />
    </ComponentWrapper>
  ),
  isSnippet: false,
});
