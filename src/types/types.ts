interface CalculatorState {
  input: string;

  result: string;

  error: string | null;
  addDigit: (digit: string) => void;
  addOprator: (oprator: string) => void;
  clear: () => void;
  deleteLast: () => void;
  evaluate: () => void;
  setError: (msg: string) => void;
  resetError: () => void;
}

interface ButtonProps {
  value: string;
  type: string;
}

export type { CalculatorState, ButtonProps };
