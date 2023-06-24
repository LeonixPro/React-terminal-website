import styles from "./Main.module.scss";
import logo from "./lion.png";
const Main = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="" />
      <h2>LEONIX PRO</h2>
      <div className={styles.second}>Leonix Protection System</div>
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
