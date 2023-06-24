import Command from "../Command/Command";
import styles from "./Help.module.scss";
import { TypeAnimation } from "react-type-animation";
const Help = ({ command, processCommand, error }) => {
  const helpList = [
    { title: "help", description: "Display general commands" },
    { title: "clear", description: "Clear terminal" },
    { title: "auth", description: "Start authentication" },
    { title: "contact", description: "Display contact information" },
    { title: "leonix logout", description: "End session and log out" },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.auth}>
        <div className={styles.alert}>Project is under construction and not all functions, features and pages are available.</div>
        To log in as a demo user, use following credentials:
        <div>
          <b>Email:</b> demo@leonixpro.com
        </div>
        <div>
          <b>Password:</b> demo123456!
        </div>
      </div>
      {helpList.map((x, index) => {
        return (
          <div className={styles.main} key={index}>
            <div className={styles.left}>
              {
                <TypeAnimation
                  sequence={[`${x.title}`]}
                  wrapper="span"
                  cursor={false}
                  repeat={false}
                  speed={75}
                />
              }
            </div>
            <div className={styles.right}>
              {
                <TypeAnimation
                  sequence={[`${x.description}`]}
                  wrapper="span"
                  cursor={false}
                  repeat={false}
                  speed={75}
                />
              }
            </div>
          </div>
        );
      })}
      <div className={styles.info}>
        <b>
          {
            <TypeAnimation
              sequence={[`[>] More commands will be available after authentication.`]}
              wrapper="span"
              cursor={false}
              repeat={false}
              speed={75}
            />
          }
        </b>
      </div>
      <Command command={command} processCommand={processCommand} />
    </div>
  );
};

export default Help;
