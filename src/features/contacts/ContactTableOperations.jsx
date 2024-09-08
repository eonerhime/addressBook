// import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      {/* <p>Sort by:</p> */}
      {/* <Filter 
        filterField='status' 
        options={[
          {value: 'id', label: 'id'},
          // {value: 'name', label: 'name'},
          // {value: 'phone', label: 'phone'},
          // {value: 'email', label: 'email'},
        ]}/> */}
      <SortBy
        options={[
          { value: "lastName-asc", label: "Sort by last name (a-z)" },
          { value: "lastName-desc", label: "Sort by last name (z-a)" },
          { value: "phone-asc", label: "Sort by phone (a-z)" },
          { value: "phone-desc", label: "Sort by phone (z-a)" },
          { value: "email-asc", label: "Sort by email (a-z)" },
          { value: "email-desc", label: "Sort by email (z-a)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
