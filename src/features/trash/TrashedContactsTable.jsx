import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

import { useEffect, useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import { useTrashed } from "./useTrashed";
import TrashedRow from "./TrashedRow";

const displaySize = {
  large: "5% 30% 15% 30% 5%" /* >=680px */,
  medium: "5% 40% 35% 5%" /* >=400px && <680px*/,
  small: "5% 75% 5%" /* <400px */,
};

function TrashedContactsTable() {
  const deviceScreen = useScreenSize();
  const [screenSize, setScreenSize] = useState("");
  const [getScreenSize, setGetScreenSize] = useState("");
  const { isLoading, trashedContacts, count } = useTrashed();

  useEffect(
    function () {
      setScreenSize(deviceScreen);

      if (screenSize.width < 400) setGetScreenSize(displaySize.small);

      if (screenSize.width >= 400 && screenSize.width < 680)
        setGetScreenSize(displaySize.medium);

      if (screenSize.width >= 680) setGetScreenSize(displaySize.large);
    },
    [deviceScreen, screenSize, count, trashedContacts?.length],
  );

  if (isLoading) return <Spinner />;

  if (!trashedContacts?.length) return <Table.Body data={trashedContacts} />;
  // debugger; // eslint-disable-line no-debugger

  return (
    <>
      <Menus>
        <Table columns={getScreenSize}>
          <Table.Header>
            <div>SN</div>
            <div>Name </div>
            <div className="hidden min-[400px]:block">Number</div>
            <div className="hidden min-[680px]:block">Email</div>
          </Table.Header>

          <Table.Body
            data={trashedContacts}
            render={(trashedContacts, index) => (
              <TrashedRow
                contact={trashedContacts}
                index={index}
                count={count}
                key={trashedContacts.id}
              />
            )}
          />

          <Table.Footer>
            <Pagination count={count} />
          </Table.Footer>
        </Table>
      </Menus>
    </>
  );
}
export default TrashedContactsTable;
