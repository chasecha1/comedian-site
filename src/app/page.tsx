import { getAllComedians } from "@/api/comediansApi";
import Image from "next/image";
import ComedianList from "@/components/ComedianList";
import { getHero } from "@/api/heroApi";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Our Voice Comedy For Change",
  description: "A website database of over 100 female comedians showcasing their work",
};

export const revalidate = 300;

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
