import useCalculatorStore from "../store/store";

const Display = () => {
  const { input } = useCalculatorStore();

  return (
    <input
      type="text"
      value={input}
      readOnly
      className="md:text-4xl text-3xl text-White font-bold text-right bg-Very-dark-desaturated-blue w-full rounded-xl md:px-6 px-4 md:py-7 py-5 focus:outline-none"
    />
  );
};

export default Display;
