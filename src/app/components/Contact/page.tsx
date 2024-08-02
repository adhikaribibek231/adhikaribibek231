import ContactInputBox from "./ContactInputBox";
import ContactTextArea from "./ContactTextArea";
import Location from "../Location";

const Contact = () => {
  return (
    <>
      <div className="bg-white">
        <div className="p-8 flex flex-col gap-4 items-center">
          <div>
            <h1 className="title-font text-3xl font-bold text-black">
              Ready to dive into projects?
            </h1>
          </div>
          <div>
            <p className="text-xl">Get in touch with our team</p>
          </div>
        </div>
        <section className="relative z-10 overflow-hidden py-20 dark:bg-dark lg:py-[120px]">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap lg:justify-between">
              <div className="w-full px-4 lg:w-1/2 xl:w-6/12 mb-8 lg:mb-0">
                <Location />
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="relative rounded-lg bg-white p-8 shadow-lg shadow-gray-500/50 dark:bg-dark-8 sm:p-12">
                  <form>
                    <ContactInputBox
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    />
                    <ContactInputBox
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />
                    <ContactInputBox
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                    />
                    <ContactTextArea
                      row="6"
                      placeholder="Your Message"
                      name="details"
                      defaultValue=""
                    />
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="bg-[#0D7ABF] text-white px-4 py-2 rounded-xl hover:bg-[#0d7bbfd7]"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
