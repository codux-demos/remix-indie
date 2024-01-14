import { createBoard } from "@wixc3/react-board";

import { Join } from "../../../app/routes/join/comp";
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
        canvasWidth: 448
    }
});
