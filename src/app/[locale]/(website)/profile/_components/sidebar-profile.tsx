import Link from "next/link";

export default function SidebarProfile() {
  return (
    <aside>
      <ul>
        <li>
          <Link href={"/profile"}>My Acount</Link>
        </li>
        <li>
          <Link href={"/profile/change-password"}>Change Password</Link>
        </li>
      </ul>
    </aside>
  );
}
