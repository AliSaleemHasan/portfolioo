import Button from "./Button";
import classes from "../../styles/ContactForm.module.css";
import { formButtonStyle } from "../../styles/buttonStyles";
interface ContactFormProps {}
const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <form className={classes.contactForm}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="message">message</label>
      <textarea id="message" name="message" />
      <Button
        text="Submit"
        style={formButtonStyle("var(--pink)", "var(--text-white)")}
        onClick={() => {}}
      ></Button>
    </form>
  );
};

export default ContactForm;
