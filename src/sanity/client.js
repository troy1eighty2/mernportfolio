import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "p6wjemk8",
  dataset: "production",
  apiVersion: "2025-10-19",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}
