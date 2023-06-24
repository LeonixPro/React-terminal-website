import Command from "../Command/Command";
import styles from "./Init.module.scss";
const Init = ({ command, processCommand }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} User name:</b> Leonix Pro
          </div>
          <div>
            <b>{`[>]`} Access level:</b> 10
          </div>
          <div>
            <b>{`[>]`} User group:</b> Owner
          </div>
        </div>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} Location:</b> Sofia, Bulgaria
          </div>
          <div>
            <b>{`[>]`} Date:</b> 25.04.2023
          </div>
          <div>
            <b>{`[>]`} Time:</b> 22:51
          </div>
        </div>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} Authentication:</b> Granted
          </div>
          <div>
            <b>{`[>]`} Projects:</b> 5
          </div>
          <div>
            <b>{`[>]`} Rewrite:</b> Disabled
          </div>
        </div>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} Engine:</b> V 1.0
          </div>
          <div>
            <b>{`[>]`} Protection:</b> LPS / Enabled
          </div>
          <div>
            <b>{`[>]`} Remote Control:</b> Enabled
          </div>
        </div>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} Engine:</b> V 1.0
          </div>
          <div>
            <b>{`[>]`} Protection:</b> LPS / Enabled
          </div>
          <div>
            <b>{`[>]`} Remote Control:</b> Enabled
          </div>
        </div>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} Engine:</b> V 1.0
          </div>
          <div>
            <b>{`[>]`} Protection:</b> LPS / Enabled
          </div>
          <div>
            <b>{`[>]`} Remote Control:</b> Enabled
          </div>
        </div>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} Engine:</b> V 1.0
          </div>
          <div>
            <b>{`[>]`} Protection:</b> LPS / Enabled
          </div>
          <div>
            <b>{`[>]`} Remote Control:</b> Enabled
          </div>
        </div>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} Engine:</b> V 1.0
          </div>
          <div>
            <b>{`[>]`} Protection:</b> LPS / Enabled
          </div>
          <div>
            <b>{`[>]`} Remote Control:</b> Enabled
          </div>
        </div>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} Software Version:</b> V 1.0
          </div>
          <div>
            <b>{`[>]`} Mode:</b> Active
          </div>
          <div>
            <b>{`[>]`} CMS:</b> Activated
          </div>
        </div>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} Engine:</b> React Js
          </div>
          <div>
            <b>{`[>]`} Version:</b> 16.83
          </div>
          <div>
            <b>{`[>]`} Powered By:</b> Leonix PRO
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div>
          <b>{`[$]`} Available commands: </b>
          {`[help / clear / auth, leonix logout / leonix init]`}
        </div>
        <div>
          <b>{`[$]`} Action commands {`[Partially available]`} : </b>
          {`[projects init / add project / open project -id / edit project -id / delete project -id ]`}
        </div>
        <div>
          <b>{`[$]`} Action commands {`[Not available yet]`} : </b>
          {`[tasks init / add task / open task -id / edit task -id / delete task -id ]`}
        </div>
      </div>
      <div className={styles.alert}>
        <b>Important - E0011: Unknown IP detected!</b> Restricted mode
        activated!
        <div>
          You have logged from unknown IP. Some functions has been disabled!
        </div>
      </div>
      <Command command={command} processCommand={processCommand} />
    </div>
  );
};

export default Init;
