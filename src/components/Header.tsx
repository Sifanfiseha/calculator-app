import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl theme1:text-white theme2:text-Very-dark-grayish-yellow theme3:text-Light-yellow font-bold uppercase">
        calc
      </h1>
      <div className="flex gap-8">
        <h2 className="uppercase font-bold theme1:text-white theme2:text-Very-dark-grayish-yellow theme3:text-Light-yellow ">
          theme
        </h2>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
