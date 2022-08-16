import Link from "next/link";
import ThemeBtn from "../components/ThemeBtn";

const Header = () => {
  const navigations = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];

  return (
    <nav className="relative container mx-auto p-6 ">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Scheduler</h2>
        </div>
        <div className="hidden md:flex space-x-12">
          {navigations.map((navigation) => (
            <Link href={navigation.path} key={navigation.label}>
              <a className="text-gray-800 hover:text-gray-900 dark:text-white">
                {navigation.label}
              </a>
            </Link>
          ))}
        </div>
        <ThemeBtn />
      </div>
    </nav>
  );
};

export default Header;
