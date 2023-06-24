import { useState } from "react";
import styles from "./Auth.module.scss";
const Commands = ({ handleLogin }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [login, setLogin] = useState(false);
  const [input, setInput] = useState([]);
  const command = (e) => {
    setInput(e.target.value);
  };
  const onLogin = (e) => {
    if (e.key === "Enter") {
      setLogin(true);
      setData({ ...data, email: e.target.value });
      setInput("");
      e.target.value = "";
    }
  };
  const submit = (e) => {
    if (e.key === "Enter") {
      setLogin(true);
      handleLogin({ ...data, password: e.target.value });
    }
  };
  if (!login) {
    return (
      <div className={styles.selector}>
        <label htmlFor="userName">
          LeonixPro@command: Username <b>~$</b>{" "}
          <span className={styles.command}>
            {input}
            <i></i>
          </span>
        </label>
        <input
          type="text"
          id="userName"
          autoComplete="off"
          name="email"
          className={styles.command}
          onChange={command}
          onKeyDown={onLogin}
          autoFocus={true}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.selector}>
        <label htmlFor="password">
          LeonixPro@command Password: <b>~$</b>{" "}
          <span className={styles.command}>
            {input}
            <i></i>
          </span>
        </label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          name="password"
          className={styles.command}
          onChange={command}
          onKeyDown={submit}
          autoFocus={true}
        />
      </div>
    );
  }
};

export default Commands;
