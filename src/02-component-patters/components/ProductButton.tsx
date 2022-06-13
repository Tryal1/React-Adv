import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButton = ({ className, style }: Props) => {
  const { increasBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => increasBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        onClick={() => increasBy(1)}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disa}`}
      >
        +
      </button>
    </div>
  );
};
