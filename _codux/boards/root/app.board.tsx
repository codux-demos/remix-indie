import { createBoard } from "@wixc3/react-board";

import App from "../../../app/root";

export default createBoard({
  name: "App",
  Board: () => <App />,
  isSnippet: true,
});
