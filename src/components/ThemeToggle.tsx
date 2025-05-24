import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { applyTheme } from "../theme/theme";

const ThemeToggle: React.FC = () => {
  const [index, setIndex] = useState(1);
  console.log(index);

  const handleToggleTheme = () => {
    setIndex((prevIndex) => (prevIndex % 3) + 1);
  };

  useEffect(() => {
    applyTheme(index);
  }, [index]);

  let position: string;

  if (index === 1) {
    position = "justify-start";
  } else if (index === 2) {
    position = "justify-center";
  } else {
    position = "justify-end";
  }

  return (
    <motion.button
      className={`flex items-center ${position} relative p-1 w-20 rounded-full theme1:bg-Very-dark-desaturated-blue/75
        theme2:bg-Grayish-red  cursor-pointer theme3:bg-Very-dark-violet-2`}
      onClick={handleToggleTheme}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className="w-4 h-4 rounded-full theme2:bg-Orange theme1:bg-Red theme3:bg-Pure-cyan "
      />
      <div className="absolute flex inset-0 top-[-180%] font-bold px-2 justify-between items-center">
        <p className="theme1:text-white theme3:text-Light-yellow  theme2:text-Very-dark-grayish-yellow ">
          1
        </p>
        <p className="theme1:text-white theme3:text-Light-yellow  theme2:text-Very-dark-grayish-yellow ">
          2
        </p>
        <p className="theme1:text-white theme3:text-Light-yellow  theme2:text-Very-dark-grayish-yellow ">
          3
        </p>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
