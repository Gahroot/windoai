import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      "next/dist/build/polyfills/polyfill-module": "./src/lib/noop.ts",
    },
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-dialog",
    ],
  },
  async redirects() {
    return [];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
