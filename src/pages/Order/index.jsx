import React, { useState, useEffect } from "react";
import './styles.css';
import {db} from "./firebase";


const Order = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>ADD YOUR DETAILS 🍽️</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>ADDRESS</label>
      <input
        placeholder="ADDRESS"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>ANY INSTRUCTIONS FOR YOUR FOOD</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  )
}

export default Order