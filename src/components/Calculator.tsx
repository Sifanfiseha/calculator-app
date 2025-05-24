import ButtonGrid from "./ButtonGrid";
import Display from "./Display";

const Calculator = () => {
  return (
    <div className="md:max-w-xl max-w-sm m-4 flex flex-col gap-6">
      <Display />
      <ButtonGrid />
    </div>
  );
};

export default Calculator;
