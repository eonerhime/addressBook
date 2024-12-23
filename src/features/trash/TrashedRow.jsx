import styled from "styled-components";

import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import { PAGE_SIZE } from "../../utils/constants";
import Menus from "../../ui/Menus";
import { HiTrash } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useRestoreContact } from "./useRestoreContact";
import ConfirmRestore from "../../ui/ConfirmRestore";
import { FaTrashRestore } from "react-icons/fa";
import ConfirmDeleteTrashed from "../../ui/ConfirmDeleteTrashed";
import { useDeleteTrashedContact } from "./useDeleteTrashedContact";

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

function TrashedRow({ contact, index }) {
  const [searchParams] = useSearchParams();
  const { isSuccess: isRestored, restoreContact } = useRestoreContact();
  const { isSuccess: isDeleted, deleteTrashedContact } =
    useDeleteTrashedContact();

  const [sn, setSn] = useState(1);

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  useEffect(
    function () {
      if (curPage === 1) setSn(() => index + 1);

      if (curPage > 1) setSn(() => PAGE_SIZE * (curPage - 1) + (index + 1));
    },
    [index, curPage],
  );

  const { id: contactId, firstName, lastName, image, email, phone } = contact;

  return (
    <Table.Row>
      <div className="cursor-default">{sn}.</div>

      <Name className="justify-start">
        <Img src={image} alt={firstName} className="hidden min-[300px]:block" />
        {firstName} {lastName}
      </Name>

      <Phone className="hidden min-[400px]:grid">{phone}</Phone>

      <Email className="hidden min-[680px]:block">{email}</Email>

      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={contactId} />

            <Menus.List id={contactId}>
              <Modal.Open opens="restore">
                <Menus.Button icon={<FaTrashRestore />}>Restore</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>
                  Delete Permanently
                </Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="restore">
              <ConfirmRestore
                resourceName="contact"
                disabled={isRestored}
                onConfirm={() => restoreContact(contactId)}
              />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDeleteTrashed
                resourceName="contact"
                disabled={isDeleted}
                onConfirm={() => deleteTrashedContact(contactId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default TrashedRow;
