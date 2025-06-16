import MainHeader from "./components/main-header";
import NavigationHeader from "./components/navigation-header";

/**
 * Header component
 *
 * This component renders the main header section of the application,
 * including both the MainHeader and NavigationHeader components.
 *
 * It is typically used at the top of the layout and may contain
 * branding, navigation links, user-related actions, etc.
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */

export default function Header() {
  return (
    <header>
      {/* Main header */}
      <MainHeader />

      {/* Navigation header */}
      <NavigationHeader />
    </header>
  );
}
