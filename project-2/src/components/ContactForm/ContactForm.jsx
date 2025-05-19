import { MdOutlineMessage } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./Contact.module.css";

const ContactForm = () => {
    return (
        <section className={styles.container}>
          <div className={styles.contact_form}>
            <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px"/> } />
            <Button text="VIA CALL" icon={<MdOutlinePhone fontSize="24px"/>} />
          </div>
             <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdOutlineEmail fontSize="24px"/>} />
          
          <form>
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
          </form>
          
          <div style={{
            display: "flex",
            justifyContent: "end"
          }}>
            <Button text="SUBMIT" />
          </div>

          </div>
          <div className={styles.contact_image}></div>
        </section>
    );
};

export default ContactForm;