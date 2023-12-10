import { createRemixStub } from "@remix-run/testing";

import { NotesPage } from "../../app/routes/notes/comp";
import {
  NoteDetailsPage,
  ErrorComp,
} from "../../app/routes/notes.$noteid/comp";

export function getRouter(): Parameters<typeof createRemixStub>[0] {
  return [
    {
      id: "root",
      path: "/",
      loader: () => {
        return {
          user: { email: "aaa@gmail.com" },
        };
      },
      children: [
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
                id: "1",
                title: "aaa",
                body: "this is me pretty note",
              }),
            },
          ],
        },
      ],
    },
  ];
}
