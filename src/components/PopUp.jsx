import { motion } from "framer-motion";
import PopupStyles from "./PopUp.module.css";
import React, { useState } from "react";
import styles from "../pages/Contact.module.css";
import Animator from "../components/Animator";
const PopUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={PopupStyles.popup}
    >
      <div className={PopupStyles.popup_content}>
        <button onClick={onClose} className={PopupStyles.CloseButton}>
          <i className="material-symbols-rounded">close</i>
        </button>
        <Contact />
      </div>
    </motion.div>
  );
};

export default PopUp;

export const Contact = () => {
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({  email: "", password: "" });
    alert("Thanks for joining us!");
  };

  return (
    <div className={PopupStyles.container}>
      <h1 className={PopupStyles.title}>Login</h1>
      <div className={PopupStyles.contentWrapper}>
        <Animator type="scale">
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.label}>
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <span className={PopupStyles.wrongPassword}>
                Incorrect credentials
              </span>
              <button type="submit" className={styles.submitButton}>
                Login
              </button>
              <span style={{ textAlign: "center" }}>or</span>
              <button
                type="submit"
                className={styles.submitButton}
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  marginInline: "auto",
                }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </Animator>
      </div>
    </div>
  );
};
