import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  turbopack: {
    // A stray package-lock.json sits in the home directory above this project,
    // so pin the root here rather than letting Turbopack walk up to it.
    root: __dirname,
  },
};

export default nextConfig;
