import { IoMdClose} from "react-icons/io";

function ImgEl({onClick}) {
  return (
    <>
      <img src="/src/img/profile.png" alt=""  className="w-1/4 rounded-full"/>
      
      <IoMdClose onClick={onClick} className="text-red-400 bg-zinc-100 rounded-full h-10 w-10 p-2 text-2xl hover:bg-red-400 hover:text-zinc-100 transition-all cursor-pointer"></IoMdClose>
    </>
  )
}

export default ImgEl
