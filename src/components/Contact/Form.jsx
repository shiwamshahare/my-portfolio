import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNum: "",
    email: "",
    feedback: "",
  });

  const handleInputData = (e) => {
    setFormData((currentData) => {
      return { ...currentData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      mobileNum: "",
      email: "",
      feedback: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName" className="font-bold sm:ml-10">
          Name
          <sup className="text-red-600 font-bold">* </sup>&ensp;:
        </label>
        <br />
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Tony Stark"
          value={formData.fullName}
          onChange={handleInputData}
          pattern="^[A-Za-z\s]*[A-Za-z]{3,}$"
          className="pd-12 border-b-2 w-4/5 sm:ml-10 focus:outline-none"
          required
        ></input>
        <br />
        <br />
        <label htmlFor="mobileNum" className="font-bold sm:ml-10">
          Phone
          <sup className="text-red-600 font-bold">* </sup>&ensp;:
        </label>
        <br />
        <input
          type="phone"
          id="mobileNum"
          name="mobileNum"
          placeholder="+1(555)555-5555"
          value={formData.mobileNum}
          onChange={handleInputData}
          pattern="^\d{10}$"
          className="pd-12 border-b-2 w-4/5 sm:ml-10 focus:outline-none"
          required
        ></input>
        <br />
        <br />
        <label htmlFor="email" className="font-bold sm:ml-10">
          E-mail
          <sup className="text-red-600 font-bold">* </sup>&ensp;:
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="xyz@domain.com"
          value={formData.email}
          onChange={handleInputData}
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          className="pd-12 border-b-2 w-4/5 sm:ml-10 focus:outline-none"
          required
        ></input>
        <br />
        <br />

        <label htmlFor="feedback" className="sm:ml-10 font-bold">
          A Few Words <sup className="text-red-600 font-bold">*</sup>
          &ensp;:
        </label>
        <br />
        <textarea
          type="text"
          id="feedback"
          name="feedback"
          placeholder="..."
          value={formData.feedback}
          onChange={handleInputData}
          className="pd-12 border-b-2 w-4/5 sm:ml-10 focus:outline-none "
          required
        ></textarea>
        <br />
        <br />
        <button
          type="submit"
          className="rounded-2xl rounded-tr-none sm:ml-10 ring-2 px-4 py-2 text-accent1 text-zinc-600 shadow-2xl backdrop-blur-lg transition-all ease-in-out duration-300 hover:tracking-widest"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
