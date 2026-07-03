"use client";

import { useScrollTracking } from "@/shared/hooks/use-scroll-tracking";

export function AnalyticsProvider() {
  useScrollTracking();

  return null;
}