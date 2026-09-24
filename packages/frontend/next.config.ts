import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the Turbopack root to the workspace root (two levels up from this
  // package). Next.js otherwise infers it from the nearest lockfile, and a
  // stray ~/yarn.lock makes that the home directory: the whole home folder
  // lands under the file watcher and modules resolve from outside the
  // project. The workspace root keeps sibling packages watchable.
  turbopack: {
    root: path.resolve(import.meta.dirname, "../.."),
  },
};

export default nextConfig;
