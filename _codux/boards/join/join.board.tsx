import { createBoard } from "@wixc3/react-board";

import { Join } from "../../../app/routes/join2/comp";
import { ComponentWrapper } from "../../board-wrappers/component-wrapper";

export default createBoard({
  name: "Join",
  Board: () => (
    <ComponentWrapper>
      <Join />
    </ComponentWrapper>
  ),
  isSnippet: false,
  environmentProps: {
    canvasHeight: 134,
  },
});
