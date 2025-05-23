interface CalculatorState {
  input: string;
  currentValue: string;
  result: string;
  overwrite: boolean;
  error: string | null;
  addDigit: (digit: string) => void;
  addOprator: (oprator: "+" | "-" | "*" | "/") => void;
  clear: () => void;
  deleteLast: () => void;
  evaluate: () => {};
  setError: (msg: string) => void;
  restError: () => void;
}

export type { CalculatorState };
