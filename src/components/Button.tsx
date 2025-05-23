import type { ButtonProps } from "../types/types";

const Button = ({ value }: ButtonProps) => {
  return (
    <>
      <input
        type="button"
        value={value}
        className="bg-gray-300 text-[2rem] flex-1 font-bold px-10 py-2 rounded-sm"
      />
    </>
  );
};

export default Button;
