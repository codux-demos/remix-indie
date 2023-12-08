import { Form, Link, Outlet, useLoaderData } from "@remix-run/react";

import { useUser } from "~/utils";

import imgThingy from "../../styles/assets/favicon.png";

import styles from "./comp.module.css";
import type { loader } from "./route";
import { SideBar } from "./side-bar";

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
        <SideBar notes={data.noteListItems} />

        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
