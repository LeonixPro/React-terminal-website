import Command from "../Command/Command";
import styles from "./Error.module.scss";
import { TypeAnimation } from "react-type-animation";
const Error = ({ command, processCommand }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.error}>
        <b>Error:</b>{" "}
        <TypeAnimation
          sequence={["Command hasn't been recognized!"]}
          wrapper="span"
          cursor={false}
          repeat={false}
          speed={75}
        />
      </div>
      <div>
        <TypeAnimation
          sequence={["Please, check commands list and try again."]}
          wrapper="span"
          cursor={false}
          repeat={false}
          speed={75}
        />
      </div>
      <div>
        <TypeAnimation
          sequence={["In order to open list of available commands type"]}
          wrapper="span"
          cursor={false}
          repeat={false}
          speed={75}
        />
        <b>
          {" "}
          <TypeAnimation
            sequence={["'help'"]}
            wrapper="span"
            cursor={false}
            repeat={false}
            speed={500}
          />
        </b>
      </div>
      <Command command={command} processCommand={processCommand} />
      {/* <div className={styles.selector}>
        <label htmlFor="command">
          LeonixPro@command: <b>~$</b>{" "}
          <span className={styles.command}>
            {command}
            <i></i>
          </span>
        </label>
        <input
          type="text"
          id="command"
          className={styles.command}
          onChange={processCommand}
          onKeyDown={processCommand}
          autoFocus={true}
        />
      </div> */}
    </div>
  );
};

export default Error;
