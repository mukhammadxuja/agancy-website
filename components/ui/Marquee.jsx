import Link from 'next/link';

const Marquee = ({ text, link, textColor, borderColor, border }) => {
  const marqueeData = [
    {
      id: 1,
      title: `${text}`,
    },
    {
      id: 2,
      title: `${text}`,
    },
    {
      id: 3,
      title: `${text}`,
    },
    {
      id: 4,
      title: `${text}`,
    },
    {
      id: 5,
      title: `${text}`,
    },
    {
      id: 6,
      title: `${text}`,
    },
    {
      id: 6,
      title: `${text}`,
    },
    {
      id: 8,
      title: `${text}`,
    },
    {
      id: 9,
      title: `${text}`,
    },
    {
      id: 10,
      title: `${text}`,
    },
  ];
  return (
    <>
      <Link href="#!">
        <div
          className={`w-full overflow-hidden group bg-transparent py-2 md:py-3 lg:py-4 px-4 ${border} ${borderColor} cursor-pointer`}
        >
          <div
            className={`bg-transparent py-2 lg:py-0 group-hover:hidden text-3xl md:text-4xl lg:text-6xl ${textColor} font-semibold uppercase text-center`}
          >
            {text}
          </div>
          <div className="group-hover:animate-marquee whitespace-nowrap hidden group-hover:block py-2 lg:py-0">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center space-x-3 lg:space-x-5">
                {marqueeData.map((marqueeText) => (
                  <div>
                    <span
                      className={`mx-4 text-3xl md:text-4xl lg:text-6xl ${textColor} font-semibold uppercase`}
                    >
                      {marqueeText.title}
                    </span>
                    <span className="text-xl xl:text-6xl ml-2 lg:ml-4">*</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Marquee;
