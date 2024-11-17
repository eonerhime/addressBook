import Row from "../ui/Row";
import Heading from "../ui/Heading";
import AddContact from "../features/contacts/AddContact";
import ContactsTable from "../features/contacts/ContactsTable";
import ContactTableOperations from "../features/contacts/ContactTableOperations";

function Contacts() {
  const darkModeStyle = {
    backgroundColor: "var(--color-grey-0)",
  };

  return (
    <div style={darkModeStyle}>
      <Row
        type="horizontal"
        className="flex text-2xl max-[400px]:flex-col max-[400px]:!items-start"
      >
        <Heading as="h1">Saved Contacts</Heading>
        <ContactTableOperations />
      </Row>
      <Row>
        <ContactsTable />
        <AddContact />
      </Row>
    </div>
  );
}

export default Contacts;
