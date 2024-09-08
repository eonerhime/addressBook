import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import ContactsRow from "./ContactsRow";
import { useContacts } from "./useContacts";
import Menus from "../../ui/Menus";
import useScreenSize from "../../hooks/useScreenSize";
import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
import Pagination from "../../ui/Pagination";

const displaySize =  {
  large: '5% 30% 15% 30% 5%', /* >=680px */
  medium: '5% 40% 35% 5%', /* >=400px && <680px*/
  small: '5% 75% 5%', /* <400px */
}

function ContactsTable() {  
  const deviceScreen = useScreenSize();
  // const [ searchParama ] = useSearchParams();
  const { isLoading, contacts, count } = useContacts();
  const [ screenSize, setScreenSize ] = useState("");
  const [ getScreenSize, setGetScreenSize ] = useState('');

  // console.log(contacts);
  
  useEffect(function(){
    setScreenSize(deviceScreen);

      if(screenSize.width < 400) setGetScreenSize(displaySize.small);
     
      if(screenSize.width >= 400 && screenSize.width < 680) setGetScreenSize(displaySize.medium);
      
      if(screenSize.width >= 680) setGetScreenSize(displaySize.large);

  },[deviceScreen, screenSize])

  if (isLoading) return <Spinner />;

//   const filterValue = searchParama.get('sortBy') || 'lastName-asc';

//   let filteredContacts;
  
//   const modifier = filterValue === 'lastName-asc' ? 1 : -1;
  
//   if (filterValue === 'id') filteredContacts = contacts?.sort((a,b) => (a.id < b.id) * modifier );

//  if (filterValue === 'a-z')  filteredContacts = contacts?.sort((a,b) => (a.id < b.id) * modifier );

//  if (filterValue === 'a-z') filteredContacts = contacts.sort((a,b) => {if(a.lastName < b.lastName) return -1});

  // if (filterValue === 'z-a') filteredContacts = contacts?.sort((a,b) => (a.id < b.id) * modifier );

  // if (filterValue === 'z-a') filteredContacts = contacts.sort((a,b) => (b.lastName < a.lastName)  * modifier);

  if(!contacts?.length) return <Table.Body data={contacts}/>
  
  return (
    <Menus>
      <Table columns={getScreenSize}>
        <Table.Header>
          <div>SN</div>
          <div>Name </div>
          <div className="hidden min-[400px]:block">Number</div>
          <div className="hidden min-[680px]:block">Email</div>
        </Table.Header>
        
        <Table.Body 
          data={contacts} 
          render={(contact, index) => <ContactsRow contact={contact} index={index} count={count} key={contact.id}/> }/>

          <Table.Footer>
            <Pagination count={count}/>
          </Table.Footer>
      </Table>
    </Menus>
  );
}
export default ContactsTable;
