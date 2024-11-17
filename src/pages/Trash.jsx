import Row from "../ui/Row";
import Heading from "../ui/Heading";
import ContactTableOperations from "../features/contacts/ContactTableOperations";
import TrashedContactsTable from "../features/trash/TrashedContactsTable";
import { useTrashed } from "../features/trash/useTrashed";
import DeleteAllTrashedContacts from "../features/trash/DeleteAllTrashedContacts";

function Trashed() {
  const { count } = useTrashed();

  const darkModeStyle = {
    backgroundColor: "var(--color-grey-0)",
  };

  return (
    <div style={darkModeStyle}>
      <Row
        type="horizontal"
        className="flex text-2xl max-[400px]:flex-col max-[400px]:!items-start"
      >
        <Heading as="h1">All deleted Contacts</Heading>
        <ContactTableOperations />
      </Row>
      <Row>
        <TrashedContactsTable />
        {count !== 0 && <DeleteAllTrashedContacts />}
      </Row>
    </div>
  );
}

export default Trashed;
