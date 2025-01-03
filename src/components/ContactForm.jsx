import { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
      
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setIsSuccess(true);
        event.target.reset(); // Clear the form
        setTimeout(() => setIsSuccess(false), 5000); // Hide success message after 5 seconds
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col md:flex-row w-full py-16 px-4 md:px-16">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl underline underline-offset-8 text-slate-200 mb-4">Contact me</h2>
        <p className="text-slate-200 mb-16">Send me a message or reach out via the links</p>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl text-slate-200">Reach out</h1>
        <div className="inline-block py-4 text-lg mb-8">
          <a href="https://github.com/yedoka" className="flex items-center gap-2 hover:text-teal-300 transition-colors duration-200 ease-in-out">
            <FaGithub />
            <span>Github</span>
          </a>
          <a href="https://www.linkedin.com/in/akedil-aidyn-69b54b2a0/" className="flex items-center gap-2 hover:text-teal-300 transition-colors duration-200 ease-in-out">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:akedilbekbolatov@gmail.com" className="flex items-center gap-2 hover:text-teal-300 transition-colors duration-200 ease-in-out">
            <IoMail />
            <span>Email</span>
          </a>
        </div>
        <h1 className="text-3xl text-slate-200 mb-8">Or send a message</h1>
        
        {isSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Message sent successfully! Thank you for reaching out.
          </div>
        )}
        
        <form onSubmit={onSubmit} className="flex flex-col w-full h-96 gap-4 rounded-md">
          <div className="flex flex-col w-full gap-2">
            <label>Full name</label>
            <input 
              name="name" 
              type="text" 
              placeholder="Enter your name" 
              className="p-2 focus:outline-none rounded-sm" 
              required 
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label>Email address</label>
            <input 
              name="email" 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 focus:outline-none rounded-sm" 
              required 
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label>Your message</label>
            <textarea 
              name="message" 
              placeholder="Enter your message" 
              className="p-2 focus:outline-none rounded-sm" 
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-teal-300 text-slate-950 w-36 py-2 rounded-sm hover:bg-teal-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;