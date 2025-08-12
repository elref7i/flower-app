import Link from "next/link";

export default function DashboardNotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested Dashboard</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
