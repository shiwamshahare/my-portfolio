import React from "react";

const ContactForm = ({ label, type, placeholder }) => {
  return (
    <>
      <label htmlFor={type} className="font-bold sm:ml-10">
        {label}
        <sup className="text-red-600 font-bold">* </sup>&ensp;:
      </label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        name={type}
        className="pd-12 border-b-2 w-4/5 sm:ml-10 focus:outline-none"
        required
      ></input>
      <br />
      <br />
    </>
  );
};

export default ContactForm;
