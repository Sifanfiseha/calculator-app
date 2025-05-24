import type { CalculatorState } from "../types/types";
import { create } from "zustand";
import { evaluate } from "mathjs";

const useCalculatorStore = create<CalculatorState>((set) => ({
  input: "",
  error: "",
  result: "",
  addDigit: (digit) => {
    set((state) => {
      if (state.input === "0" && digit === "0") return state;
      if (state.input === "" && digit === "0") return state;

      const newValue = state.input + digit;

      return {
        input: newValue,
      };
    });
  },

  addOprator: (oprator) => {
    set((state) => {
      const lastChar = state.input.slice(-1);
      const lastTwoChar = state.input.slice(-2);
      const isOprator = ["+", "-", "*", "/"].includes(lastChar);

      if (oprator === "-" && lastTwoChar !== "-") {
        return { input: state.input + "-" };
      }

      if (state.input === "" || isOprator) {
        return state;
      }
      return {
        input: state.input + oprator,
      };
    });
  },
  clear: () => {
    set({
      input: "",
      error: "",
      result: "",
    });
  },
  deleteLast: () => {
    console.log("jo");
    set((state) => ({
      input: state.input.slice(0, -1),
    }));
  },
  evaluate: () => {
    set((state) => {
      try {
        const fullExpression = state.input;
        let result;
        if (state.input.trim() !== "") {
          result = evaluate(fullExpression);
        } else {
          result = "0";
        }
        return {
          input: String(result),
          result: String(result),
          error: "",
        };
      } catch {
        return { error: `Error: Invalid expression` };
      }
    });
  },
  resetError: () => {
    set(() => ({ error: "" }));
  },
  setError: (msg) => {
    set({ error: msg });
  },
}));

export default useCalculatorStore;
