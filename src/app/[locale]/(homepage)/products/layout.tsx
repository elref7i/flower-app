import SideBar from "./_components/side-bar/index";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex mx-auto px-20 gap-6 mt-16 min-h-[80vh] max-w-7xl">
      <section className="w-1/4 min-w-72 border-r border-zinc-100 dark:border-zinc-700 max-h-[1200px]">
        <SideBar />
      </section>
      <section className="w-3/5">{children}</section>
    </main>
  );
}
