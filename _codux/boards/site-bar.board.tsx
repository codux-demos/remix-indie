import { createBoard } from "@wixc3/react-board";

import { SideBar } from "../../app/routes/notes/side-bar";
import { ComponentWrapper } from "../board-wrappers/component-wrapper";

export default createBoard({
  name: "Site Bar",
  Board: () => (
    <ComponentWrapper>
      <SideBar notes={[{ id: "1", title: "aaaaa" }]} />
    </ComponentWrapper>
  ),
  isSnippet: false,
});
