import HeaderBreadcrumb from "./header-breadcrumb";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full flex justify-between items-center py-2 pr-2 bg-neutral-100 dark:bg-slate-900 shadow-lg shadow-indigo-200/30 dark:shadow-indigo-900/30">
      <div className="flex justify-center items-center">
        <Logo />
        <HeaderBreadcrumb />
      </div>
      <ModeToggle />
    </header>
  );
};

export default Header;
