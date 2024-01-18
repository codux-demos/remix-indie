import type { MetaFunction } from "@remix-run/node";

import { Home } from "./comp";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default Home;
