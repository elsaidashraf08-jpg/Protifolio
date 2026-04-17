import React from "react";
import styles from "./Contact.module.css";
import contactImg from "../../assets/Image/12.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Contact() {
   AOS.init({
    duration: 1000,
    once: true,
  });
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = () => {
    if (formData.name && formData.email && formData.phone.length === 11) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = (e) => {
  
    e.preventDefault();
    setCheck(true);
    console.log(formData);
    console.log(handleChange());
    handleChange() && sentEmail();
  };

  const sentEmail = () => {
    setLoading(true);
    emailjs
      .send(
        "service_rvz8kdc",
        "template_wy7xahu",
        formData,
        "GHkRa89a564V4fFeC",
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Failed to send message.");
        },
      );
  };

  return (
    <>
      <section className={styles.contact}>
        <div className="container  " data-aos="fade-up">
          <div
            className={`${styles.title} bg-white rounded-5 d-flex justify-content-center justify-content-xl-start align-items-center   `}
          >
            <span>Contact Us</span>

            <form
              className={`d-flex flex-column gap-4 ${styles.form}`}
              onSubmit={handleSubmit}
            >
              {/* name */}
              <input
                type="text"
                placeholder="Your Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {formData.name.length === 0 && check && (
                <p className="text-danger m-0 ">Please enter your name</p>
              )}

              {/* email */}
              <div className="d-flex gap-4 flex-column flex-md-row ">
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`  `}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                {/* phone */}
                <input
                  type="tel"
                  placeholder="Your Phone"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                {formData.phone.length < 11 && check && (
                  <p className="text-danger  m-0  ">
                    Please enter your phone number
                  </p>
                )}
                {}
              </div>

              {/* message */}
              <textarea
                placeholder="Your Message"
                className={` ${styles.textarea}`}
                rows="5"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
              <button type="submit" className={`btn  `}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
            <div className={styles.imgPerson}>
              <img src={contactImg} alt="" className="d-none d-xl-block" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
