import {
    Form,
    isRouteErrorResponse,
    useLoaderData,
    useRouteError,
} from "@remix-run/react";

import type { loader } from "./route";
import styles from "./comp.module.css";
import Classnames from 'classnames';

export function NoteDetailsPage() {
    const data = useLoaderData<typeof loader>();

    console.log("ASDFSDF", data.note.body);
    return (
        <div>
            <h3 className={styles.title}>{data.note.title}</h3>
            <p className={styles.text}>{data.note.body}</p>
            <hr />
            <Form method="post">
                <button type="submit" className={Classnames(styles.delete, 'button-action')}>Delete</button>
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
