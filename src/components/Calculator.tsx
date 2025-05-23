import ButtonGrid from "./ButtonGrid";
import Display from "./Display";

const Calculator = () => {
  return (
    <div className="max-w-xl flex flex-col gap-6">
      <Display />
      <ButtonGrid />
    </div>
  );
};

export default Calculator;
