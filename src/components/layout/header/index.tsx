import MainHeader from "./components/main-header";
import NavigationHeader from "./components/navigation-header";

export default function Header() {
  return (
    <div>
      {/* Main header */}
      <MainHeader />

      {/* Navigation header */}
      <NavigationHeader />
    </div>
  );
}
