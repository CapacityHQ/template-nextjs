export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <h1 className="max-w-lg text-3xl font-semibold tracking-tight text-foreground">
        Your app starts here
      </h1>
      <p className="max-w-md text-lg leading-8 text-muted-foreground">
        This page lives in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-base">
          packages/frontend/src/app/page.tsx
        </code>
        . Describe what you want to build and the page will take shape.
      </p>
    </main>
  );
}
