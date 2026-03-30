export const NEXT_PUBLIC_ENV =
  (process.env.NEXT_PUBLIC_ENV as "production" | "staging" | "development") || "development";

export const isProduction = NEXT_PUBLIC_ENV === "production";
export const isStaging = NEXT_PUBLIC_ENV === "staging";

export const allowCrawling = true;
