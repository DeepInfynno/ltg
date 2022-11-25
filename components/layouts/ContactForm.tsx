const ContactForm = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 bg-gray-100 rounded-xl my-16">
      <div className="md:flex items-center p-4 md:p-16">
        <div className="md:w-1/3 py-8">
          <h3 className="text-3xl font-semibold mb-4">Get in Touch!</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="md:w-2/3">
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-none w-full rounded-lg px-4 py-2 placeholder:text-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-none w-full rounded-lg px-4 py-2 placeholder:text-gray-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="border-none w-full rounded-lg px-4 py-2 placeholder:text-gray-400"
              rows={5}
            />
            <button className="bg-red-500 text-white hover:bg-red-600 px-10 py-2 rounded-full transition-all ease-in-out duration-200">
              Say hi!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
