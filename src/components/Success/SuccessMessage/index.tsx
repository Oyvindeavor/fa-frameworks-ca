import styles from "./SuccessMessage.module.scss";

interface SuccessMessageProps {
  orderNumber?: string;
}

export function SuccessMessage({ orderNumber = "ORD123456" }: SuccessMessageProps) {
  return (
    <section className={styles.successMessage} role="status" aria-live="polite">
      <div className={styles.icon} aria-hidden="true">
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#28a745"
          strokeWidth="2"
          role="img"
        >
          <title>Success Icon</title>
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <h1>Thank You for Your Order!</h1>
      <p>
        Your order <strong>#{orderNumber}</strong> has been successfully placed.
      </p>
      <p>We’ve sent a confirmation to your email address.</p>
    </section>
  );
}
