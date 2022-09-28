
import Link from 'next/link';

const Button = ({ text, link, bg, border, textColor, darkHoverBg }) => {
  return (
    <>
      <Link
        href="#!"
      >
        <div className={`w-44 overflow-hidden group ${bg} py-2 px-4 lg:py-3 lg:px-6 ${border} rounded-full cursor-pointer`}>
          <div className={`${bg} group-hover:hidden ${darkHoverBg} ${textColor} text-xl uppercase text-center`}>
            {text}
          </div>
          <div className="group-hover:animate-marquee whitespace-nowrap hidden group-hover:block w-full">
            <span className={`mx-2 ${textColor} text-xl uppercase`}>{text}</span>
            <span className={`mx-2 ${textColor} text-xl uppercase`}>{text}</span>
            <span className={`mx-2 ${textColor} text-xl uppercase`}>{text}</span>
            <span className={`mx-2 ${textColor} text-xl uppercase`}>{text}</span>
            <span className={`mx-2 ${textColor} text-xl uppercase`}>{text}</span>
            <span className={`mx-2 ${textColor} text-xl uppercase`}>{text}</span>
            <span className={`mx-2 ${textColor} text-xl uppercase`}>{text}</span>
            <span className={`mx-2 ${textColor} text-xl uppercase`}>{text}</span>
            <span className={`mx-2 ${textColor} text-xl uppercase`}>{text}</span>
            <span className={`mx-2 ${textColor} text-xl uppercase`}>{text}</span>
            <span className={`mx-2 ${textColor} text-xl uppercase`}>{text}</span>
            <span className={`mx-2 ${textColor} text-xl uppercase`}>{text}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Button;