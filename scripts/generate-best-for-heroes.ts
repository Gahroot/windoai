/**
 * Generate hero images for all 56 best-for pages
 *
 * Run with: npx tsx scripts/generate-best-for-heroes.ts
 */

import { config } from "dotenv";
config({ path: ".env.local" });
import { buildPrompt } from "../src/lib/media/prompt-builder";
import { generateBatchParallel } from "../src/lib/media/batch-generator";
import type { Industry } from "../src/lib/media/types";
import { getAllBestForSlugs } from "../src/lib/best-for";

// Industry mapping for window & door best-for pages
const INDUSTRY_MAP: Record<string, "general"> = {
  // Window & door business types
  "window-replacement": "general",
  "door-installation": "general",
  "window-manufacturers": "general",
  "window-dealers": "general",
  "multi-location-franchises": "general",
  "storm-windows": "general",
  "patio-doors": "general",
  "entry-doors": "general",
  "energy-efficient-upgrades": "general",
  "commercial-windows": "general",
};

// Window & door industry subject descriptions for hero images
const HERO_SUBJECTS: Record<string, string> = {
  "window-replacement": "Window installer measuring and fitting new vinyl window in residential home, tape measure and level visible, bright natural light",
  "door-installation": "Door installer fitting new entry door, residential home exterior, tools and materials visible, professional at work",
  "window-manufacturers": "Window manufacturing showroom with display windows, professional sales consultant with client, modern bright environment",
  "window-dealers": "Window and door dealership showroom, variety of window styles on display, consultant helping customer choose",
  "multi-location-franchises": "Window company headquarters with branded vehicles in parking lot, modern office building, professional team visible",
  "storm-windows": "Installer fitting storm window on residential home, winter weather visible, protective gear and tools",
  "patio-doors": "Installer fitting sliding patio door, residential backyard visible, natural light streaming through glass",
  "entry-doors": "Craftsman installing decorative entry door, residential front porch, beautiful door design visible",
  "energy-efficient-upgrades": "Homeowner and window consultant reviewing energy-efficient triple-pane window samples, residential interior",
  "commercial-windows": "Commercial window installation on office building, professional crew with safety equipment, urban setting",
};

// Subject descriptions for any slugs not explicitly defined above
const DEFAULT_SUBJECTS: Record<string, string> = {
  default: "Business owner at desk reviewing results, modern office environment, confident expression, natural lighting"
};

function getSubjectForSlug(slug: string): string {
  // First check if we have a specific subject
  if (HERO_SUBJECTS[slug]) {
    return HERO_SUBJECTS[slug];
  }

  // Check industry for generic subject
  const industry = INDUSTRY_MAP[slug] || "general";

  // Generate based on industry
  const industrySubjects: Record<string, string> = {
    "general": "Window installer at work on residential home, professional tools and materials, natural lighting",
  };

  return industrySubjects[industry] || industrySubjects["general"];
}

function getIndustryForSlug(slug: string): Industry {
  return (INDUSTRY_MAP[slug] || "general") as Industry;
}

async function main() {
  const slugs = getAllBestForSlugs();

  console.log(`Generating hero images for ${slugs.length} best-for pages...\n`);

  const items = slugs.map((slug) => {
    const industry = getIndustryForSlug(slug);
    const subject = getSubjectForSlug(slug);

    const prompt = buildPrompt({
      category: "hero",
      subject,
      industry,
      mood: "dynamic",
    });

    return {
      prompt,
      filename: `hero-best-for-${slug}.png`,
      aspectRatio: "16:9" as const,
    };
  });

  console.log("Prepared generation items:");
  items.forEach((item, i) => {
    console.log(`  ${i + 1}. ${item.filename}`);
  });
  console.log();

  // Generate with progress tracking
  const report = await generateBatchParallel({
    category: "hero",
    items,
    onProgress: (completed, total, current) => {
      console.log(`[${completed}/${total}] Generated ${current}`);
    },
  });

  console.log("\n=== GENERATION COMPLETE ===");
  console.log(`Category: ${report.category}`);
  console.log(`Total: ${report.total}`);
  console.log(`Succeeded: ${report.succeeded}`);
  console.log(`Failed: ${report.failed}`);

  if (report.errors.length > 0) {
    console.log("\nErrors:");
    report.errors.forEach((err) => {
      console.log(`  - ${err.filename}: ${err.error}`);
    });
  }

  console.log("\nGenerated files:");
  report.results
    .filter((r) => r.success)
    .forEach((r) => {
      console.log(`  ✓ ${r.outputPath}`);
    });
}

main().catch(console.error);
