import Categories from "./components/categories";
import Statistics from "./components/statistics";

export default function FirstRow({ statistics }: FirstRowProps) {
  return (
    <section className="flex flex-col gap-6 justify-center md:flex-row md:justify-between px-4 pt-6">
      <Statistics statistics={statistics} />
      <Categories />
    </section>
  );
}
