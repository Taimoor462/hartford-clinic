import Link from "next/link";

const Button = ({
  text,
  onClick,
  variant = "solid",
  className = "",
  type = "button",
  href,
}) => {
  const baseClasses =
    "w-[170px] h-[62px] md:h-[58px] flex justify-center items-center text-base uppercase font-semibold transition-colors duration-200 cursor-pointer";

  const variants = {
    solid:
      "bg-[#305399] text-white hover:bg-white hover:text-[#305399]",
    outline:
      "border border-white hover:border-[#305399] text-white hover:text-[#305399]",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
    >
      {text}
    </button>
  );
};

export default Button;
