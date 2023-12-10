import { createRemixStub } from "@remix-run/testing";
import { ReactNode } from "react";

export function ComponentWrapper(props: {
  children: ReactNode;
  data?: object;
}) {
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
          Component: () => props.children,
          path: "/",
          loader: () => props.data || null,
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
