const Footer = () => {
  return (
    <footer className="flex justify-center px-6 py-2 text-sm text-center bg-white border-t text-dark dark:text-white dark:bg-darkest dark:border-darker md:justify-between">
      <div>
        Created by:
        <a
          href="https://vanajvanguardia.me"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 font-bold text-medium hover:text-gray-500 dark:hover:text-gray-200"
        >
          &nbsp; Van AJ Vanguardia
        </a>
      </div>
      <div className="hidden md:block">
        Next<b className="font-bold">Sched</b> | &copy; 2022
      </div>
    </footer>
  );
};

export default Footer;
