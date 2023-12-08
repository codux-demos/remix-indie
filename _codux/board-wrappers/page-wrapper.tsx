import { createRemixStub } from "@remix-run/testing";
import { ReactNode } from "react";

export function PageWrapper(props: { children: ReactNode }) {
  const Router = createRemixStub([
    {
      id: "root",
      loader: () => {
        return {
          user: { email: "aaa@gmail.com" },
        };
      },
      children: [
        {
          path: "/",
          Component: () => props.children,
          loader: () => ({ noteListItems: [{ id: "1", title: "aaa" }] }),
        },
      ],
    },
  ]);

  return (
    <div>
      <Router />
    </div>
  );
}
