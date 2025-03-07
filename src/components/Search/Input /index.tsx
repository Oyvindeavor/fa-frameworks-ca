import { ChangeEvent, KeyboardEvent } from "react";
import styles from "./input.module.scss";

interface SearchInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
}

export function SearchInput({ value, onChange, onKeyDown, onFocus, onBlur }: SearchInputProps) {
  return (
    <div className={styles.searchWrapper}>
      <label htmlFor="search" className={styles.searchLabel}>
        Search products
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search products"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        className={styles.searchInput}
        aria-labelledby="search"
      />
    </div>
  );
}
