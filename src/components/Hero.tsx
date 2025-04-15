import { HeroProfile } from "../../types/entities";
import Image from "next/image";
import { urlFor } from '@/sanity/sanityImage';
import { PortableText } from "next-sanity";



type HeroProps = {
  heroData: HeroProfile[]
}

const Hero = ({heroData} :HeroProps) => {
  const hero = heroData[0]

  return(
    <div className="Hero p-5 lg:p-10 xl:p-14">
        <div className="Hero-title Heading--head text-pink-500 flex justify-center">
          Our Voice Comedy for Change Comedian Database
        </div>
        <div className="flex flex-col lg:flex-row bg-white text-black">
            <div className="Hero-image flex flex-col w-3/4 px-12 lg:px-20">
              <Image
                src={urlFor(hero.image).width(480).height(430).fit('crop').crop('top').url()}
                alt={'Hero image'}
                width={480}
                height={430}
              />
              {/* <h1 className="text-navy-text dark:text-white Heading--head pb-4 lg:pb-0">Hi! I'm Chase.</h1>
              <div className="Heading--sub text-base lg:text-desc text-navy-text dark:text-white">
                <p className="Hero-description">I'm currently a third year at UVA studying Computer Science. I'm into weightlifing, playing guitar, and like to code! Thanks for stopping by my site! Feel free to check out my blog posts since I'm trying to upload a new one every so often, and leave a message in the guestbook!</p>
              </div> */}
            </div>
            <div className="Hero-desc flex flex-col items-center justify-center pt-10 lg:pt-0 px-10 lg:pr-20">
                <PortableText value={hero.about}/>
            </div>
        </div>
    </div>
  );
};

export default Hero