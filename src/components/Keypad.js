import { useContext } from 'react';
import styles from '../app.module.css';
import CalculationContext from '../context/calculation';

const Keypad = () => {
  const padValues = ['C', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '', '.', '='];
  const { handleValues } = useContext(CalculationContext);

  return (
    <div className={styles.padContainer}>
      {padValues.map((val, index) => {
        return (
          <div key={index} className={styles.padItem} onClick={() => { handleValues(val) }}>
            {val}
          </div>
        )
      })}
    </div>
  )
};

export default Keypad;