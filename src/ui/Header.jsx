import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { IoMdMenu, IoMdSettings, IoIosHelpCircleOutline } from "react-icons/io";

import {} from "react-icons/io";

function Header() {
  return (
    <nav className="col-span-2 flex items-center justify-between px-6 h-24 py-4 border border-b-slate-500 md:col-span-full">
      <div className="flex gap-10 items-center">
        {/* <span className="bg-gray-300 text-4xl rounded-full px-1 py-1">
          <IoMdMenu />
        </span> */}
        <span className="hidden min-[460px]:block text-4xl  px-1 py-1">
          <IoPerson />
        </span>
      </div>
      <div>
        <span className="relative">
          <form >
            <input
              placeholder="Search contact"
              className="w-72 h-12 rounded-full bg-slate-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-slate-500 text-center focus:ring-opacity-50 placeholder:text-2xl  sm:focus:w-72 md:w-96 focus:md:w-96"
            />
          </form>
          <CiSearch className="absolute transform translate-x-1/2 translate-y-1/2 top-0 left-3/4 text-slate-400 text-2xl font-bold "></CiSearch>
        </span>
      </div>
      <div className="flex gap-10 items-center">
        <span className="text-4xl px-1 py-1">
          <IoIosHelpCircleOutline />
        </span>
        <span className=" text-4xl  px-1 py-1">
          <IoMdSettings />
        </span>
      </div>
    </nav>
  );
}

export default Header;
