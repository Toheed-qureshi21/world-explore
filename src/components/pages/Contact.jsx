import { useContext, useState } from "react"
import { OurContext } from "../../context/Provider";
import Loader from "../UI/Loader";
import { useNavigation } from "react-router-dom";
const Contact = () => {
  const { theme } = useContext(OurContext);
  const navigation = useNavigation();
  const [user, setUser] = useState({
    name: "",
    gmail: "",
    message: "",
  });
  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));

  }
  const handleFormSubmission = (event) => {
    event.target.submit();
    setTimeout(() => {
      setUser({ name: "", gmail: "", message: "" });
    }, 0);

  };


  if (navigation.state === "loading") {
    return <Loader />
  }
  return (
    <section className={`container grid grid_two--cols section-contact ${theme === "dark" ? "theme-dark" : "theme-light"}`} >
      <section className="contact-inside" >

        <h2>Contact Us</h2>
        <h3>Get in touch with us. We are always here to help you.</h3>

        <div>
          <form className="form" action="https://formspree.io/f/xeoqwllb" method="POST" onSubmit={handleFormSubmission}>
            <label htmlFor="name">Full Name</label>
            <input placeholder="Enter your Name" type="text" name="name" id="name" value={user.name} onChange={(e) => handleInput(e)} required />

            <label htmlFor="gmail">Email</label>
            <input placeholder="Enter your email" type="email" name="gmail" id="gmail" value={user.gmail} onChange={(e) => handleInput(e)} required />

            <label htmlFor="message">Message</label>
            <div>
              <textarea name="message" id="message" placeholder="Enter your Message here" required value={user.message} onChange={(e) => handleInput(e)} ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <section className="contact-content" >
        <img src="final-contact-image.webp" alt="Contact image" className="contact-img" />
      </section>
    </section>
  )
}
export default Contact;