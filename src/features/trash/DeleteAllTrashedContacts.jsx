import Button from "../../ui/Button";
import ConfirmDeleteAllTrashed from "../../ui/ConfirmDeleteAllTrashed";
import Modal from "../../ui/Modal";
import { useDeleteAllTrashedContact } from "./useDeleteAllTrashedContact";

function DeleteAllTrashedContacts() {
  const { isSuccess: isDeleted, deleteAllTrashedContact } =
    useDeleteAllTrashedContact();

  return (
    <div>
      <Modal>
        <Modal.Open opens="deleteAll">
          <Button>Delete Trashed Contacts Permanently</Button>
        </Modal.Open>

        <Modal.Window name="deleteAll">
          <ConfirmDeleteAllTrashed
            resourceName="contacts"
            disabled={isDeleted}
            onConfirm={() => deleteAllTrashedContact()}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default DeleteAllTrashedContacts;
