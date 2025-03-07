import styles from "./counter.module.scss";

interface CounterProps {
  count: number;
}

export const Counter = ({ count }: CounterProps) => {
  return (
    <div className={styles.counter}>
      <p>{count}</p>
    </div>
  );
};
