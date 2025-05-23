import useCalculatorStore from "../store/store";

const Display = () => {
  const { input } = useCalculatorStore();
  return (
    <input
      type="text"
      value={input}
      readOnly
      className="text-4xl font-bold text-right bg-white w-full rounded-xl px-6 py-7 focus:outline-none"
    />
  );
};

export default Display;
