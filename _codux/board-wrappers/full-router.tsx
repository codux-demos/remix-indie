import { createRemixStub } from "@remix-run/testing";

import { Home } from "~/routes/_index/comp";
import { LoginPage } from "~/routes/login/comp";

import { NotesPage } from "../../app/routes/notes/comp";
import {
  NoteDetailsPage,
  ErrorComp,
} from "../../app/routes/notes.$noteId/comp";
import EmptyNotes from "../../app/routes/notes._index";
import { NotesNew } from "../../app/routes/notes.new/notes-new";

export function getRouter(): Parameters<typeof createRemixStub>[0] {
  return [
    {
      id: "root",
      path: "/",
      loader: () => ({
        user: { email: "aaa@gmail.com" },
      }),
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "/notes",
          Component: NotesPage,
          loader: () => ({ noteListItems: [{ id: "1", title: "aaa" }] }),

          children: [
            {
              path: "/notes/:noteId",
              Component: NoteDetailsPage,
              hasErrorBoundary: true,
              ErrorBoundary: ErrorComp,
              loader: () => ({
                note: {
                  id: "1",
                  title: "aaa",
                  body: "this is me pretty note",
                },
              }),
            },
            {
              index: true,
              Component: EmptyNotes,
            },
            {
              path: "new",
              Component: NotesNew,
            },
          ],
        },
        {
          path: "/login",
          Component: LoginPage,
          loader: () => ({}),
        },
      ],
    },
  ];
}
