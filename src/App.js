


import { Contacts } from './components/Contacts';

import { Form } from './components/Form';
import { Filter } from './components/Filter';
import style from './components/phonebook.module.css';
import { useState } from 'react';
//import { useLocalStorage } from './hooks/useLocalStorage';


function App() {
//useLocalStorage
  const [contacts, setContacts] = useState('setContacts', '')
  const [filter, setFilter] = useState('')


const findContacts = () => { 

const normalizedFilter = filter.toLowerCase()
return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter) )

  
}

const deleteContacts = (id) => {
 setContacts(prevState =>  [...prevState.filter(contact => contact.id !== id)] )
}


const handleSubmit = ({name, id,  number}) => {
 
  const findName = contacts.find(contact => contact.name === name)
  if (findName){
    alert('This name is already in the phone book')
  } else { const contact = { name, number, id}
   setContacts(prevState => [contact, ...prevState] )}

}


 const visibleContacts = findContacts()

   return (
     
<>

<Form 
 onAddContacts={handleSubmit}
/>
 <h2 className={style.contact}>Contacts</h2>

<Filter 
value={filter}
onChange={(e) => setFilter(e.target.value)}
/>


 <Contacts 
contacts={visibleContacts}
onDeleteContacts = {deleteContacts}

/>   


</>
)
}


export default App;
