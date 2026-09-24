# App

A pnpm workspace. Every package lives under `packages/`:

| Package              | What it is                                   | Runs with  |
| -------------------- | -------------------------------------------- | ---------- |
| `packages/frontend`  | Next.js 16 app (App Router, Tailwind, shadcn) | `pnpm dev` |

## Getting started

```bash
pnpm install
pnpm dev        # starts the frontend on http://localhost:3000
```

The root scripts delegate to the packages:

| Script            | Does                                          |
| ----------------- | --------------------------------------------- |
| `pnpm dev`        | `dev` in `packages/frontend`                  |
| `pnpm build`      | `build` in every package                      |
| `pnpm lint`       | `lint` in every package                       |
| `pnpm type-check` | `type-check` in every package                 |

Run a script in one package with `pnpm --filter <package-name> <script>`, for
example `pnpm --filter frontend lint`.

## Adding a package

1. Create `packages/<name>/package.json` with a unique `name` and its own
   `dev`, `build`, `lint` and `type-check` scripts (leave out the ones that do
   not apply).
2. Run `pnpm install` from the root so the lockfile picks it up.
3. Register it in `.capacity/runtime.json` when it is a long-running process
   (an API server, a worker) so it starts with the app.

Packages depend on each other with the workspace protocol:
`"shared": "workspace:*"` in a package's `dependencies`.

## Layout

```
.
├── .capacity/runtime.json   # which apps and services Capacity starts
├── package.json             # workspace root: pnpm pin, Node floor, scripts
├── pnpm-workspace.yaml      # package globs
└── packages/
    └── frontend/            # the Next.js app
        ├── src/app/         # routes (App Router)
        ├── src/components/  # UI components (shadcn under ui/)
        ├── src/lib/         # helpers
        └── public/          # static files
```
