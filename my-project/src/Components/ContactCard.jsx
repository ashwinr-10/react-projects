import { deleteDoc,doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";


const ContactCard = ({contact}) => {

    const deleteContact = async (id) => {
      try {
        await deleteDoc(doc(db, "contacts", id));
       } catch (error) {
          console.log(error);
      }
    };

    return (
        <div key={contact.id} className="bg-yellow-200 flex items-center justify-between rounded-lg p-2">
            <div className="flex items-center gap-1.5 ">
                <HiOutlineUserCircle className="text-orange-400 text-4xl" />
              <div className="">
                <h2 className="font-medium">{contact.name}</h2>
                <p className="">{contact.email}</p>
              </div>
            </div>
            <div className="flex text-3xl">
              <RiEditCircleLine />
              <IoMdTrash onClick={() => deleteContact(contact.id)} className="text-orange-400"/>
            </div>

          </div>
    )
}

export default ContactCard;