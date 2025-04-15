'use client'
import { ComedianProfile } from "../../types/entities"
import Image from "next/image";
import { urlFor } from '@/sanity/sanityImage';
import { useState } from "react";
import Link from "next/link";
import { PortableText } from "next-sanity";



type ComedianProps = {
  comedians: ComedianProfile[]
}

const ComedianList = ({comedians} :ComedianProps) => {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const comedianList = comedians

  const allKeywords = Array.from(new Set(
    comedianList.flatMap(comedian => comedian.keywords)
  ));

  const toggleKeyword = (keyword: string) => {
    setSelectedKeywords(prev =>
      prev.includes(keyword)
        ? prev.filter(k => k !== keyword)
        : [...prev, keyword]
    );
  };

  const filteredComedians =
  selectedKeywords.length > 0
    ? comedians.filter(comedian =>
        comedian.keywords.some(keyword =>
          selectedKeywords.includes(keyword)
        )
      )
    : comedians;

  return (
    <div className="ComedianList bg-pink-50 flex flex-col justify-center items-center">
      <div className="Title Heading--head text-pink-600 pt-8 pb-4">
          Comedians
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {allKeywords.map((keyword) => (
          <button
            key={keyword}
            onClick={() => toggleKeyword(keyword)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedKeywords.includes(keyword)
                ? 'bg-dark-pink text-white border-pink-900'
                : 'bg-light-pink-bg text-dark-pink hover:bg-pink-300 hover:text-white'
            }`}
          >
            {keyword}
          </button>
        ))}
      </div>
      <div className="Card-containers grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 mx-8 pt-4 pb-16 text-pink-500">
        {comedianList && filteredComedians.map((comedian: ComedianProfile) => (
            <div className="Comedian-Card shadow-brand-box pb-4 lg:pb-0" key={comedian._id}>
              <div className="Media pb-4 flex justify-center">
                <Image
                  src={urlFor(comedian.image).width(480).height(430).fit('crop').crop('top').url()}
                  alt={'Comedian image'}
                  width={480}
                  height={430}
                />
              </div>
              <div className="Card-bottom flex flex-col items-center">
                <div className="Title text-lg lg:text-desc justify-center pb-2">
                  <Link href={`/${comedian.slug.current}`} className="Link--secondary">
                    {comedian.name}
                  </Link>
                </div>
                <div className="description mx-8 pb-4">
                  {/* <PortableText value={comedian.bio}/> */}
                  {comedian.keywords.map((keyword: string, index) => (
                    <div key={index}>
                      {keyword}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ComedianList