import Row from "../ui/Row";
import Heading from "../ui/Heading";
import AddContact from "../features/contacts/AddContact";
import ContactsTable from "../features/contacts/ContactsTable";
import ContactTableOperations from "../features/contacts/ContactTableOperations";

function Contacts() {

   return (
    <>
      <Row type='horizontal' className="text-2xl" >
        <Heading as="h1">Saved Contacts</Heading>
        <ContactTableOperations />
      </Row>
      <Row>
        <ContactsTable />
        <AddContact />
     </Row>
     </>
  );
}

export default Contacts;
