import Button from "../button/Button";
import classes from "./ContactForm.module.css";
import { formButtonStyle } from "../button/buttonStyles";
interface ContactFormProps {
  color: string;
  background: string;
}
const ContactForm: React.FC<ContactFormProps> = ({ color, background }) => {
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
        style={formButtonStyle(background, color)}
        onClick={() => {}}
      ></Button>
    </form>
  );
};

export default ContactForm;
