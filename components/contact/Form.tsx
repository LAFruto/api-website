"use client";

import { useState, useRef, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "../Button";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

interface FormValues {
  sendername: string;
  senderemail: string;
  membership: string;
  workshop: string;
  partnership: string;
  competition: string;
  message: string;
}

const Form = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    startTransition(async () => {
      const token = recaptchaRef.current?.getValue();

      if (!token) {
        setMessage("Please complete the reCAPTCHA");
        setStatus("error");
        return;
      }

      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setMessage("Configuration error. Please try again later.");
        setStatus("error");
        return;
      }

      try {
        const res = await emailjs.sendForm(serviceId, templateId, form.current!, { publicKey });
        if (res.status === 200) {
          setMessage("Message sent successfully");
          setStatus("success");
          reset();
          recaptchaRef.current?.reset();
        }
      } catch {
        setMessage("Failed to send message. Please try again later.");
        setStatus("error");
      }
    });
  };

  return (
    <section className="max-container padding-container my-24 lg:my-32">
      <div className="flex flex-col justify-between grid-cols-2 gap-8 lg:grid">
        <div className="flex flex-col justify-center">
          <h1 className="bold-46 lg:bold-64">Get In Touch.</h1>
          <p className="mt-6">
            Reach out to us to find out more about our club or current workshop/competitions. We're here for you.
          </p>
        </div>

        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 items-stretch">
          <div className="flex flex-col gap-6 justify-between lg:flex-row">
            <div className="flex-1">
              <label htmlFor="sendername">Full Name</label>
              <input
                id="sendername"
                {...register("sendername")}
                className="w-full block mt-2 bg-zinc-200 border-zinc-200 rounded-full py-2 px-4 text-sm font-semibold transition ease-in-out hover:bg-orange-200 hover:border-orange-200 border-[3px] focus:!border-white !outline-none focus:ring-orange-50 focus:ring-2"
                disabled={isPending}
              />
              {errors.sendername && <span className="text-red-500">{errors.sendername.message}</span>}
            </div>

            <div className="flex-1">
              <label htmlFor="senderemail">Email</label>
              <input
                id="senderemail"
                type="email"
                {...register("senderemail")}
                className="w-full block mt-2 bg-zinc-200 border-zinc-200 rounded-full py-2 px-4 text-sm font-semibold transition ease-in-out hover:bg-orange-200 hover:border-orange-200 border-[3px] focus:!border-white !outline-none focus:ring-orange-50 focus:ring-2"
                disabled={isPending}
              />
              {errors.senderemail && <span className="text-red-500">{errors.senderemail.message}</span>}
            </div>
          </div>

          <div className="flex-1">
            <p>What are you interested in?</p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 mt-4">
              <div className="flex items-center gap-4 ml-4">
                <input
                  id="membership"
                  type="checkbox"
                  {...register("membership")}
                  value="membership"
                  className="w-4 h-4 accent-orange-300 text-orange-50 bg-zinc-200 border-zinc-200 rounded-sm checked:bg-orange-50 focus:ring-2 focus:ring-orange-50"
                  disabled={isPending}
                />
                <label htmlFor="membership">Membership</label>
              </div>

              <div className="flex items-center gap-4 ml-4">
                <input
                  id="workshop"
                  type="checkbox"
                  {...register("workshop")}
                  value="workshop"
                  className="w-4 h-4 accent-orange-300 text-orange-50 bg-zinc-200 border-zinc-200 rounded-sm checked:bg-orange-50 focus:ring-2 focus:ring-orange-50"
                  disabled={isPending}
                />
                <label htmlFor="workshop">Workshop</label>
              </div>

              <div className="flex items-center gap-4 ml-4">
                <input
                  id="partnership"
                  type="checkbox"
                  {...register("partnership")}
                  value="partnership"
                  className="w-4 h-4 accent-orange-300 text-orange-50 bg-zinc-200 border-zinc-200 rounded-sm checked:bg-orange-50 focus:ring-2 focus:ring-orange-50"
                  disabled={isPending}
                />
                <label htmlFor="partnership">Partnership</label>
              </div>

              <div className="flex items-center gap-4 ml-4">
                <input
                  id="competition"
                  type="checkbox"
                  {...register("competition")}
                  value="competition"
                  className="w-4 h-4 accent-orange-300 text-orange-50 bg-zinc-200 border-zinc-200 rounded-sm checked:bg-orange-50 focus:ring-2 focus:ring-orange-50"
                  disabled={isPending}
                />
                <label htmlFor="competition">Competition</label>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              placeholder="Type your message..."
              className="w-full min-h-[150px] block mt-2 bg-zinc-200 border-zinc-200 rounded-xl py-2 px-4 text-sm font-semibold transition ease-in-out hover:bg-orange-200 hover:border-orange-200 border-[3px] focus:!border-white !outline-none focus:ring-orange-50 focus:ring-2"
              disabled={isPending}
            ></textarea>
            {errors.message && <span className="text-red-500">{errors.message.message}</span>}
          </div>

          <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} />

          <Button type="submit" variant="btn-orange w-[40%]" title="Send Message" disabled={isPending} />

          {message && (
            <div
              className={`flex w-full justify-center p-2 rounded-lg font-normal ${
                status === "error" ? "bg-red-500/10 text-red-500" : "bg-green-500/10 text-green-500"
              }`}
            >
              <p>{message}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Form;
