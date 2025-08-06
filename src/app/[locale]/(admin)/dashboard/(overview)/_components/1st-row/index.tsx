import Categories from "./components/categories";
import Statistics from "./components/statistics";

export default function FirstRow() {
  return (
    <section className="flex flex-col gap-6 justify-center md:flex-row md:justify-between px-4 pt-6">
      <Statistics />
      <Categories />
    </section>
  );
}
