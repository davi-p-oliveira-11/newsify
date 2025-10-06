import { FC, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button: FC<ButtonProps> = ({ variant = 'primary', size = 'md', className, ...props }) => {
  const base = 'font-semibold transition cursor-pointer';

  const variants = {
    primary: 'bg-[#1668E8] text-white hover:bg-[#145BC4]',
    secondary: 'bg-white text-black hover:bg-gray-100',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md', 
    md: 'w-[120px] h-[45px] text-base rounded-full sm:w-[140px] sm:h-[50px] md:w-[160px] md:h-[60px]', 
    lg: 'px-8 py-4 text-lg rounded-full', 
  };

  return <button className={clsx(base, variants[variant], sizeClasses[size], className)} {...props} />;
};

export default Button;
