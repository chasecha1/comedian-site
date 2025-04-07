import { client } from "@/sanity/lib/client"

export async function getAllComedians() {
  try {
    const data = await client.fetch(
      `*[_type == "comedian"]{
          _id,
          name,
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
