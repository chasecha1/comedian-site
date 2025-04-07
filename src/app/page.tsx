import { getAllComedians } from "@/api/comediansApi";
import Image from "next/image";
import ComedianList from "@/components/ComedianList";

export default async function Home() {
  const comedians = await getAllComedians();

  return (
    <div className="bg-white dark:deep-navy">
      <ComedianList comedians={comedians}/>
    </div>
  );
}
