/**
 * Validation schemas for lead magnet forms
 */

import z from "zod";

/**
 * Revenue Loss Calculator Schema
 * For window and door companies calculating revenue losses from slow lead response
 */
export const teamCalculatorSchema = z.object({
  // Team metrics
  teamSize: z.number()
    .min(2, "Team size must be at least 2")
    .max(1000, "Please contact us for enterprise teams (1000+)"),

  monthlyLeads: z.number()
    .min(10, "Minimum 10 leads per month")
    .max(100000, "Please enter a realistic lead volume"),

  avgCommission: z.number()
    .min(1000, "Average job value seems low")
    .max(1000000, "Please enter realistic job value"),

  closeRate: z.number()
    .min(0.1, "Close rate must be at least 0.1%")
    .max(100, "Close rate cannot exceed 100%"),

  responseTime: z.enum([
    "under-1-min",
    "5-min",
    "30-min",
    "1-hour",
    "4-hour",
    "24-hour",
  ]),

  // Contact info
  name: z.string().min(2, "Name is required"),
  email: z.string().refine((v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Valid email required"),
  companyName: z.string().optional(),
  role: z.enum(["owner", "sales-manager", "office-manager", "other"]),
});

export type TeamCalculatorInput = z.infer<typeof teamCalculatorSchema>;

/**
 * Response time options for dropdown
 */
export const responseTimeOptions = [
  { value: "under-1-min", label: "Under 1 minute" },
  { value: "5-min", label: "5 minutes" },
  { value: "30-min", label: "30 minutes" },
  { value: "1-hour", label: "1 hour" },
  { value: "4-hour", label: "4 hours (industry average)" },
  { value: "24-hour", label: "24+ hours" },
] as const;

/**
 * Role options for dropdown
 */
export const roleOptions = [
  { value: "owner", label: "Owner" },
  { value: "sales-manager", label: "Sales Manager" },
  { value: "office-manager", label: "Office Manager" },
  { value: "other", label: "Other" },
] as const;
