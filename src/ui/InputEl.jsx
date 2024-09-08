import { FaPhoneAlt, FaFacebook, FaInstagram, FaTiktok, FaLinkedin, FaPinterest, FaYoutube, FaSnapchat    } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io";

function InputEl({type, placceholder}) {

  if(type==='prefix')  return (
    <>
       <span></span>
       <input type="text" placeholder="Prefix" className="rounded-md p-1 border border-slate-400 text-slate-800 w-full"/>
       <IoMdArrowDropdown className="text-slate-800 text-2xl"></IoMdArrowDropdown>
    </>
  )
 
  if(type==='person')  return (
    <>
      <IoPersonOutline className="text-slate-800 text-xl"></IoPersonOutline>
      <input type="text" placeholder="First Name" className="rounded-md p-1 border border-slate-400 text-slate-800 w-full"/>
      <IoMdArrowDropup className="text-slate-800 text-2xl"></IoMdArrowDropup>
    </>
  )
 
  if(type==='middleName')  return (
    <>
      <span></span>
      <input type="text" placeholder="Middle Name" className="rounded-md p-1 border border-slate-400 text-slate-800 w-full"/>
      <span></span>
    </>
  )
 
  if(type==='lastName')  return (
    <>
      <span></span>
      <input type="text" placeholder="Last Name" className="rounded-md p-1 border border-slate-400 text-slate-800 w-full"/>
      <span></span>
    </>
  )
 
  if(type==='suffix')  return (
    <>
      <span></span>
      <input type="text" placeholder="Suffix" className="rounded-md p-1 border border-slate-400 text-slate-800 w-full"/>
      <span></span>
    </>
  )
 
  if(type==='email')  return (
    <>
      <MdOutlineEmail className="text-slate-800 text-xl justify-self-center"></MdOutlineEmail>
      <input type="email" placeholder="Email" className="rounded-md p-1 border border-slate-400 text-slate-800 w-full"/>
      <span></span>
    </>
  )
 
  if(type==='dob')  return (
    <>
      <LiaBirthdayCakeSolid className="text-slate-800 text-xl justify-self-center"></LiaBirthdayCakeSolid>
      <input type="date" placeholder="Birthday" className="rounded-md p-1 border border-slate-400 text-slate-800 w-full"/>
      <span></span>
    </>
  )
 
  if(type==='phoneNumber')  return (
    <>
      <FaPhoneAlt className="text-slate-800 text-xl justify-self-center"></FaPhoneAlt>
      <input type="tel" placeholder="Phone Number" className="rounded-md p-1 border border-slate-400 text-slate-800 w-full"/>
      <span></span>
    </>
  )

  if(type==='fb')  return (
    <>
      <FaFacebook  className="text-slate-800 text-xl justify-self-center"></FaFacebook>
      <input type="text" placeholder={placceholder} className="rounded-md p-1 border border-slate-400 text-slate-800 w-full"/>
    </>
  )

  if(type==='ig')  return (
    <>
      <FaInstagram   className="text-slate-800 text-xl justify-self-center" ></FaInstagram>
      <input type="text" placeholder={placceholder} className="rounded-md p-1 border border-slate-400 text-slate-800 w-full"/>
    </>
  )

  if(type==='x')  return (
    <>
      <FaXTwitter   className="text-slate-800 text-xl justify-self-center" ></FaXTwitter>
      <input type="text" placeholder={placceholder} className="rounded-md p-1 border border-slate-400 text-slate-800 w-full"/>
    </>
  )

  if(type==='tiktok')  return (
    <>
      <FaTiktok    className="text-slate-800 text-xl justify-self-center" ></FaTiktok>
      <input type="text" placeholder={placceholder} className="rounded-md p-1 border border-slate-400 text-slate-800 w-full"/>
    </>
  )

  if(type==='linkedin')  return (
    <>
      <FaLinkedin className="text-slate-800 text-xl justify-self-center" ></FaLinkedin>
      <input type="text" placeholder={placceholder} className="rounded-md p-1 border border-slate-400 text-slate-800 w-full"/>
    </>
  )

  if(type==='pinterest')  return (
    <>
      <FaPinterest className="text-slate-800 text-xl justify-self-center" ></FaPinterest>
      <input type="text" placeholder={placceholder} className="rounded-md p-1 border border-slate-400 text-slate-800 w-full"/>
    </>
  )

  if(type==='youtube')  return (
    <>
      <FaYoutube    className="text-slate-800 text-xl justify-self-center" ></FaYoutube>
      <input type="text" placeholder={placceholder} className="rounded-md p-1 border border-slate-400 text-slate-800 w-full"/>
    </>
  )

  if(type==='snapchat')  return (
    <>
      <FaSnapchat  className="text-slate-800 text-xl justify-self-center" ></FaSnapchat>
      <input type="text" placeholder={placceholder} className="rounded-md p-1 border border-slate-400 text-slate-800 w-full"/>
    </>
  )
}

export default InputEl