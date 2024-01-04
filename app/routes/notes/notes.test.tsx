import { createRemixStub } from "@remix-run/testing";
import { render, screen } from "@testing-library/react";

import {
  createUser,
  deleteUserByEmail,
  getUserByEmail,
} from "~/models/user.server";
import { createUserSession } from "~/session.server";

import Notes, { loader } from "./route";

test("render fake notes", async () => {
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
          Component: Notes,
          loader: () => ({ noteListItems: [{ id: "1", title: "aaa" }] }),
        },
      ],
    },
  ]);

  render(<Router />);

  await screen.findAllByRole("link");

  expect(screen.getAllByRole("link").length).toBe(3);
});

test("render real notes (which are empty)", async () => {
  const email = "aaa@gmail.com";

  const user = await createUser(email, "myreallystrongpassword");

  const response = await createUserSession({
    request: new Request("test://test"),
    userId: user.id,
    remember: false,
    redirectTo: "/",
  });

  const cookieValue = response.headers.get("Set-Cookie");

  const Router = createRemixStub(
    [
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
            Component: Notes,
            loader: (args) => {
              args.request.headers.set("Cookie", cookieValue || "");
              return loader(args);
            },
          },
        ],
      },
    ],
    { request: { headers: { Cookie: cookieValue } } },
  );
  render(<Router />);

  await screen.findAllByRole("link");

  expect(screen.getAllByRole("link").length).toBe(2);
});

test("render real notes (existing user)", async () => {
  const user = await getUserByEmail("rachel@remix.run");

  if (!user) {
    throw "did not find Rachel";
  }
  const response = await createUserSession({
    request: new Request("test://test"),
    userId: user.id,
    remember: false,
    redirectTo: "/",
  });

  const cookieValue = response.headers.get("Set-Cookie");

  const Router = createRemixStub(
    [
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
            Component: Notes,
            loader: (args) => {
              args.request.headers.set("Cookie", cookieValue || "");
              return loader(args);
            },
          },
        ],
      },
    ],
    { request: { headers: { Cookie: cookieValue } } },
  );
  render(<Router />);

  await screen.findAllByRole("link");

  expect(screen.getAllByRole("link").length).toBe(4);
});
