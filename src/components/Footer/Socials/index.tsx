import Link from "next/link";
import Image from "next/image";
import styles from "./socials.module.scss";

export const Socials = () => {
  return (
    <nav aria-label="Social media links">
      <ul className={styles.socials} role="list">
        <li>
          <Link
            href="https://www.facebook.com"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <Image
              src="/facebook-circle-line.svg"
              alt="Facebook"
              width={48}
              height={48}
              className={styles.socialImage}
              priority
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram profile"
          >
            <Image
              src="/instagram-line.svg"
              alt="Instagram"
              width={48}
              height={48}
              className={styles.socialImage}
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://bsky.app"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Bluesky profile"
          >
            <Image
              src="/bluesky-line.svg"
              alt="Bluesky"
              width={48}
              height={48}
              className={styles.socialImage}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
