import { MdOutlineMessage } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [ name, setName] = useState("Anshu");
  const [ email, setEmail] = useState("ashwin123@gmail.com");
  const [ text, setText] = useState("hello");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log({
      name,email,text
    });
     
  };
    return (
        <section className={styles.container}>
          <div className={styles.contact_form}>
            <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px"/> } />
            <Button 
              text="VIA CALL" icon={<MdOutlinePhone fontSize="24px"/>} />
          </div>
             <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdOutlineEmail fontSize="24px"/>} />
          
          <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea name="text" rows="8" />
            </div>
            <div style={{
            display: "flex",
            justifyContent: "end"
          }}>
            <Button text="SUBMIT" type="submit"/>
          </div>

          
          </form>
          
          

          </div>
          <div className={styles.contact_image}>
            <img src="/Images/contact.svg" alt="contact_img" />
          </div>
        </section>
    );
};

export default ContactForm;