import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateContactForm from "./CreateContactForm";

function AddContact() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="contact-form">
          <Button>Add New Contact</Button>
        </Modal.Open>
        <Modal.Window name="contact-form">
          <CreateContactForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddContact;
