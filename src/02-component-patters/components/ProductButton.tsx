import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from "../styles/styles.module.css";

export const ProductButton = () => {
    const { increasBy, counter } = useContext(ProductContext);
  
    return (
      <div className={styles.buttonsContainer}>
        <button onClick={() => increasBy(-1)} className={styles.buttonMinus}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button onClick={() => increasBy(1)} className={styles.buttonAdd}>
          +
        </button>
      </div>
    );
  };