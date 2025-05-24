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
  let bgcolor = "bg-Light-grayish-orange";
  let shadow = "bg-Grayish-orange";
  if (type === "=") {
    bgcolor = "bg-Dark-red/90 text-white";
    shadow = "bg-Red";
  } else if (type === "del" || type === "reset") {
    bgcolor = "bg-Desaturated-dark-blue-key text-white ";
    shadow = "bg-Desaturated-dark-blue text-white ";
  }

  return (
    <>
      <div className="flex-1 relative">
        {" "}
        <input
          type="button"
          value={value}
          className={` ${bgcolor} w-full relative cursor-pointer md:text-[2rem] text-2xl flex-1 font-bold px-4 py-2 flex items-center z-10 justify-center md:px-10 md:py-2 rounded-sm`}
          onClick={() => handletype(value)}
        />
        <div
          className={`${shadow} absolute z-1 inset-0 bottom-[-4px] rounded-sm`}
        ></div>
      </div>
    </>
  );
};

export default Button;
