import { FC } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import clsx from "clsx";

interface TestimonialCardProps {
  testimonial: string;
  author: string;
  image: string;
  rating: number; 
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  testimonial,
  author,
  image,
  rating,
}) => {
  return (
    <div
      className={clsx(
        "bg-[#1e1f20] text-white rounded-2xl p-10 flex flex-col justify-between",
        "w-full max-w-[1557px] h-auto md:h-[864px]",
        "transition-transform hover:scale-[1.02] duration-300"
      )}
    >
  
      <h2 className="text-white text-2xl md:text-5xl lg:text-[56px] leading-tight md:leading-[72px] font-semibold mb-10">
        “{testimonial}”
      </h2>

      <div className="flex items-center gap-6 mt-auto">
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={author}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-lg md:text-xl">{author}</span>
          <div className="flex gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={clsx(
                  "text-yellow-400",
                  i < rating ? "opacity-100" : "opacity-40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
