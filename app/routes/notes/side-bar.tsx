import { Link, NavLink } from "@remix-run/react";
import cx from "classnames";

import { NotesListItem } from "~/models/note.server";

import styles from "./side-bar.module.css";

export function SideBar(props: { notes: NotesListItem[]; className?: string }) {
  return (
    <div className={cx(styles.root, props.className)}>
      <Link to="new" className={cx(styles.link, styles.newNote)}>
        + New Note
      </Link>

      <hr />

      {props.notes.length === 0 ? (
        <p>No notes yet</p>
      ) : (
        <ol>
          {props.notes.map((note) => (
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
  );
}
