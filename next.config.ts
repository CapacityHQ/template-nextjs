import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray ~/yarn.lock makes Next.js infer the home directory as the workspace
  // root, which puts the whole home folder under Turbopack's file watcher and
  // resolves modules from outside the project. Pin the root to this project.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
