import { FC } from "react";
import clsx from "clsx";

interface InfoCardProps {
  title: string;
  description: string;
  className?: string;
}

const InfoCard: FC<InfoCardProps> = ({ title, description, className }) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-left text-left",
        "bg-[#f7f7f7] text-black rounded-3xl p-6",
        "transition-all duration-300 ease-in-out",
        "hover:bg-[#1668E8] hover:text-white hover:shadow-lg hover:-translate-y-1",
        "w-[400px] h-[359px]",
        "md:w-[400px] md:h-[359px] sm:w-full sm:h-auto",
        className
      )}
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default InfoCard;
