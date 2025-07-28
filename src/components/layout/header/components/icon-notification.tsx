import { Link } from "@/i18n/navigation";
import { notificationIcons } from "../constants/icons";

export default function IconNotification() {
  return (
    <ul className="flex gap-[10px] border-l border-r px-4">
      {notificationIcons.map((icon, i) => (
        <li key={i}>
          <Link href={"/notification"}>{icon.icon}</Link>
        </li>
      ))}
    </ul>
  );
}
