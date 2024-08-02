import Image from "next/image";

const ServicePage = () => {
  return (
    <>
      <section
        id="service-page"
        className="text-gray-600 body-font mx-auto w-full max-w-screen-xl"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div>
                <h1 className="title-font text-3xl mb-4 font-bold text-black ">
                  Our Services
                </h1>
                <p className="mb-16 text-lg">
                  We envision an educated future.
                </p>
                <div className="text-blue-500 text-lg hover:underline">
                  <a href="#">See all services &gt;</a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 mx-auto">
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg w-full h-96">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src="/overseas.jpg"
                    width={300}
                    height={300}
                    alt="OVERSEAS EDUCATION"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-xl text-black">
                      OVERSEAS EDUCATION
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 mx-auto">
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg w-full h-96">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src="/exam.svg"
                    width={300}
                    height={300}
                    alt="TEST PREPARATION CLASSES"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-xl text-black">
                      TEST PREPARATION CLASSES
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 mx-auto">
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg w-full h-96">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src="/counselling.jpg"
                    width={300}
                    height={300}
                    alt="ACADEMIC COUNSELLING"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-xl text-black">ACADEMIC COUNSELLING</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
