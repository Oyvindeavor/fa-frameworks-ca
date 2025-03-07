import styles from "./page.module.scss";
import Form from "@/components/Form";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Litt & Kvert - Contact",
    description: "Contact page for the store",
  };
}

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.contactText}>Contact Us</h1>
      <Form />
    </div>
  );
}
