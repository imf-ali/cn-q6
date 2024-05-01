import { createContext, useState } from "react";

const CalculationContext = createContext();

export const CalculationContextProvider = (props) => {

  const [calculation, setCalculation] = useState('');
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [op, setOp] = useState(null);

  const operation = () => {
    let result = 0;
    const a = parseFloat(val1);
    const b = parseFloat(val2);
    switch (op) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
      case '%':
        result = a/100;
        break;
      default:
        break;
    }
    setCalculation(result.toString());
    setVal1(result);
    setVal2(0);
    setOp(null);
  }

  const handleValues = (val) => {
    if((val >= '0' && val <= '9') || val === '.') {
      if(op === null){
        setVal1(val1 + val);
        setCalculation(calculation + val);
      } else {
        setVal2(val2 + val);
        setCalculation(calculation + val)
      }
    } else if(val === '+/-'){
      if(op === null) {
        setVal1((parseFloat(val1)*-1).toString());
        setCalculation((parseFloat(calculation)*-1).toString());
      } else {
        setVal2((parseFloat(val2)*-1).toString());
        setCalculation(val1 + op + (parseFloat(val2)*-1).toString());
      }
    } else {
      if(val === 'C'){
        setVal1('');
        setVal2('');
        setCalculation('');
        setOp(null);
      } else if((val1 === '') || (val2 === '' && val === '=' && op !== '%')){
        return;
      } else if(val === '=' && op !== null){
        operation();
      } else{
        setOp(val);
        setCalculation(calculation + val)
      }
    }
  }

  return (
    <CalculationContext.Provider value={{
      calculation,
      handleValues,
    }}>
      {props.children}
    </CalculationContext.Provider>
  );
};

export default CalculationContext;