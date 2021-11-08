import { FormEvent, useState } from "react";
import classes from "styles/ContactForm.module.css";
import { formButtonStyle } from "styles/buttonStyles";
interface ContactFormProps {}
const ContactForm: React.FC<ContactFormProps> = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  let submitForm = async (e: FormEvent) => {
    e.preventDefault();
    let data = {
      name,
      email,
      message,
    };
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setEmail("");
          setName("");
          setMessage("");
        } else {
          setError(res.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={submitForm} className={classes.contactForm}>
      <p className="paragraph">{error}</p>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
        id="name"
      />
      <label htmlFor="email">email</label>
      <input
        type="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        id="email"
      />
      <label htmlFor="message">message</label>
      <textarea
        value={message}
        required
        onChange={(e) => setMessage(e.target.value)}
        id="message"
      />

      <button
        type="submit"
        style={formButtonStyle("var(--pink)", "var(--text-white)")}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
