import styles from "./footer.module.scss";
import { Socials } from "@components/Footer/Socials";
import { QuickLinks } from "@components/Footer/Quicklinks";
import { Logo } from "@components/Logo";
import { Support } from "@components/Footer/Support";
import { Copyright } from "./Copyright";
import { Cardlogos } from "./Cardlogos";
import { Divider } from "@components/Divider";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontainer}>
        <Logo /> {/* -- Logo -- */}
        <Divider />
        <Socials /> {/* -- Social Media Links -- */}
        <div className={styles.sectionlinks}>
          <QuickLinks /> {/* -- Quick Links -- */}
          <Support /> {/* -- Support Links -- */}
        </div>
        <Copyright /> {/* -- Copyright -- */}
        <Cardlogos /> {/* -- Card Logos -- */}
      </div>
    </footer>
  );
};
