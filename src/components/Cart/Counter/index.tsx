import Link from "next/link";
import styles from "./counter.module.scss";

interface CounterProps {
  count: number;
}

export const Counter = ({ count }: CounterProps) => {
  return (
    <div className={styles.counter}>
      <Link href="/checkout">
        <p>{count}</p>
      </Link>
    </div>
  );
};
