const Team = () => {
  return (
    <section className="max-container padding-container py-12 flex-col flex`">
      <h1 className="bold-40 text-center pb-8 lg:bold-64">Meet the Team.</h1>
      <div className="rounded-lg overflow-hidden">
        <iframe className="w-full h-[235px] lg:h-[725px]" src="https://www.youtube.com/embed/riDtDdhDDkg?autoplay=1&mute=1" title="video"></iframe>
      </div>
    </section>
  );
};

export default Team;
