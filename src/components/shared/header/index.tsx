import HeaderBreadcrumb from "./header-breadcrumb";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="sticky top-0 flex justify-between items-center py-2 bg-gray-400 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex justify-center items-center">
        <Logo />
        <HeaderBreadcrumb />
      </div>
      <ModeToggle />
    </header>
  );
};

export default Header;
