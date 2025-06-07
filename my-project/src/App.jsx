 import { AiFillPlusCircle } from "react-icons/ai";
 import { IoSearchOutline } from "react-icons/io5";
 import Navbar from "./Components/Navbar";
 import { useEffect, useState } from "react";
 import { collection, getDocs } from "firebase/firestore";
 import {db} from "./config/firebase";
 import ContactCard from "./Components/ContactCard";
 import Modal from "./Components/Modal";
import AddAndUpdateContact from "./Components/AddAndUpdateContact";


  const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try{
        const contactsRef = collection(db,"contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
        };
        });
        setContacts(contactLists);
      }catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

   return (
     <>
        <div className="max-w-[370px] mx-auto px-4"> 
       <Navbar />
       <div className="flex gap-2">
         <div className="flex relative items-center flex-grow">
        <IoSearchOutline className="absolute ml-1 text-white text-3xl" />
          <input type="text" className="h-10 rounded-md border border-white bg-transparent flex-grow text-white pl-9" />
        </div>
  
        <AiFillPlusCircle onClick={onOpen} className="text-5xl cursor-pointer text-white"/>
       </div>
       <div className="mt-4 flex flex-col gap-3">
        {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact}/>
          ))}
       </div>
     </div>
     <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
     </>
   );
 };
 export default App;