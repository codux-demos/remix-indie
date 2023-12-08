import { createBoard } from "@wixc3/react-board";

import { PageWrapper } from "_codux/board-wrappers/page-wrapper";
import { NotesPage } from "~/routes/notes/comp";

export default createBoard({
  name: "Notes Page",
  Board: () => (
    <PageWrapper>
      <NotesPage />
    </PageWrapper>
  ),
  isSnippet: false,
  environmentProps: {
    canvasWidth: 1024,
  },
});
