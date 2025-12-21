import { getAllStatistics } from "@/lib/api/all-statistics";
import FirstRow from "./_components/1st-row";
import SecondRow from "./_components/charts";


export default async function page() {
  const response = await getAllStatistics();
  if (!("statistics" in response)) throw new Error("Can't fetch statistics");
  const { statistics } = response;
  return (
    <div className="h-screen dark:bg-zinc-900">
      <FirstRow statistics={statistics} />
      <SecondRow/>
    </div>
  );

}
