import Command from "../Command/Command";
import styles from "./Init.module.scss";
const Init = ({ command, processCommand, authData }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} User name:</b> {authData.name} {authData.last_name}
          </div>
          <div>
            <b>{`[>]`} Access level:</b> {authData.access}
          </div>
          <div>
            <b>{`[>]`} User group:</b> Demo
          </div>
        </div>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} Reg. Location:</b> {authData.city}, {authData.country}
          </div>
          <div>
            <b>{`[>]`} Date:</b> {authData.reg_date.split(" ", 1)}
          </div>
          <div>
            <b>{`[>]`} Time:</b> {authData.reg_date.slice(11, 19)}
          </div>
        </div>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} Authentication:</b> Granted
          </div>
          <div>
            <b>{`[>]`} Projects:</b> {authData.projects}
          </div>
          <div>
            <b>{`[>]`} Tasks:</b> {authData.tasks}
          </div>
        </div>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} Status:</b> {authData.status}
          </div>
          <div>
            <b>{`[>]`} Remote access:</b> Approved
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
