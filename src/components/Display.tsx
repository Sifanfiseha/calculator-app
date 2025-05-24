import useCalculatorStore from "../store/store";

const Display = () => {
  const { input, result } = useCalculatorStore();

  console.log("input", input);
  return (
    <input
      type="text"
      value={result === "" ? input : result}
      readOnly
      className="md:text-4xl text-3xl font-bold text-right bg-white w-full rounded-xl md:px-6 px-4 md:py-7 py-5 focus:outline-none"
    />
  );
};

export default Display;
