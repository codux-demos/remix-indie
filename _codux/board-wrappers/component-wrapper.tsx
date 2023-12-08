import { createRemixStub } from "@remix-run/testing";
import { ReactNode } from "react";

export function ComponentWrapper(props: { children: ReactNode }) {
  const Router = createRemixStub([
    {
      id: "root",
      Component: () => props.children,
      path: "/",
    },
  ]);

  return (
    <div>
      <Router />
    </div>
  );
}
