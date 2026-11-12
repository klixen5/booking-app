import { useId, useState, type ChangeEvent, type SubmitEvent } from "react";
import styles from "./Register.module.css";

type RegisterValues = {
  displayName: string
  email: string;
  password: string;
  confirmedPassword: string;
};

type RegisterStatus = "idle" | "pending" | "fulfilled" | "rejected";

export default function Register() {
  const nicknameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const confirmedPasswordId = useId();
  const [fields, setFields] = useState<RegisterValues>({
    displayName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const [status, setStatus] = useState<RegisterStatus>("idle");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const field = e.target.name;
    const value = e.target.value;
    setFields({ ...fields, [field]: value });
  }

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (fields.email.trim() === "" 
      || fields.password.trim() === ""
      || fields.displayName.trim() === ""
      || fields.confirmedPassword.trim() === ""
    ) {
      return;
    }

    if (fields.password !== fields.confirmedPassword) {
      return;
    }

    setStatus("pending");
    // отправка данных
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label htmlFor={nicknameId}>Придумайте ник</label>
          <input
            id={nicknameId}
            type="text"
            name="displayName"
            value={fields.displayName}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor={emailId}>Введите email</label>
          <input
            id={emailId}
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor={passwordId}>Придумайте пароль</label>
          <input
            id={passwordId}
            type="password"
            name="password"
            value={fields.password}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor={confirmedPasswordId}>Подтвердите пароль</label>
          <input
            id={confirmedPasswordId}
            type="password"
            name="confirmedPassword"
            value={fields.confirmedPassword}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={status === "pending"}>
          Зарегистрироваться
        </button>
        <div>
          Есть аккаунт? <a href="#">Войти</a>
        </div>
      </form>
    </div>
  );
}
