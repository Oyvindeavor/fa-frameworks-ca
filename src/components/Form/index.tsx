"use client"; // If using Next.js App Router

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormSchema } from "./schemas";
import styles from "./Form.module.scss";

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block">
          Name:
        </label>
        <input id="name" {...register("name")} className={styles.nameInput} />
        {errors.name && (
          <p className={styles.error} role="alert" aria-live="assertive">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block">
          Subject:
        </label>
        <input id="subject" {...register("subject")} className={styles.subjectInput} />
        {errors.subject && (
          <p className={styles.error} role="alert" aria-live="assertive">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block">
          Email:
        </label>
        <input id="email" {...register("email")} type="email" className={styles.emailInput} />
        {errors.email && (
          <p className={styles.error} role="alert" aria-live="assertive">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Body/Message Field */}
      <div>
        <label htmlFor="body" className="block">
          Message:
        </label>
        <textarea id="body" {...register("body")} className={styles.textarea} />
        {errors.body && (
          <p className={styles.error} role="alert" aria-live="assertive">
            {errors.body.message}
          </p>
        )}
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
}
