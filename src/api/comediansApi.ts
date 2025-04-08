import { client } from "@/sanity/lib/client"

export async function getAllComedians() {
  try {
    const data = await client.fetch(
      `*[_type == "comedian"]{
          _id,
          name,
          slug,
          bio,
          image{
            asset->{
              _id,
              url
            }
          },
          video,
          keywords
        }`
    );
    return data
  } catch (error) {
    console.error('Error fetching posts:', error);
    return null
  }
}

export async function getComedianBySlug(slug: string) {
  try {
    const data = await client.fetch(
      `*[_type == "comedian" && slug.current == $slug]{
          _id,
          name,
          slug,
          bio,
          image{
            asset->{
              _id,
              url
            }
          },
          video,
          keywords
        }`,
        { slug }
    );
    return data
  } catch (error) {
    console.error('Error fetching comedian:', error);
    return null
  }
}
