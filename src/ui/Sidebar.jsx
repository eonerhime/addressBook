import { IoMdAdd } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdLabelOutline } from "react-icons/md";

import Modal from "./Modal";
import Button from "../ui/Button";
import { HiOutlineCog6Tooth, HiTrash } from "react-icons/hi2";
import CreateContactForm from "../features/contacts/CreateContactForm";

function Sidebar() {

  return (
    <>
      <aside className="h-full flex flex-col items-center  gap-12 pt-[4.8rem] px-8 py-4 md:flex md:flex-col md:items-start border border-r-slate-500 ">
        <div className="flex gap-2 items-center justify-star hover:text-blue-600">
        <Modal>
            <Modal.Open opens="contact-form">
              <span>
                <IoMdAdd className="text-slate-500 active:text-blue-600 text-4xl cursor-pointer"/>
              </span>
            </Modal.Open>
            <Modal.Window name="contact-form">
              <CreateContactForm />
            </Modal.Window>
          </Modal>
        
          <Modal>
            <Modal.Open opens="contact-form">
              <Button className="hidden md:flex" size='link' option='link'>Create Contact</Button>
            </Modal.Open>
            <Modal.Window name="contact-form">
              <CreateContactForm />
            </Modal.Window>
          </Modal>
        </div>

        <div className="flex gap-2 items-center justify-start">
          <span>
            <FaPeopleGroup className="text-slate-500 text-4xl"/>
          </span>
          <Button className="hidden md:flex" size='link' option='link'>Contacts</Button>
        </div>

        <div className="flex gap-2 items-center justify-start">
          <span>
            <HiTrash className="text-slate-500 text-4xl"/>
          </span>
          <Button className="hidden md:flex" size='link' option='link'>Trash</Button>
        </div>

        <div className="flex gap-2 items-center justify-start">
          <span>
            <MdLabelOutline className="text-slate-500 text-4xl"/>
          </span>
          <Button className="hidden md:flex" size='link' option='link'>Labels</Button>
        </div>

        <div className="flex gap-2 items-center justify-start">
          <span>
            <HiOutlineCog6Tooth className="text-slate-500 text-4xl"/>
          </span>
          <Button className="hidden md:flex" size='link' option='link'>Settings</Button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
