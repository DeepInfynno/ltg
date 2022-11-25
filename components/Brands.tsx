type BrandLinkProps = {
  href: string;
  title: string;
};

const BrandLink = ({ href, title, ...props }: BrandLinkProps) => (
  <div className="border border-gray-200 hover:border-red-500 shadow-sm rounded-md px-2 md:px-6 py-4">
    <a
      href={href}
      className="block text-center font-semibold text-gray-700 text-sm md:text-xl"
      {...props}
    >
      live<span className="text-red-500">{title}</span>tickets
    </a>
  </div>
);

const Brands = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="uppercase text-gray-700">Our Brands</h3>
        <h1 className="text-3xl font-semibold py-6">
          Empowering sports event experiences.
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-16 py-4 md:py-8">
          <BrandLink href="" title="football" />
          <BrandLink href="" title="rugby" />
          <BrandLink href="" title="festival" />
          <BrandLink href="" title="tennis" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
