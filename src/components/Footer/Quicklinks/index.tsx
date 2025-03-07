import styles from "./quicklinks.module.scss";
import Link from "next/link";

export const QuickLinks = () => {
  return (
    <nav aria-label="Footer Quick Links">
      <div className={styles.quicklinks}>
        <h3 id="quick-links-heading">Quick Links</h3>
        <ul role="list" aria-labelledby="quick-links-heading">
          <li>
            <Link className={styles.link} href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={"/about"}>
              {" "}
              About
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={"/contact"}>
              {" "}
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
