import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { useEffect, useRef } from "react";

import { action } from "../login";
import Comp_module from "./comp.module.css";

export function LoginPage() {
    const [searchParams] = useSearchParams();
    const redirectTo = searchParams.get("redirectTo") || "/notes";
    const actionData = useActionData<typeof action>();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (actionData?.errors?.email) {
            emailRef.current?.focus();
        } else if (actionData?.errors?.password) {
            passwordRef.current?.focus();
        }
    }, [actionData]);

    return (
        <div className="page-container">
            <div className="form-container">
                <Form method="post" className="form">
                    <div>
                        <label htmlFor="email" className="form-text">
                            Email address
                        </label>
                        <div className="input-margin">
                            <input
                                ref={emailRef}
                                id="email"
                                required
                                // eslint-disable-next-line jsx-a11y/no-autofocus
                                autoFocus={true}
                                name="email"
                                type="email"
                                autoComplete="email"
                                aria-invalid={actionData?.errors?.email ? true : undefined}
                                aria-describedby="email-error"
                                className="form-input"
                            />
                            {actionData?.errors?.email ? (
                                <div id="email-error" className="form-error-text">
                                    {actionData.errors.email}
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="form-text">
                            Password
                        </label>
                        <div className="input-margin">
                            <input
                                id="password"
                                ref={passwordRef}
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                aria-invalid={actionData?.errors?.password ? true : undefined}
                                aria-describedby="password-error"
                                className="form-input"
                            />
                            {actionData?.errors?.password ? (
                                <div id="password-error" className="form-error-text">
                                    {actionData.errors.password}
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <input type="hidden" name="redirectTo" value={redirectTo} />
                    <button type="submit" className="button-action">
                        Log in
                    </button>
                    <div className={Comp_module['sub-container']}>
                        <div className={Comp_module['remember-me']}>
                            <input
                                id="remember"
                                name="remember"
                                type="checkbox"
                                className={Comp_module["form-checkbox"]}
                            />
                            <label
                                htmlFor="remember"
                                className={Comp_module["remember-me-text"]}
                            >
                                Remember me
                            </label>
                        </div>
                        <div className="sub-text">
                            Don&apos;t have an account?{" "}
                            <Link
                                to={{
                                    pathname: "/join",
                                    search: searchParams.toString(),
                                }}
                                className="link"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}
