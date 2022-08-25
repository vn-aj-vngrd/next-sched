const Footer = () => {
  return (
    <footer className="flex justify-center px-6 py-2 text-sm text-center bg-white border-t text-dark dark:text-white dark:bg-darkest dark:border-darker md:justify-between">
      <div>
        Created by:
        <a
          href="https://vanajvanguardia.me"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium m text-medium hover:text-blue-500"
        >
          &nbsp; Van AJ Vanguardia
        </a>
      </div>
      <div className="hidden md:block">
        Next<b className="font-bold text-blue-500">Sched</b> | &copy; 2022
      </div>
    </footer>
  );
};

export default Footer;
