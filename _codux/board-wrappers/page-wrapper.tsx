import { createRemixStub } from "@remix-run/testing";

import { getRouter } from "./full-router";

export function PageWrapper(props: { path: string }) {
  const Router = createRemixStub(getRouter());

  return (
    <div>
      <Router initialEntries={[props.path]} />
    </div>
  );
}
