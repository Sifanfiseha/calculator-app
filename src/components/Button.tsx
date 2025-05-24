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
  let bgcolor =
    "theme1:bg-Light-grayish-orange theme2:bg-Light-grayish-yellow theme3:bg-Very-dark-violet-key";
  let shadow =
    "theme1:bg-Grayish-orange theme2:bg-Dark-grayish-orange theme3:bg-Dark-magenta";
  if (type === "=") {
    bgcolor =
      "theme1:bg-Dark-red/90 theme3:bg-Pure-cyan theme2:bg-Orange text-white theme3:text-Very-dark-blue";
    shadow = "theme1:bg-Red theme3:bg-Soft-cyan theme2:bg-Dark-orange";
  } else if (type === "del" || type === "reset") {
    bgcolor =
      "theme1:bg-Desaturated-dark-blue-key text-white theme2:bg-Dark-moderate-cyan theme2:hover:bg-Dark-moderate-cyan/60 theme3:bg-Dark-violet ";
    shadow =
      "theme1:bg-Desaturated-dark-blue text-white theme2:bg-Very-dark-cyan theme3:bg-Vivid-magenta";
  } else {
    bgcolor =
      bgcolor +
      " theme2:text-Very-dark-grayish-yellow theme3:text-Light-yellow";
  }

  return (
    <>
      <div className="flex-1 relative">
        <input
          type="button"
          value={value}
          className={` ${bgcolor} w-full relative cursor-pointer md:text-[2rem] text-2xl flex-1 font-bold px-4 hover:opacity-90 py-2 flex items-center z-10 justify-center md:px-10 md:py-2 transition-all duration-300 ease-in-out rounded-sm`}
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
