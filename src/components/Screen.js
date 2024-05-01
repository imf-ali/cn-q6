import { useContext } from "react";
import CalculationContext from "../context/calculation";
import styles from '../app.module.css';

const Screen = () => {
  const { calculation } = useContext(CalculationContext);
  return (
    <div className={styles.screen}> 
      {calculation.length ? calculation : '0'}
    </div>
  )
};

export default Screen;