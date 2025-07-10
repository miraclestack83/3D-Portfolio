import { useState, useRef, createRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef(createRef());
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_tznutws",
        "template_k5ljddk",
        {
          form_name: form.name,
          to_name: "GENIUSDEV",
          from_email: form.email,
          to_email: "geniusdev0813@gmail.com",
          message: form.message,
        },
        "tZodxF4-YkMwJWCtD"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >

          <div className="w-full flex justify-start items-start" >
            <div
              onClick={() => window.open("mailto:geniusdev0813@gmail.com", "_blank")}
              className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src="https://img.icons8.com/fluency/96/undefined/circled-envelope.png" width="50" height="50" />
            </div>
            &nbsp;&nbsp;

            <div
              onClick={() => window.open("https://t.me/geniusdev0813", "_blank")}
              className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" style={{ width: 35, height: 35 }} />
            </div>
            &nbsp;&nbsp;
            <div
              onClick={() => window.open("https://join.skype.com/invite/FkUFFPapLZRr", "_blank")} title="live:.cid.5c18b73dc33affe5"
              className=" w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Skype_logo_%282019%E2%80%93present%29.svg" style={{ width: 35, height: 35 }} />
            </div>
            &nbsp;&nbsp;

            <div
              onClick={() => window.open("https://github.com/softwinner813", "_blank")}
              className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" style={{ backgroundColor: '#00b1eb', color: "white" }}
            >
              <img src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png" style={{ width: 35, height: 35 }} />
            </div>

            &nbsp;&nbsp;
            <div
              onClick={() => window.open("tel:+13157580444", "_blank")} title="+1 315 758 0444"
              className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" style={{ padding: 5, backgroundColor: '#00b1eb', color: "white" }}
            >
              <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" style={{ width: 35, height: 35 }} />
            </div>
          </div>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
