import type { CalculatorState } from "../types/types";
import { create } from "zustand";

const useCalculatorStore = create<CalculatorState>((set) => ({
  input: "",
  error: "",
  result: "",
  addDigit: (digit) => {
    set((state) => ({
      input: state.input + digit,
      overwrite: false,
      result: "",
    }));
  },
  addOprator: (oprator) => {
    set((state) => {
      const lastChar = state.input.slice(-1);
      const isOprator = ["+", "-", "*", "/"].includes(lastChar);

      if (state.input === "" || isOprator) {
        return state;
      }
      return {
        input: state.input + oprator,
        currentValue: "",
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
        const result = eval(fullExpression);
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
