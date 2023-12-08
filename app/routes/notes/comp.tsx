import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { useUser } from "~/utils";
import cx from "classnames";

import imgThingy from "../../styles/assets/favicon.png";

import styles from "./comp.module.css";
import type { loader } from "./route";

export function NotesPage() {
  const data = useLoaderData<typeof loader>();
  const user = useUser();

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1>
          <Link to=".">Notes</Link>
        </h1>
        <img src={imgThingy} alt="oops" />
        <p>{user.email}</p>
        <Form action="/logout" method="post">
          <button type="submit" className={styles.logout}>
            Logout
          </button>
        </Form>
      </header>

      <main className={styles.main}>
        <div className={styles.sideBar}>
          <Link to="new" className={cx(styles.link, styles.newNote)}>
            + New Note
          </Link>

          <hr />

          {data.noteListItems.length === 0 ? (
            <p>No notes yet</p>
          ) : (
            <ol>
              {data.noteListItems.map((note) => (
                <li key={note.id}>
                  <NavLink
                    className={({ isActive }) =>
                      cx(styles.link, styles.note, {
                        [styles.noteActive]: isActive,
                      })
                    }
                    to={note.id}
                  >
                    📝 {note.title}
                  </NavLink>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
