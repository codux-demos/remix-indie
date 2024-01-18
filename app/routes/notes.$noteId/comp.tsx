import {
  Form,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import cx from "classnames";

import styles from "./comp.module.css";
import type { loader } from "./route";

export function NoteDetailsPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h3 className={styles.title}>{data.note.title}</h3>
      <p className={styles.text}>{data.note.body}</p>
      <hr />
      <Form method="post">
        <button type="submit" className={cx(styles.delete, "button-action")}>
          Delete
        </button>
      </Form>
    </div>
  );
}

export function ErrorComp() {
  const error = useRouteError();

  if (error instanceof Error) {
    return <div>An unexpected error occurred: {error.message}</div>;
  }

  if (!isRouteErrorResponse(error)) {
    return <h1>Unknown Error</h1>;
  }

  if (error.status === 404) {
    return <div>Note not found</div>;
  }

  return <div>An unexpected error occurred: {error.statusText}</div>;
}
