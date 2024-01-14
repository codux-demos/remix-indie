import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import Classnames from "classnames";
import { useEffect, useRef } from "react";

import Comp_module from "./comp.module.css";
import { action } from "./route";

export function Join() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
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
    <div className={Comp_module["page-container"]}>
      <div className={Comp_module["form-container"]}>
        <Form method="post" className={Comp_module.form}>
          <div>
            <label htmlFor="email" className={"form-text"}>
              Email address
            </label>
            <div className={Comp_module["input-margin"]}>
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
                className={Comp_module["form-input"]}
              />
              {actionData?.errors?.email ? (
                <div
                  id="email-error"
                  className={Comp_module["form-error-text"]}
                >
                  {actionData.errors.email}
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <label htmlFor="password" className="form-text">
              Password
            </label>
            <div className={Comp_module["input-margin"]}>
              <input
                id="password"
                ref={passwordRef}
                name="password"
                type="password"
                autoComplete="new-password"
                aria-invalid={actionData?.errors?.password ? true : undefined}
                aria-describedby="password-error"
                className={Comp_module["form-input"]}
              />
              {actionData?.errors?.password ? (
                <div
                  id="password-error"
                  className={Comp_module["form-error-text"]}
                >
                  {actionData.errors.password}
                </div>
              ) : null}
            </div>
          </div>

          <input type="hidden" name="redirectTo" value={redirectTo} />
          <button
            type="submit"
            className={Classnames(
              Comp_module["submit-button"],
              "button-action",
            )}
          >
            Create Account
          </button>
          <div className={Comp_module["sub-container"]}>
            <div className="sub-text">
              Already have an account?{" "}
              <Link
                to={{
                  pathname: "/login",
                  search: searchParams.toString(),
                }}
                className="link"
              >
                Log in
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
