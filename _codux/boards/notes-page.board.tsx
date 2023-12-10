import { createBoard } from "@wixc3/react-board";

import { PageWrapper } from "_codux/board-wrappers/page-wrapper";

export default createBoard({
  name: "Notes Page",
  Board: () => <PageWrapper path="/notes" />,
  isSnippet: false,
  environmentProps: {
    canvasWidth: 1024,
  },
});
