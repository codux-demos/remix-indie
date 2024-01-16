import { createBoard } from "@wixc3/react-board";

import { PageWrapper } from '../../board-wrappers/page-wrapper';

export default createBoard({
    name: "App",
    Board: () => <PageWrapper path="/" />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 648
    }
});
