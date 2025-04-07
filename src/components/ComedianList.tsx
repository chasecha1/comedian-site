'use client'
import { ComedianProfile } from "../../types/entities"
import Image from "next/image";
import { urlFor } from '@/sanity/sanityImage';
import { useState } from "react";
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
    <div className="ComedianList bg-white dark:bg-light-navy flex flex-col justify-center items-center">
      <div className="Title Heading--head text-navy-text dark:text-white pt-8 pb-4">
          Comedians
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {allKeywords.map((keyword) => (
          <button
            key={keyword}
            onClick={() => toggleKeyword(keyword)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedKeywords.includes(keyword)
                ? 'bg-navy text-white border-navy'
                : 'bg-light-navy dark:bg-white text-white dark:text-deep-navy border-navy hover:bg-navy hover:text-white'
            }`}
          >
            {keyword}
          </button>
        ))}
      </div>
      <div className="Card-containers flex flex-col lg:flex-row justify-center pb-8 px-2 lg:px-8 text-navy-text dark:text-white">
        {comedianList && filteredComedians.map((comedian: ComedianProfile) => (
            <div className="Comedian-Card shadow-brand-box dark:shadow-brand-box-navy pb-4 lg:pb-0 mb-8 lg:mb-2 mx-4" key={comedian._id}>
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
                  <p>{comedian.name}</p>
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