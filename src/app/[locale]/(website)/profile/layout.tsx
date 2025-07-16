import SidebarProfile from "./_components/sidebar-profile";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Title */}
      <h1>Update Profilew</h1>
      <div>
        <SidebarProfile />
        {children}
      </div>
    </>
  );
}
