import Account from "./components/Account";
import DownloadApp from "./components/DownloadApp";
import Exclusive from "./components/Exclusive";
import QuickLink from "./components/QuickLink";
import Support from "./components/Support";

const Footer = () => {
  return (
    <footer className="bg-black pt-16 text-white">
      <div className="container px-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between">
        <Exclusive />
        <Support />
        <Account />
        <QuickLink />
        <DownloadApp />
      </div>
      <div className="bg-black py-4 text-center text-gray-600 mt-6 border-t-[1px] border-gray-900">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
