import PageLayout from "../components/page-layout";

export default function Contact() {
  return (
    <PageLayout color="#4ECDC4" header="Contact Me">
      <div className="relative z-10 rounded-md shadow-md bg-[#F7EE7F] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-black-50 font-semibold text-2xl">
                Message me!
              </h1>
              <p className="font-light text-base text-black-200 mt-2">
                I will get back with you as soon as possible.
              </p>
            </header>
            <div className="flex flex-row items-center space-x-6  p-4">
              <p className="text-black-50 font-light text-sm">
                mark@markmurphy.codes
              </p>
            </div>
          </div>
        </div>
        <form
          action="mailto:mark@markmurphy.codes"
          method="GET"
          className="form rounded-lg bg-gray p-4 flex flex-col"
        >
          <label htmlFor="name" className="text-sm text-gray-600 mx-4">
            {" "}
            Your Name
          </label>
          <input
            type="text"
            className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
            name="name"
          />
          <label htmlFor="subject" className="text-sm text-gray-600 mx-4 mt-4">
            Subject
          </label>
          <input
            type="text"
            className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
            name="subject"
          />
          <label htmlFor="body" className="text-sm text-gray-600 mx-4 mt-4">
            Message
          </label>
          <textarea
            rows="4"
            type="text"
            className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
            name="body"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
          >
            Send Message
          </button>
        </form>
      </div>
    </PageLayout>
  );
}
