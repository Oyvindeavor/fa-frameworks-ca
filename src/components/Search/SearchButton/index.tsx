import styles from "./searchbutton.module.scss";

interface SearchButtonProps {
  onClick: () => void;
}

/**
 * A button component that triggers a search action when clicked.
 *
 * @component
 * @param {SearchButtonProps} props - The properties for the SearchButton component.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @returns {JSX.Element} The rendered search button component.
 */
export function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <button
      onClick={onClick}
      className={styles.searchButton}
      type="button"
      aria-label="Search"
      title="Click to search"
    >
      Search
    </button>
  );
}
