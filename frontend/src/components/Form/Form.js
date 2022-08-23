import classes from "./_form.module.scss";
import "../../base/_utilities.scss";
import "../../layout/_grid.scss";
import "../../base/_typography.scss";
import btnClasses from "../Button/_button.module.scss";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const axios = require("axios").default;
const Form = (props) => {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const submit = (e) => {
    e.preventDefault();

    if (props.type === "subscribe") {
      axios
        .post("http://localhost:4000/northino/addSubscriber", {
          full_name: fullName,
          email_address: emailAddress,
        })
        .then(function (response) {
          setFullName("");
          setEmailAddress("");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (props.type === "contact") {
      const message_id = uuidv4();
      axios
        .post("http://localhost:4000/northino/addMessage", {
          email_address: emailAddress,
          message: userMessage,
          message_id: message_id,
          phone_number: phoneNumber,
        })
        .then(function (response) {
          setEmailAddress("");
          setUserMessage("");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    setFullName("");
    setEmailAddress("");
    setUserMessage("");
    setPhoneNumber("");
  };
  const fullnameOnChangeHandler = (e) => {
    setFullName(e.target.value);
  };
  const emailOnChangeHandler = (e) => {
    setEmailAddress(e.target.value);
  };
  const messageOnChangeHandler = (e) => {
    setUserMessage(e.target.value);
  };
  const phoneNoOnChangeHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const genderOnChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <form action="#" className={classes.form} autoComplete="off">
      {props.type !== "subscribe" ? (
        ""
      ) : (
        <div className={classes.form__group}>
          <input
            type="text"
            className={classes.form__input}
            placeholder="Full Name"
            id="Full Name"
            value={fullName}
            onChange={fullnameOnChangeHandler}
            required
          />
          <label htmlFor="Full Name" className={classes.form__label}>
            {" "}
            Full Name
          </label>
        </div>
      )}
      {props.type !== "contact" ? (
        ""
      ) : (
        <div className={classes.form__group}>
          <input
            type="text"
            className={classes.form__input}
            placeholder="Phone Number"
            id="Phone Number"
            value={phoneNumber}
            onChange={phoneNoOnChangeHandler}
            required
          />
          <label htmlFor="Phone Number" className={classes.form__label}>
            {" "}
            Phone Number
          </label>
        </div>
      )}
      <div className={classes.form__group}>
        <input
          type="email"
          className={classes.form__input}
          placeholder="Email Address"
          id="email"
          value={emailAddress}
          onChange={emailOnChangeHandler}
          required
        />
        <label htmlFor="email" className={classes.form__label}>
          Email Address{" "}
        </label>
      </div>
      {props.type !== "contact" ? (
        ""
      ) : (
        <div className={classes.form__group}>
          <textarea
            type="text"
            className={classes.form__input}
            placeholder="Drop your Message"
            id="message"
            value={userMessage}
            onChange={messageOnChangeHandler}
            required
          />
          <label htmlFor="message" className={classes.form__label}>
            Message{" "}
          </label>
        </div>
      )}
      {props.type !== "subscribe" || props.type !== "contact" ? (
        ""
      ) : (
        <div
          onChange={genderOnChangeHandler}
          className={classes.form__group + " u-margin-buttom-medium"}
        >
          <div className={classes.form__radio_group}>
            <input
              type="radio"
              className={classes.form__radio_input}
              id="male"
              name="gender"
              value="male"
            />
            <label htmlFor="male" className={classes.form__radio_label}>
              <span className={classes.form__radio_button}></span>
              Male
            </label>
          </div>
          <div className={classes.form__radio_group}>
            <input
              type="radio"
              className={classes.form__radio_input}
              id="female"
              name="gender"
              value="female"
            />
            <label htmlFor="female" className={classes.form__radio_label}>
              <span className={classes.form__radio_button}></span>
              Female
            </label>
          </div>
        </div>
      )}
      <div className={classes.form__group + " u-margin-buttom-medium"}>
        <button
          className={
            btnClasses.btn +
            " " +
            btnClasses.btn__primary +
            " " +
            btnClasses.btn__text2
          }
          onClick={submit}
          type="submit"
        >
          {props.type === "subscribe" ? "Subscribe" : "Send Message"}
        </button>
      </div>
    </form>
  );
};
export default Form;
