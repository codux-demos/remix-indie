import { createRemixStub } from "@remix-run/testing";

import Index2 from "~/routes/index2";

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
      Component: Index2,
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
      ],
    },
  ];
}
