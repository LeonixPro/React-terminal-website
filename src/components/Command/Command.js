import styles from "./Command.module.scss";
const Command = ({ command, processCommand }) => {
  return (
    <div className={styles.selector}>
      <label htmlFor="command">
        LeonixPro@command: <b>~$</b>{" "}
        <span className={styles.command}>
          {command}
          <i></i>
        </span>
      </label>
      <input
        type="text"
        autoComplete="off"
        id="command"
        className={styles.command}
        onChange={processCommand}
        onKeyDown={processCommand}
        autoFocus={true}
      />
    </div>
  );
};

export default Command;
