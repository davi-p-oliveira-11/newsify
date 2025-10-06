import { FC, InputHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
}

const Input: FC<InputProps> = ({ size = "md", icon, className, ...props }) => {
  const base =
    "px-6 py-3 rounded-full border border-[#ccc] transition text-base";

  const sizeClasses = {
    sm: "w-[200px] h-[60px] sm:w-[260px] sm:h-[60px]",
    md: "w-[260px] h-[60px] sm:w-[355px] sm:h-[60px]",
    lg: "w-[360px] h-[60px] sm:w-[495px] sm:h-[60px]",
  };

  return (
    <div className={clsx("relative", className)}>
      {icon && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2">{icon}</span>
      )}
      <input
        className={clsx(base, sizeClasses[size], icon ? "pl-12" : "")}
        {...props}
      />
    </div>
  );
};

export default Input;
