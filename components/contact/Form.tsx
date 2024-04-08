"use client";

import Button from "../Button";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const [captcha, setCaptcha] = useState<string | null>();

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (event: FormEvent) => {
    event.preventDefault()

    if (
      !process.env.NEXT_PUBLIC_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_PUBLIC_KEY
    ) {
      console.error("Missing environment variables");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, form.current!, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );

  };
  return (
    <section className="max-container padding-container my-24 lg:my-32">
      <div className="flex flex-col justify-between grid-cols-2 gap-8 lg:grid">
        <div className="flex flex-col justify-center">
          <h1 className="bold-46 lg:bold-64">Get In Touch.</h1>
          <p className="mt-6">
            Reach out to us to find out more about our club or current
            workshop/competitions. We’re here for you.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-8 items-stretch"
        >
          <div className="flex flex-col gap-6 justify-between lg:flex-row">
            <div className="flex-1 ">
              <label className="" htmlFor="sendername">
                Full Name
              </label>
              <input
                className="w-full block mt-2 bg-zinc-200 border-zinc-200 rounded-full py-2 px-4 medium-14  transition ease-in-out hover:bg-orange-200 hover:border-orange-200 border-[3px] focus:!border-white  !outline-none focus:ring-orange-50 focus:ring-2"
                type="text"
                id="sendername"
                name="sendername"
                required
              />
            </div>

            <div className="flex-1">
              <label className="" htmlFor="senderemail">
                Email
              </label>
              <input
                className="w-full block mt-2 bg-zinc-200 border-zinc-200 rounded-full py-2 px-4 medium-14  transition ease-in-out hover:bg-orange-200 hover:border-orange-200 border-[3px] focus:!border-white  !outline-none focus:ring-orange-50 focus:ring-2"
                type="email"
                id="senderemail"
                name="sendername"
                required
              />
            </div>
          </div>
          <div className="flex-1">
            <p>What are you interested in?</p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 mt-4">
              <div className="flex items-center gap-4 ml-4">
                <input
                  type="checkbox"
                  id="membership"
                  name="interest"
                  value="Membership"
                  className="w-4 h-4 accent-orange-300 text-orange-50 bg-zinc-200 border-zinc-200 rounded-sm checked:bg-orange-50 focus:ring-2 focus:ring-orange-50"
                />
                <label htmlFor="membership">Membership</label>
              </div>
              <div className="flex items-center gap-4 ml-4">
                <input
                  type="checkbox"
                  id="workshop"
                  name="interest"
                  value="Workshop"
                  className="w-4 h-4 accent-orange-300 text-orange-50 bg-zinc-200 border-zinc-200 rounded-sm checked:bg-orange-50 focus:ring-2 focus:ring-orange-50"
                />
                <label htmlFor="workshop">Workshop</label>
              </div>
              <div className="flex items-center gap-4 ml-4">
                <input
                  type="checkbox"
                  id="partnership"
                  name="interest"
                  value="Partnership"
                  className="w-4 h-4 accent-orange-300 text-orange-50 bg-zinc-200 border-zinc-200 rounded-sm checked:bg-orange-50 focus:ring-2 focus:ring-orange-50"
                />
                <label htmlFor="partnership">Partnership</label>
              </div>
              <div className="flex items-center gap-4 ml-4">
                <input
                  type="checkbox"
                  id="competition"
                  name="interest"
                  value="Competition"
                  className="w-4 h-4 accent-orange-300 text-orange-50 bg-zinc-200 border-zinc-200 rounded-sm checked:bg-orange-50 focus:ring-2 focus:ring-orange-50"
                />
                <label htmlFor="competition">Competition</label>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <label className="" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full min-h-[150px] block mt-2 bg-zinc-200 border-zinc-200 rounded-xl py-2 px-4 medium-14  transition ease-in-out hover:bg-orange-200 hover:border-orange-200 border-[3px] focus:!border-white  !outline-none focus:ring-orange-50 focus:ring-2"
              id="message"
              name="message"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>

          <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}  onChange={setCaptcha} />

          <Button
            type={"submit"}
            variant={"btn_orange w-[40%]"}
            title={"send message"}
            disabled={isSubmitting}
          />
          { stateMessage && <p>{stateMessage}</p> }
        </form>
      </div>
    </section>
  );
};

export default Form;
