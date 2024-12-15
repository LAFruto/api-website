const Promotional = () => {
  return (
    <section className="max-container padding-container py-12 lg:py-24 flex-col flex`">
      <h1 className="bold-46 text-center pb-8 lg:bold-64 text-neutral-900 hide delay-200">Experience Our Vision!</h1>
      <div className="rounded-lg overflow-hidden">
        <iframe
          className="w-full h-[235px] lg:h-[725px] hide delay-300"
          src="https://www.youtube.com/embed/5QsmRO3NsFc?autoplay=1&mute=1"
          title="video"
        ></iframe>
      </div>
    </section>
  );
};

export default Promotional;
