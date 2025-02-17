import styles from "./support.module.scss";
import Link from "next/link";

export const Support = () => {
  return (
    <nav aria-label="Footer Support Links">
      <div className={styles.support}>
        <h3 id="support-heading">Support</h3>
        <ul role="list" aria-labelledby="support-heading">
          <li>
            <Link className={styles.link} href={"/faq"}>
              FAQ
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={"/contact"}>
              Contact
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={"/terms"}>
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
