import Image from "next/image";
import { FC } from "react";
import Button from "./Button";

interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const FeatureCard: FC<FeatureCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Top section - green canvas */}
      <div className="bg-[#C7F2AB] flex items-center justify-center h-64">
        <div className="w-32 h-32 relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom section - content */}
      <div className="flex flex-col items-center text-center px-6 py-8">
        <h3 className="text-black text-xl font-semibold mb-3">{title}</h3>
        <p className="text-black text-sm mb-6">{description}</p>
        <Button
          size="md"
          variant="primary"
          onClick={onButtonClick}
          className="w-[160px]"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default FeatureCard;
