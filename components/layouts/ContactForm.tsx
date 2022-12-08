import Button from "@components/form/Button";

const ContactForm = () => {
  return (
    <div className="container mx-auto md:px-4">
      <div className="bg-gray-100 rounded-xl my-16">
        <div className="flex flex-col lg:flex-row items-center lg:p-20 md:p-10 p-4">
          <div className="lg:w-2/5 mb-10 lg:px-0 md:px-12">
            <h3 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold mb-4 text-center lg:text-left">
              Get in Touch!
            </h3>
            <p className="text-xl leading-9 text-center lg:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="lg:w-3/5 lg:px-0 md:px-12">
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
              <div className="flex justify-center lg:justify-start">
                <Button className="!px-10">Say hi!</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
