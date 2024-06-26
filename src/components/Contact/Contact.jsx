import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <main>
      <section className="justify-center flex md:flex-row flex-col align-center px-6 sm:px-14 md:px-20">
        <div className="h-auto w-full max-w-7xl pd-12 select-none">
          <h1 className="text-accent1  text-4xl mt-5 text-center transition-all ease-in-out duration-300 hover:tracking-wide">
            Contact <span className="text-blue-500 text-accent1 ">Me!</span>
          </h1>
          <div className="mt-8 text-xl text-center pointer-events-none tracking-widest">
            Lets <span className="text-zinc-500">Make</span> something{" "}
            <span className="text-zinc-500">awesome</span> together!
          </div>
          <div className="h-auto w-auto max-w-7xl px-6 py-8 md:mx-20 my-10 gap-12 ring-1 rounded-2xl tracking-wider backdrop-blur-sm">
            <form action="#">
              <ContactForm
                label={"Name"}
                type={"name"}
                placeholder={"Tony Stark"}
              />
              <ContactForm
                label={"Phone"}
                type={"phone"}
                placeholder={"+1(555)555-5555"}
              />
              <ContactForm
                label={"E-mail"}
                type={"email"}
                placeholder={"xyz@domain.com"}
              />
              <label htmlFor="feedback" className="sm:ml-10 font-bold">
                A Few Words <sup className="text-red-600 font-bold">*</sup>
                &ensp;:
              </label>
              <br />
              <textarea
                type="text"
                placeholder="..."
                name="name"
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
