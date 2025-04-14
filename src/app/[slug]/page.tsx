import { getComedianBySlug } from "@/api/comediansApi";
import { ComedianProfile } from "../../../types/entities"
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from '@/sanity/sanityImage';

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
    <div className="bg-white dark:bg-light-navy text-navy-text dark:text-white flex flex-col">
      <div className="Comedian-Name Heading--head flex justify-center py-8">
        {comedian.name}
      </div>
      <div className="Comedian-item-container flex flex-row px-4 md:px-8 lg:px-28 pb-8">
        <div className="Comedian-Image w-1/3 pb-4">
          <Image
            src={urlFor(comedian.image).width(500).height(600).fit('crop').crop('top').url()}
            alt={'Comedian image'}
            width={500}
            height={600}
          />
        </div>
        <div className="bio-content-container flex flex-col w-2/3 pl-20">
          <div className="Heading--lead pb-2">
            Biography
          </div>
          <div className="Comedian-bio pb-4">
            <PortableText value={comedian.bio}/>
          </div>
          <div className="Heading--lead pb-2">
            Performance Videos
          </div>
          <a href={comedian.video.url} className="Link--secondary pb-4" target="_blank" rel="noopener noreferrer">{comedian.video.name}</a>
          <div className="Heading--lead pb-2">
            Topics Addressed
          </div>
          <div>
            {comedian.keywords.map((keyword: string, index) => (
              <div key={index}>
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
