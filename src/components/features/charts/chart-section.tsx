// import ChartPieDonut from "./order-chart";
// import ChartArea from "./revenue-chart"

export default function ChartSection() {
  return <>
    <div className="grid grid-cols-4 gap-5 my-10">
      {/*pie chart*/}
      <div className="col-span-1">
        {/* < ChartPieDonut /> */}
      </div>
      
      {/*area chart*/}
      <div className="col-span-3">
        {/* <ChartArea /> */}
      </div>
    </div>
  </>
}