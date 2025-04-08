import { getComedianBySlug } from "@/api/comediansApi";
import { ComedianProfile } from "../../../types/entities"
import { PortableText } from "next-sanity";

type ComedianPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ComedianPage({ params }: ComedianPageProps) {
  const { slug } = await params;
  const data: ComedianProfile[] = await getComedianBySlug(slug)
  const comedian = data[0]

  return (
    <div className="bg-white dark:bg-light-navy text-navy-text dark:text-white">
      <div>
        {comedian.name}
      </div>
      <div>
        <PortableText value={comedian.bio}/>
      </div>
      <div>
        {comedian.video}
      </div>
      <div>
        {comedian.keywords.map((keyword: string, index) => (
          <div key={index}>
            {keyword}
          </div>
        ))}
      </div>
    </div>
  )
}
