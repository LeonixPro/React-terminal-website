import Commands from "./Commands";
import styles from "./Auth.module.scss";
const Auth = ({ command, handleLogin }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div>You have to pass authentication in order to proceed.</div>
        <div>Please, type your username.</div>
      </div>

      <Commands handleLogin={handleLogin} />
    </div>
  );
};

export default Auth;
