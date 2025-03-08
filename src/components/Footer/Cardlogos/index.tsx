import Image from "next/image";
import styles from "./cardlogo.module.scss";

export const Cardlogos = () => {
  const sizes = {
    width: 36,
    height: 36,
  };
  return (
    <div className={styles.cardlogos}>
      <Image src={"/visa-line.svg"} alt="Visa" width={sizes.width} height={sizes.height} />
      <Image
        src={"/mastercard-line.svg"}
        alt="Mastercard"
        width={sizes.width}
        height={sizes.height}
      />
      <Image
        src={"/vipps-logo-monochrome-black.svg"}
        alt="Vipps"
        width={sizes.width}
        height={sizes.height}
      />
      <Image src={"/paypal-line(1).svg"} alt="Paypal" width={sizes.width} height={sizes.height} />
    </div>
  );
};
