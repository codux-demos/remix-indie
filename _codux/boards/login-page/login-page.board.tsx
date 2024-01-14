import { createBoard } from "@wixc3/react-board";

import { PageWrapper } from "../../board-wrappers/page-wrapper";

export default createBoard({
  name: "LoginPage",
  Board: () => <PageWrapper path="/login2" />,
  isSnippet: true,
});
