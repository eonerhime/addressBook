import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
// import { IoPerson } from "react-icons/io5";
// import { IoMdMenu, IoMdSettings, IoIosHelpCircleOutline, IoMdCheckmarkCircleOutline } from "react-icons/io";

import {} from "react-icons/io";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import Logout from "../features/authentication/Logout";
import styled from "styled-components";

const StyledHeader = styled.nav`
  background-color: var(--color-grey-0);
`;

const StyledSpan = styled.span`
  background-color: var(--color-grey-600);
`;

const StyledInput = styled.input`
  background-color: var(--color-grey-600);
`;

function Header() {
  // const navigate = useNavigate();

  const darkModeStyle = {
    fill: "var(--color-grey-100)",
  };

  return (
    <StyledHeader className="col-span-2 flex h-24 items-center justify-between border border-b-slate-500 px-6 py-4 md:col-span-full">
      <div className="flex items-center gap-10">
        <StyledSpan className="rounded-full px-1 py-1 text-4xl">
          <IoMdMenu style={darkModeStyle} />
        </StyledSpan>
        {/* <span className="hidden min-[460px]:block text-4xl  px-1 py-1">
          <IoPerson />
        </span> */}
      </div>
      <div>
        <span className="relative">
          <form onSubmit={(e) => e.preventDefault()}>
            <StyledInput
              placeholder="Search contact"
              className="h-12 w-72 rounded-full px-4 py-2 pt-4 text-center text-2xl text-slate-800 transition-all duration-300 placeholder:text-2xl placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-slate-500 focus:ring-opacity-50 sm:w-72 sm:focus:w-48 md:w-96 focus:md:w-96"
            />
          </form>
          <CiSearch className="absolute left-3/4 top-0 translate-x-1/2 translate-y-1/2 transform text-2xl font-bold text-slate-400"></CiSearch>
        </span>
      </div>

      <div className="hidden items-center gap-10 min-[420px]:flex">
        {/* <span className="text-4xl px-1 py-1">
          <IoIosHelpCircleOutline />
        </span>
        <span className=" text-4xl  px-1 py-1 cursor-pointer">
          <IoMdSettings onClick={() => navigate('/settings')} />
        </span> */}
        <span className="hidden gap-8 min-[500px]:flex">
          <UserAvatar />
          <HeaderMenu />
        </span>
      </div>
      <span className="min-[500px]:hidden">
        <Logout />
      </span>
    </StyledHeader>
  );
}

export default Header;
