"use client";

import { personalData } from "@/utils/data/personal-data";
import { isValidEmail } from "@/utils/check-email";
import { useState } from "react";
import { FiCheck, FiCopy, FiMail, FiSend } from "react-icons/fi";
import { toast } from "react-toastify";
import Magnetic from "../../motion/magnetic";
import Reveal from "../../motion/reveal";
import SectionHeader from "../section-header";

const EMPTY = { name: "", email: "", message: "" };
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const FIELD =
  "w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted/70 focus:border-accent/60";

function ContactSection() {
  const [input, setInput] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const set = (key) => (e) => setInput({ ...input, [key]: e.target.value });

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(input.email)) {
      setEmailError(true);
      return;
    }
    const fail = () => toast.error(`Couldn't send right now. Email me at ${personalData.email}`);
    if (!WEB3FORMS_KEY) {
      fail();
      return;
    }
    setSending(true);
    try {
      // Web3Forms' free plan only accepts browser submissions; the access key is meant to be public.
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio message from ${input.name}`,
          from_name: "Portfolio contact form",
          replyto: input.email,
          botcheck: "",
          ...input,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!data.success) throw new Error();
      toast.success("Message sent. I'll get back to you soon.");
      setInput(EMPTY);
    } catch {
      fail();
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <SectionHeader index="07" label="Contact" title="Let's build something together.">
        I&apos;m open to SDE roles and interesting engineering problems. The fastest way to reach me is email; the form works too.
      </SectionHeader>

      <div className="grid gap-4 lg:grid-cols-5">
        <Reveal className="card flex flex-col justify-between gap-10 p-6 md:p-8 lg:col-span-2">
          <div data-reveal>
            <p className="section-label mb-4">Email</p>
            <a href={`mailto:${personalData.email}`} className="break-all text-xl font-medium text-fg hover:underline sm:text-2xl">
              {personalData.email}
            </a>
          </div>
          <div data-reveal className="flex flex-wrap gap-3">
            <Magnetic>
              <a href={`mailto:${personalData.email}`} className="btn-solid">
                <FiMail /> Say hello
              </a>
            </Magnetic>
            <button onClick={copyEmail} className="btn-ghost">
              {copied ? <FiCheck /> : <FiCopy />} {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </Reveal>

        <Reveal as="form" self onSubmit={onSubmit} className="card flex flex-col gap-4 p-6 md:p-8 lg:col-span-3" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="section-label">Name</span>
              <input className={FIELD} required maxLength={100} value={input.name} onChange={set("name")} placeholder="Jane Doe" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="section-label">Email</span>
              <input
                className={FIELD}
                type="email"
                required
                maxLength={100}
                value={input.email}
                onChange={(e) => { set("email")(e); setEmailError(false); }}
                onBlur={() => input.email && setEmailError(!isValidEmail(input.email))}
                placeholder="jane@company.com"
                aria-invalid={emailError}
              />
              {emailError && <span className="text-xs text-red-400">Please enter a valid email.</span>}
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="section-label">Message</span>
            <textarea
              className={`${FIELD} resize-none`}
              required
              rows={5}
              maxLength={1000}
              value={input.message}
              onChange={set("message")}
              placeholder="Tell me about the role or project…"
            />
          </label>
          <button
            type="submit"
            disabled={sending || !input.name || !input.email || !input.message}
            className="btn-solid mt-2 justify-center disabled:cursor-not-allowed disabled:opacity-50 sm:self-end"
          >
            {sending ? "Sending…" : "Send message"} <FiSend />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
