import ProductGrid from "./_components/product-grid";
import SideBar from "./_components/side-bar";

export default function page() {
  return <main className="flex mx-auto px-20 gap-6 mt-16 min-h-[80vh] ">
    <section className="w-1/4 min-w-72 ltr:border-r rtl:border-l border-zinc-100 dark:border-zinc-700 h-auto mb-32">
      <SideBar />
    </section>
    <section className="w-full"><ProductGrid /></section>
  </main>
}
