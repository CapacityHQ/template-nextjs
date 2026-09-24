# Working in this repository

This is a pnpm workspace. Packages live under `packages/`; the only one today
is `packages/frontend`, a Next.js 16 app with the App Router, Tailwind CSS 4
and shadcn/ui.

## Commands

Run everything from the repository root with pnpm (never npm or yarn; the
lockfile is `pnpm-lock.yaml`):

- `pnpm install` — installs every package
- `pnpm dev` — starts the frontend on http://localhost:3000
- `pnpm build`, `pnpm lint`, `pnpm type-check` — run in every package
- `pnpm --filter frontend <script>` — run one package's script

Add a dependency to a package, not to the root:
`pnpm --filter frontend add <name>`.

## Frontend conventions

- Routes are files under `packages/frontend/src/app/`. Components go in
  `packages/frontend/src/components/`, helpers in `packages/frontend/src/lib/`.
- `@/` maps to `packages/frontend/src/`.
- shadcn/ui components live in `src/components/ui/`. Add one from inside the
  package: `cd packages/frontend && pnpm dlx shadcn@latest add <component>`.
- Style with Tailwind classes; avoid inline styles.
- Env variables for the frontend live in `packages/frontend/.env` (gitignored)
  and are documented in `packages/frontend/.env.example`. Only `NEXT_PUBLIC_*`
  names reach the browser.

## Adding a package

1. Create `packages/<name>/package.json` with a unique `name` and `dev`,
   `build`, `lint`, `type-check` scripts as applicable.
2. Run `pnpm install` from the root.
3. Register long-running processes in `.capacity/runtime.json` under `apps`
   (`cwd` relative to the root, one `primary: true` app, the one that serves
   the UI). Add its folder to `envRoots` when it has an `.env.example`.
4. Reference sibling packages with `"<name>": "workspace:*"`.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `packages/frontend/node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
