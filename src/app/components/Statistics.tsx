const StatisticsPage = () => {
  return (
    <>
      <section className="text-[#0d7abf] body-font mt-10 mx-auto w-full max-w-screen-xl">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg ">
              <h1 className="font-extrabold text-4xl">+20</h1>
              <p className="mt-2 text-gray-600 font-bold text-lg">Projects</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg ">
              <h1 className="font-extrabold text-4xl">+50M</h1>
              <p className="mt-2 text-gray-600 font-bold text-lg">
                Line Of Code
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg ">
              <h1 className="font-extrabold text-4xl">+50</h1>
              <p className="mt-2 text-gray-600 font-bold text-lg">Team</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg ">
              <h1 className="font-extrabold text-4xl">&#8734;</h1>
              <p className="mt-2 text-gray-600 font-bold text-lg">
                Opportunities
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatisticsPage;
