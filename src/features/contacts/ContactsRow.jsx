import styled from "styled-components";

import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import { PAGE_SIZE } from "../../utils/constants";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteContact } from "./useDeleteContact";
import Menus from "../../ui/Menus";
import { HiFolderOpen, HiPencil, HiTrash } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CreateContactForm from "./CreateContactForm";
import EditContactView from "./EditContactView";

const Img = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  max-width: 100%;
  max-height: 100%;
  object-fit: fill;
  border-radius: 50%;
  aspect-ratio: 3 / 2;
  object-position: center;
  transform: scale(1.25) translateX(-7px);
`;

const Name = styled.div`
  gap: 1rem;
  display: flex;
  max-width: 100%;
  align-items: center;
  flex-direction: row;
  color: var(--color-grey-600);
`;

const Email = styled.div`
  /* font-weight: 600; */
`;

const Phone = styled.div`
  /* font-weight: 500; */
  color: inherit;
`;

function ContactsRow({contact, index} ) {
  const [searchParams] =useSearchParams();
  const navigate = useNavigate();
  console.log(navigate);
  
  const { isSuccess, deleteContact } = useDeleteContact();
  const [sn, setSn] = useState(1);
 
  const curPage = !searchParams.get('page') ? 1 : Number(searchParams.get('page'))

  useEffect(function(){
    if (curPage === 1) setSn(() => index + 1)
    
    if (curPage !== 1) setSn(() => ((PAGE_SIZE * (curPage - 1)) + 1))
  },[index, curPage])

  const {id: contactId, firstName, lastName, image, email, phone} = contact;  

  return    ( 
    <Table.Row>
      <div>{sn}.</div>

      <Modal>
        <Modal.Open opens="view-contact">
          <Name className="justify-start">
            <Img src={image} alt={firstName} className="hidden min-[300px]:block"/>
              {firstName} {lastName}
          </Name>
        </Modal.Open>
        
        <Modal.Open opens="view-contact">
          <Phone className="hidden min-[400px]:grid">{phone}</Phone>
        </Modal.Open>

        <Modal.Open opens="view-contact">
          <Email className="hidden min-[680px]:block">{email}</Email>
        </Modal.Open>

        <Modal.Window name="view-contact">
          <EditContactView  contactToUpdate={contact}/>
        </Modal.Window>
      </Modal>

      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={contactId} />

            <Menus.List id={contactId}>
              <Modal.Open opens="view-contact">
                <Menus.Button icon={<HiFolderOpen />}>View</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="contact-form">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="view-contact">
              <EditContactView contactToUpdate={contact}/>
            </Modal.Window>

            <Modal.Window name="contact-form">
              <CreateContactForm contactToUpdate={contact}/>
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete resourceName="contact" disabled={isSuccess} onConfirm={() => deleteContact(contactId)}/>
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>

    </Table.Row>
  )
}

export default ContactsRow;
