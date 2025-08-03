export default function CheckoutLayout({
  children,
  summary,
}: {
  children: React.ReactNode;
  summary: React.ReactNode;
}) {
  return (
    <section className="flex">
      <div>{children}</div>

      <div className="">{summary}</div>
    </section>
  );
}
