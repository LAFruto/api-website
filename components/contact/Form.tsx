import Button from "../Button";

const Form = () => {
  return (
    <section className="max-container padding-container my-40">
      <div className="flex flex-col justify-between grid-cols-2 gap-8 lg:grid">
        <div className="flex flex-col justify-center">
          <h1 className="bold-40 lg:bold-64">Get In Touch.</h1>
          <p className="mt-6">
            Reach out to us to find out more about our club or current
            workshop/competitions. We’re here for you.
          </p>
        </div>

        <form className="flex flex-col gap-8 items-stretch">
          <div className="flex gap-x-6 justify-between">
            <div className="flex-1">
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
          <Button 
            type={"button"}
            variant={"btn_orange w-1/4"}
            title={"submit"}
          />
        </form>
      </div>
    </section>
  );
};

export default Form;
