import type { ButtonProps } from "../types/types";
import useCalculatorStore from "../store/store";

const Button = ({ value, type }: ButtonProps) => {
  const { addDigit, addOprator, evaluate, clear, deleteLast } =
    useCalculatorStore();

  const handletype = (value: string) => {
    if (type === "deg") {
      addDigit(value);
    } else if (type === "opr") {
      addOprator(value);
    } else if (type === "=") {
      evaluate();
    } else if (type === "reset") {
      clear();
    } else {
      deleteLast();
    }
  };
  return (
    <>
      <input
        type="button"
        value={value}
        className="bg-gray-300 md:text-[2rem] text-2xl flex-1 font-bold px-4 py-2 flex items-center justify-center md:px-10 md:py-2 rounded-sm"
        onClick={() => handletype(value)}
      />
    </>
  );
};

export default Button;
