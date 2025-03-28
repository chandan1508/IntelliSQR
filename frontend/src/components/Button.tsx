import { FC } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button
      className="bg-[#2B3A67] text-white pt-[16px] pb-[16px] pl-[24px] pr-[24px] rounded-[8px] w-full"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
