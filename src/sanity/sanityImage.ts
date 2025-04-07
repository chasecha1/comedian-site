import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity/lib/client"
import { Image } from 'sanity';

const builder = imageUrlBuilder(client);

// Helper function to build image URLs
export function urlFor(source: Image) {
  return builder.image(source);
}