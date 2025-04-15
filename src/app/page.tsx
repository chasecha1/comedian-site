import { getAllComedians } from "@/api/comediansApi";
import Image from "next/image";
import ComedianList from "@/components/ComedianList";
import { getHero } from "@/api/heroApi";
import Hero from "@/components/Hero";

export default async function Home() {
  const comedians = await getAllComedians();
  const hero = await getHero();

  return (
    <div className="bg-white">
      <Hero heroData={hero}/>
      <ComedianList comedians={comedians}/>
    </div>
  );
}
