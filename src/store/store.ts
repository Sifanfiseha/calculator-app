import type { CalculatorState } from "../types/types";
import { create } from "zustand";

const useCalculatorStore = create<CalculatorState>((set) => ({
  currentValue: "",
  input: "21,131",
  error: "",
  overwrite: false,
  result: "",
  addDigit: (digit) => {
    set((state) => ({
      currentValue: state.overwrite ? digit : state.currentValue + digit,
      input: state.overwrite ? digit : state.currentValue + digit,
      overwrite: false,
    }));
  },
  addOprator: (oprator) => {
    set((state) => {
      const lastChar = state.currentValue.slice(-1);
      const isOprator = ["+", "-", "*", "/"].includes(lastChar);
      if (state.currentValue === "" || isOprator) {
        return state;
      }
      return {
        input: state.input + state.currentValue + oprator,
        currentValue: "",
      };
    });
  },
  clear: () => {
    set({
      currentValue: "",
      input: "",
      error: "",
      overwrite: false,
      result: "",
    });
  },
  deleteLast: () => {
    set((state) => ({
      currentValue: state.currentValue.slice(0, -1),
    }));
  },
  evaluate: () => {
    set((state) => {
      try {
        const fullExpression = state.input + state.currentValue;
        const result = eval(fullExpression);
        return {
          input: "",
          result: String(result),
          currentValue: String(result),
          overwrite: true,
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
