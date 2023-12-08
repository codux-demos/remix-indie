import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import { getNoteListItems } from "~/models/note.server";
import { requireUserId } from "~/session.server";

import { NotesPage } from "./comp";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return json({ noteListItems });
};

export default NotesPage;
