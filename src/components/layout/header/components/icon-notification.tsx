import { Link } from "@/i18n/navigation";
import { Bell } from "lucide-react";

export default function IconNotification() {
  return (
    <Link href={"/notification"}>
      <Bell width={20} height={20} />
    </Link>
  );
}
