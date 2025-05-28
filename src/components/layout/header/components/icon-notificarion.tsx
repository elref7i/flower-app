import Link from "next/link";
import { notificationIcons } from "../constants/icons";

export default function IconNotificarion() {
  return (
    <ul className="flex gap-[10px] border-l-[1px] border-r-[1px] px-4">
      {notificationIcons.map((icon, i) => (
        <li key={i}>
          <Link href={"/notification"}>{icon.icon}</Link>
        </li>
      ))}
    </ul>
  );
}
