import { client } from "@/sanity/lib/client"

export async function getHero() {
  try {
    const data = await client.fetch(
      `*[_type == "hero"]{
          _id,
          image{
            asset->{
              _id,
              url
            }
          },
          about
        }`
    );
    return data
  } catch (error) {
    console.error('Error fetching hero:', error);
    return null
  }
}