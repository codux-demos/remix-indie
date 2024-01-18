import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

import Index_module from "./_index.module.css";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index2() {
  const user = useOptionalUser();
  return (
    <main className={Index_module.root}>
      <div className={Index_module.content}>
        <div className={Index_module.hero}>
          <div className={Index_module["hero-inner"]}>
            <div className={Index_module["hero-image-container"]}>
              <img
                src="https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg"
                alt="Sonic Youth On Stage"
                className={Index_module["hero-image"]}
              />
              <div className={Index_module["image-filter"]} />
            </div>
            <div className={Index_module["hero-content"]}>
              <h1 className={Index_module.header}>
                <span className={Index_module["header-content"]}>
                  Indie Stack
                </span>
              </h1>
              <p className={Index_module["sub-header"]}>
                Check the README.md file for instructions on how to get this
                project deployed.
              </p>
              <div className={Index_module["view-notes-container"]}>
                {user ? (
                  <Link
                    to="/notes"
                    className={Index_module["view-notes-button"]}
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  <div className={Index_module["join-buttons"]}>
                    <Link to="/join" className={Index_module["sign-up-button"]}>
                      Sign up
                    </Link>
                    <Link to="/login" className={Index_module["log-in-button"]}>
                      Log In
                    </Link>
                  </div>
                )}
              </div>
              <a href="https://remix.run">
                <img
                  src="https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg"
                  alt="Remix"
                  className={Index_module["remix-logo"]}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={Index_module.logos}>
          <div className={Index_module["logos-layout"]}>
            {[
              {
                src: "https://user-images.githubusercontent.com/1500684/157764397-ccd8ea10-b8aa-4772-a99b-35de937319e1.svg",
                alt: "Fly.io",
                href: "https://fly.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157764395-137ec949-382c-43bd-a3c0-0cb8cb22e22d.svg",
                alt: "SQLite",
                href: "https://sqlite.org",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157764484-ad64a21a-d7fb-47e3-8669-ec046da20c1f.svg",
                alt: "Prisma",
                href: "https://prisma.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg",
                alt: "Tailwind",
                href: "https://tailwindcss.com",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157764454-48ac8c71-a2a9-4b5e-b19c-edef8b8953d6.svg",
                alt: "Cypress",
                href: "https://www.cypress.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772386-75444196-0604-4340-af28-53b236faa182.svg",
                alt: "MSW",
                href: "https://mswjs.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772447-00fccdce-9d12-46a3-8bb4-fac612cdc949.svg",
                alt: "Vitest",
                href: "https://vitest.dev",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772662-92b0dd3a-453f-4d18-b8be-9fa6efde52cf.png",
                alt: "Testing Library",
                href: "https://testing-library.com",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
                alt: "Prettier",
                href: "https://prettier.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg",
                alt: "ESLint",
                href: "https://eslint.org",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
                alt: "TypeScript",
                href: "https://typescriptlang.org",
              },
            ].map((img) => (
              <a
                key={img.href}
                href={img.href}
                className={Index_module["logo-link"]}
              >
                <img alt={img.alt} src={img.src} className="object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
