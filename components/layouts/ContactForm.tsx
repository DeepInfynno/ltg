const ContactForm = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-gray-100 rounded-xl my-16">
        <div className="md:flex items-center md:p-20">
          <div className="md:w-2/5 mb-10">
            <h3 className="text-4xl font-semibold mb-4">Get in Touch!</h3>
            <p className="text-xl leading-9">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="md:w-3/5">
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
              <button className="bg-[#EA0000] text-white hover:bg-red-600 px-10 py-2 rounded-full transition-all ease-in-out duration-200 font-bold uppercase">
                Say hi!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
