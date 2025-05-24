import useCalculatorStore from "../store/store";
import Button from "./Button";
import { CalcNum, Lastrow, RightCol } from "../utils/data";

const ButtonGrid = () => {
  const {} = useCalculatorStore();
  return (
    <div className="bg-Very-dark-desaturated-blue/80 flex flex-col gap-4 p-6 rounded-xl">
      <div className="grid grid-cols-[1fr_auto] gap-4">
        <div className="flex gap-4 flex-col">
          {CalcNum.map((row, i) => (
            <div className="flex gap-4 items-center justify-between" key={i}>
              {row.map((value, i) => (
                <Button type="deg" key={i} value={value} />
              ))}
            </div>
          ))}
          <div className="flex gap-4 items-center justify-between">
            {Lastrow.map((value, i) => (
              <Button type="deg" key={i} value={value} />
            ))}
            <Button type="opr" value="/" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Button type="del" value="del" />
          {RightCol.map((value, i) => (
            <Button type="opr" key={i} value={value} />
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <Button type="reset" value="RESET" />
        <Button type="=" value="=" />
      </div>
    </div>
  );
};

export default ButtonGrid;
