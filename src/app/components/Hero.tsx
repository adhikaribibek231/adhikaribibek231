const Hero = () => {
  return (
    <section
      className="w-full h-screen max-h-[36rem] p-24 relative overflow-hidden block z-10 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url('/hero.jpg')` }}
    >
      <div className="container px-5 py-40 mx-auto w-full max-w-screen-xl">
        <div className="flex flex-wrap -m-12">
          <div className="p-1 md:w-1/2 flex flex-col items-start">
            <h2 className="text-2xl sm:text-4xl title-font font-medium text-white mt-24 mb-7 hover:text-[#0d7abf]">
            Empowering Your Education Journey
            </h2>
            <div className="text-white max-w-xl ">
            The Counsellor features a dedicated team of professionals with years of combined expertise in management, consulting, education, and training, along with passionate employees committed to providing high-quality services and guidance.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
