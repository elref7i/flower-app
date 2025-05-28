import { ClipboardList, Gift, Headset, House, Info, PartyPopper } from "lucide-react";

export const links = [
  {
    name: "Home",
    icon: <House size={20} />,
    path: "home",
  },
  {
    name: "Products",
    icon: <Gift size={20} />,
    path: "products",
  },
  {
    name: "Categories",
    icon: <ClipboardList size={20} />,
    path: "categories",
  },
  {
    name: "Occasions",
    icon: <PartyPopper size={20} />,
    path: "occasions",
  },
  {
    name: "Contact",
    icon: <Headset size={20} />,
    path: "contact",
  },
  {
    name: "About",
    icon: <Info size={20} />,
    path: "about",
  },
];
