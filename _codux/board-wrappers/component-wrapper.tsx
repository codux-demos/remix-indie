import { createRemixStub } from "@remix-run/testing";
import { ReactNode } from "react";

export function ComponentWrapper(props: {
  children: ReactNode;
  data?: object;
  actionError?: { title?: string };
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
          action: () =>
            props.actionError
              ? { errors: props.actionError, status: 400 }
              : null,
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
