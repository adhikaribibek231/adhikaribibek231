import Carousel from "./Carousel";

const Content = () => {
  const slides = ["/1pic.png", "/2pic.png", "/3pic.png"];
  return (
    <>
      <div className="mx-auto w-full max-w-screen-xl container px-5 p-0 md:py-24">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4 md:mr-0 mb-6 md:mb-0 ">
            <div className="felx justify-center items-center h-full bg-white rounded-xl">
              <div className="w-full">
                <Carousel>
                  {slides.map((slide, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <img key={index} src={slide} />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
          <div className="md:w-1/4 p-12 py-10 md:py-48">
            <div className="flex flex-col justify-center">
              <h1 className="title-font text-3xl mb-4 font-bold text-black">
                Our Projects
              </h1>
              <p className="mb-4 text-xl text-gray-600">
                We envision a future where businesses seamlessly.
              </p>
              <a
                href="#"
                className="text-blue-500 text-xl hover:underline inline-block"
              >
                &lt; See all projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
