#!/usr/bin/env tsx
/**
 * Generate blog thumbnail images for all blog posts
 * Uses the Z-Image API with rate limiting and brand-aligned prompts
 *
 * Usage:
 *   ZIMAGE_API_KEY=your-key npx tsx scripts/generate-blog-images.ts
 */

import { buildBlogThumbnailPrompt } from "../src/lib/media/prompt-builder";
import { generateAndDownload } from "../src/lib/media/z-image";
import type { Industry } from "../src/lib/media/types";

const TARGET_DIR = "public/images/blog";

// Blog posts that need images generated
const blogPosts: Array<{
  slug: string;
  title: string;
  industry: string;
  filename: string;
}> = [
  // Window & door specific blog images
  {
    slug: "speed-to-lead",
    title: "Speed-to-Lead for Window Companies: Why First Response Wins the $15K Job",
    industry: "general",
    filename: "speed-to-lead.jpg",
  },
  {
    slug: "ai-vs-answering-service",
    title: "AI Receptionist vs Answering Service for Window Companies",
    industry: "general",
    filename: "ai-vs-answering-service.jpg",
  },
  {
    slug: "book-more-estimates",
    title: "How Window Companies Book More In-Home Estimates with AI",
    industry: "general",
    filename: "book-more-estimates.jpg",
  },
];

async function main() {
  console.log(`Generating ${blogPosts.length} blog thumbnail images...\n`);

  const results = {
    succeeded: [] as string[],
    failed: [] as Array<{ filename: string; error: string }>,
  };

  for (let i = 0; i < blogPosts.length; i++) {
    const post = blogPosts[i];
    const outputPath = `${TARGET_DIR}/${post.filename}`;

    console.log(
      `[${i + 1}/${blogPosts.length}] Generating: ${post.filename}`
    );
    console.log(`  Industry: ${post.industry}`);
    console.log(`  Title: ${post.title.substring(0, 60)}...`);

    const prompt = buildBlogThumbnailPrompt(post.title, post.industry as Industry);
    console.log(`  Prompt: ${prompt.substring(0, 100)}...`);

    console.log(`  Calling API...`);
    const result = await generateAndDownload(prompt, "16:9", outputPath);

    if (result.success) {
      console.log(`  ✅ Success: ${outputPath}`);
      results.succeeded.push(post.filename);
    } else {
      console.log(`  ❌ Failed: ${result.error}`);
      results.failed.push({ filename: post.filename, error: result.error || "Unknown error" });
    }

    console.log("");

    // Rate limiting - wait between requests
    if (i < blogPosts.length - 1) {
      const waitTime = 1000; // 1 second between requests
      console.log(`  Waiting ${waitTime}ms before next request...`);
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    }
  }

  console.log("\n=== SUMMARY ===");
  console.log(`Total: ${blogPosts.length}`);
  console.log(`Succeeded: ${results.succeeded.length}`);
  console.log(`Failed: ${results.failed.length}`);

  if (results.failed.length > 0) {
    console.log("\nFailed images:");
    results.failed.forEach(({ filename, error }) => {
      console.log(`  - ${filename}: ${error}`);
    });
  }

  if (results.failed.length === 0) {
    console.log("\n All images generated successfully!");
  } else {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
