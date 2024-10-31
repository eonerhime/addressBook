import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
// import { IoPerson } from "react-icons/io5";
// import { IoMdMenu, IoMdSettings, IoIosHelpCircleOutline, IoMdCheckmarkCircleOutline } from "react-icons/io";

import {} from "react-icons/io";
import HeaderMenu from "./HeaderMenu";
// import { useNavigate } from "react-router-dom";
import UserAvatar from "../features/authentication/UserAvatar";
// import styled from "styled-components";
import Logout from "../features/authentication/Logout";

// const StyledHeader = styled.nav`
//   padding: 1.2rem 4.8rem;
//   background-color: var(--color-grey-0);
//   border-bottom: 1px solid var(--color-grey-100);

//   display: flex;
//   gap: 2.4rem;
//   align-items: center;
//   justify-content: space-between;
//   padding: 1.5rem 1rem;
//   border-bottom-color: var(--tw-border-opacity);

// `

function Header() {
  // const navigate = useNavigate();
  
  return (
    <nav className="col-span-2 flex items-center justify-between px-6 h-24 py-4 border border-b-slate-500 md:col-span-full">
      <div className="flex gap-10 items-center">
        <span className="bg-gray-300 text-4xl rounded-full px-1 py-1">
          <IoMdMenu className="cursor-pointer"/>
        </span>
        {/* <span className="hidden min-[460px]:block text-4xl  px-1 py-1">
          <IoPerson />
        </span> */}
      </div>
      <div>
        <span className="relative">
          <form >
            <input
              placeholder="Search contact"
              className="w-72 h-12 rounded-full bg-slate-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-slate-500 text-center focus:ring-opacity-50 placeholder:text-2xl sm:w-72 sm:focus:w-48 md:w-96 focus:md:w-96"
            />
          </form>
          <CiSearch className="absolute transform translate-x-1/2 translate-y-1/2 top-0 left-3/4 text-slate-400 text-2xl font-bold"></CiSearch>
        </span>
      </div>

      <div className="hidden min-[420px]:flex gap-10 items-center">
        {/* <span className="text-4xl px-1 py-1">
          <IoIosHelpCircleOutline />
        </span>
        <span className=" text-4xl  px-1 py-1 cursor-pointer">
          <IoMdSettings onClick={() => navigate('/settings')} />
        </span> */}
        <span className="hidden min-[500px]:flex gap-8">
          <UserAvatar />
          <HeaderMenu />
        </span>
      </div>
        <span className="min-[500px]:hidden"><Logout /></span>
    </nav>
  );
}

export default Header;
