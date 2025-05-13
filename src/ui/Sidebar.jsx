import { IoMdAdd } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdLabelOutline } from "react-icons/md";

import Modal from "./Modal";
import Button from "../ui/Button";
import { HiOutlineCog6Tooth, HiTrash } from "react-icons/hi2";
import CreateContactForm from "../features/contacts/CreateContactForm";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContacts } from "../features/contacts/useContacts";
// import Uploader from "../data/Uploader";
import { useTrashed } from "../features/trash/useTrashed";

const StyledAside = styled.aside`
  background-color: var(--color-grey-0);
  border-right: 0.1rem solid var(--color-grey-400);
`;

function Sidebar() {
  const { count: contactsCount } = useContacts();
  const { count: trashedCount } = useTrashed();

  const darkModeStyle = {
    color: "var(--color-grey-600)",
  };

  const navigate = useNavigate();

  return (
    <StyledAside className="flex h-full flex-col items-center gap-12 px-8 py-4 pt-[4.8rem] md:flex md:flex-col md:items-start">
      <div className="justify-star flex items-center gap-2 hover:text-blue-600">
        <Modal>
          <Modal.Open opens="contact-form">
            <span>
              <IoMdAdd
                style={darkModeStyle}
                className="cursor-pointer text-4xl active:text-blue-600"
              />
            </span>
          </Modal.Open>
          <Modal.Window name="contact-form">
            <CreateContactForm />
          </Modal.Window>
        </Modal>

        <Modal>
          <Modal.Open opens="contact-form">
            <Button
              style={darkModeStyle}
              className="hidden md:flex"
              size="link"
              option="link"
            >
              Create Contact
            </Button>
          </Modal.Open>
          <Modal.Window name="contact-form">
            <CreateContactForm />
          </Modal.Window>
        </Modal>
      </div>

      <div className="flex items-center justify-start gap-2">
        <span>
          <FaPeopleGroup style={darkModeStyle} className="text-4xl" />
        </span>
        <Button
          style={darkModeStyle}
          className="hidden md:flex"
          size="link"
          option="link"
          onClick={() => navigate("/contacts")}
        >
          Contacts ({contactsCount})
        </Button>
      </div>

      <div className="flex items-center justify-start gap-2">
        <span>
          <HiTrash style={darkModeStyle} className="text-4xl" />
        </span>
        <Button
          style={darkModeStyle}
          className="hidden md:flex"
          size="link"
          option="link"
          onClick={() => navigate("/trashed")}
        >
          Trash ({trashedCount === undefined ? 0 : trashedCount})
        </Button>
      </div>

      <div className="flex items-center justify-start gap-2">
        <span>
          <MdLabelOutline style={darkModeStyle} className="text-4xl" />
        </span>
        <Button
          style={darkModeStyle}
          className="hidden md:flex"
          size="link"
          option="link"
          onClick={() => navigate("/labels")}
        >
          Labels
        </Button>
      </div>

      <div className="flex items-center justify-start gap-2">
        <span>
          <HiOutlineCog6Tooth style={darkModeStyle} className="text-4xl" />
        </span>
        <Button
          style={darkModeStyle}
          className="hidden md:flex"
          size="link"
          option="link"
          onClick={() => navigate("/settings")}
        >
          Settings
        </Button>
      </div>

      {/* <Uploader /> */}
    </StyledAside>
  );
}

export default Sidebar;
