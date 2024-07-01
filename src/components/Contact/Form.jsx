import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Modal } from "flowbite-react";
import ThankYouSvg from "../Svg/Contact/ThankYouSvg";

const Form = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    personName: "",
    mobileNum: "",
    email: "",
    feedBack: "",
  });

  const formSend = useRef();

  const handleInputData = (e) => {
    setFormData((currentData) => {
      return { ...currentData, [e.target.name]: e.target.value };
    });
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bafl5k9", "template_m2fr3vs", formSend.current, {
        publicKey: "ow4l8spoD2K5FYtzc",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          console.log(formData);
          setTimeout(() => {
            handleModal();
          }, 100);
          setFormData({
            personName: "",
            mobileNum: "",
            email: "",
            feedBack: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <>
      <form ref={formSend} onSubmit={handleSubmit}>
        <label htmlFor="personName" className="font-bold sm:ml-10">
          Name
          <sup className="text-red-600 font-bold">* </sup>&ensp;:
        </label>
        <br />
        <input
          type="text"
          id="personName"
          name="personName"
          placeholder="Tony Stark"
          value={formData.personName}
          onChange={handleInputData}
          pattern="^[A-Za-z\s]*[A-Za-z]{3,}$"
          className="pd-12 border-b-2 w-4/5 sm:ml-10 focus:outline-none  valid:border-green-500 focus:invalid:border-red-500"
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
          className="pd-12 border-b-2 w-4/5 sm:ml-10 focus:outline-none valid:border-green-500 focus:invalid:border-red-500"
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
          className="pd-12 border-b-2 w-4/5 sm:ml-10 focus:outline-none valid:border-green-500 focus:invalid:border-red-500"
          required
        ></input>
        <br />
        <br />

        <label htmlFor="feedBack" className="sm:ml-10 font-bold">
          A Few Words <sup className="text-red-600 font-bold">*</sup>
          &ensp;:
        </label>
        <br />
        <textarea
          type="text"
          id="feedBack"
          name="feedBack"
          placeholder="..."
          value={formData.feedBack}
          onChange={handleInputData}
          minLength={4}
          className="pd-12 border-b-2 w-4/5 sm:ml-10 focus:outline-none valid:border-green-500 focus:invalid:border-red-500"
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
        <div>
          <Modal
            show={openModal}
            size="md"
            onClose={handleModal}
            popup
            className="backdrop-blur-xl flex justify-center items-center"
          >
            <Modal.Body>
              <div className="shadow-2xl backdrop-blur-3xl shadow-slate-700 pb-8 text-center rounded-2xl items-center justify-center flex flex-col lg:mx-96">
                <ThankYouSvg />
                <h3 className="mb-5 text-lg">
                  The form has been submitted successfully. <br />
                  We will reply to you soon!
                </h3>
                <div className="flex justify-center gap-4">
                  <button
                    className="rounded-2xl rounded-tr-none ring-2 px-4 py-2 text-accent1 text-zinc-600 shadow-zinc-400 bg-blue-100 transition-all ease-in-out duration-300 hover:tracking-widest"
                    onClick={handleModal}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </form>
    </>
  );
};

export default Form;
