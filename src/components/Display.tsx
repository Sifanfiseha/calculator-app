import useCalculatorStore from "../store/store";

const Display = () => {
  const { input } = useCalculatorStore();

  return (
    <input
      type="text"
      value={input}
      readOnly
      className="md:text-4xl text-3xl theme2:text-Very-dark-grayish-yellow theme1:text-White font-bold text-right theme1:bg-Very-dark-desaturated-blue theme2:bg-Very-light-gray w-full rounded-xl 
      theme3:bg-Very-dark-violet-2 md:px-6 px-4 md:py-7
      theme3:text-Light-yellow   py-5 focus:outline-none"
    />
  );
};

export default Display;
