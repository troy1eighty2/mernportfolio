import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "p6wjemk8",
  dataset: "production",
  apiVersion: "2025-10-19",
  useCdn: false,
});
