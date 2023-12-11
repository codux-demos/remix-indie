import { Form, useActionData } from "@remix-run/react";

import styles from "./notes-new.module.css";
import type { action } from "./route";

export function NotesNew() {
  const actionData = useActionData<typeof action>();
  const errorTitle = actionData?.errors.title;

  return (
    <Form method="post" className={styles.root}>
      <div>
        <label className={styles.label}>
          <span>Title: </span>
          <input
            name="title"
            aria-invalid={errorTitle ? true : undefined}
            aria-errormessage={errorTitle ? "title-error" : undefined}
            className={styles.input}
          />
        </label>
        {errorTitle ? (
          <div className={styles.error} id="title-error">
            {errorTitle}
          </div>
        ) : null}
      </div>
      <div>
        <label className={styles.label}>
          <span>Body: </span>
          <textarea className={styles.input} rows={8} />
        </label>
      </div>
      <div className={styles["button-row"]}>
        <button type="submit" className="button-action">
          Save
        </button>
      </div>
    </Form>
  );
}
