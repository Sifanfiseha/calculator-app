import ButtonGrid from "./ButtonGrid";
import Display from "./Display";
import Header from "./Header";

const Calculator = () => {
  return (
    <div className="md:max-w-xl max-w-sm m-4 flex flex-col gap-6">
      <Header />
      <Display />
      <ButtonGrid />
    </div>
  );
};

export default Calculator;
