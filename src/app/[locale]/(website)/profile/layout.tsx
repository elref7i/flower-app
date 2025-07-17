import SidebarProfile from "./_components/sidebar-profile";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container pt-16 min-h-screen">
      {/* Title */}
      <h1 className="font-bold text-5xl pb-9">Update Profile</h1>
      <div className="grid grid-cols-12 gap-9 ">
        <SidebarProfile />
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
}
