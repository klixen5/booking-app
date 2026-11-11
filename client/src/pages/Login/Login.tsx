import { useId, useState, type ChangeEvent, type SubmitEvent } from 'react'
import styles from './Login.module.css'


type LoginValues = {
  email: string
  password: string
}

type LoginStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected'


export default function Login() {
  const loginId = useId()
  const passwordId = useId()
  const [fields, setFields] = useState<LoginValues>({ email: '', password: '' })
  const [status, setStatus] = useState<LoginStatus>('idle')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const field = e.target.name
    const value = e.target.value
    setFields({ ...fields, [field]: value })
  }

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    if (fields.email.trim() === '' || fields.password.trim() === '') {
      return
    }

    setStatus('pending')
    // отправка данных
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label htmlFor={loginId}>Введите email</label>
          <input
            id={loginId}
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor={passwordId}>Введите пароль</label>
          <input
            id={passwordId}
            type="password"
            name="password"
            value={fields.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={status === "pending"}>
          Войти
        </button>
        <div>
          Нет аккаунта? <a href='#'>Зарегистрироваться</a>
        </div>
      </form>
    </div>
  );
}