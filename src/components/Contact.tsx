import React, { FC, useState } from "react";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import ogaga from "./../images/ogee1.png";

const Contact: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");

  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Have a product or role in mind?</h2>
          <p className="section-copy">
            Send a message with a few details about what you are building, and I will
            get back to you as soon as possible.
          </p>
          <div className="mt-8 space-y-4">
            <a
              className="focus-ring flex items-center gap-3 text-sm font-semibold text-slate-700 hover:text-cyan-700 dark:text-slate-200 dark:hover:text-cyan-300"
              href="mailto:iyaraogaga69@gmail.com"
            >
              <FiMail aria-hidden="true" />
              iyaraogaga69@gmail.com
            </a>
            <p className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
              <FiMapPin aria-hidden="true" />
              Lagos, Nigeria
            </p>
          </div>
          <img
            src={ogaga}
            alt=""
            className="mt-10 hidden max-h-80 object-contain opacity-95 lg:block"
            aria-hidden="true"
          />
        </div>
        <form
          action="https://formspree.io/f/mqkobkdq"
          method="post"
          className="space-y-5"
        >
          <div>
            <label htmlFor="name" className="text-sm font-bold text-slate-800 dark:text-slate-100">
              Full name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              name="name"
              required
              className="focus-ring mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 dark:border-white/10 dark:bg-slate-950 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-bold text-slate-800 dark:text-slate-100">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              name="email"
              required
              className="focus-ring mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 dark:border-white/10 dark:bg-slate-950 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-bold text-slate-800 dark:text-slate-100">
              Message
            </label>
            <textarea
              id="message"
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Tell me about the project, timeline, and goals."
              name="message"
              required
              rows={6}
              className="focus-ring mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 dark:border-white/10 dark:bg-slate-950 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300 sm:w-auto"
          >
            Send message
            <FiSend aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
