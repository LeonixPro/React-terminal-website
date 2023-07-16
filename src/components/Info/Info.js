import styles from "./Info.module.scss";
import { TypeAnimation } from "react-type-animation";
import Help from "../Help/Help";
import Error from "../Error/Error";
import Auth from "../Auth/Auth";
import Init from "../Init/Init";
import { MainContext } from "../context/context";
import { useContext } from "react";
import { List } from "../Projects/List";
import { Project } from "../Projects/Details";
const Info = () => {
  const {
    general,
    authData,
    logged,
    command,
    processCommand,
    help,
    error,
    init,
    project,
    projectId,
    projects,
    auth,
    handleLogin,
  } = useContext(MainContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div>
            <b>
              <TypeAnimation
                sequence={["Title"]}
                wrapper="span"
                cursor={false}
                repeat={false}
                speed={75}
              />
            </b>
            <TypeAnimation
              sequence={["Leonix PRO"]}
              wrapper="span"
              cursor={false}
              repeat={false}
              speed={75}
            />
          </div>
          <div></div>
          <b>
            <TypeAnimation
              sequence={["Location"]}
              wrapper="span"
              cursor={false}
              repeat={false}
              speed={75}
            />
          </b>
          <TypeAnimation
            sequence={["https://leonixpro.com"]}
            wrapper="span"
            cursor={false}
            repeat={false}
            speed={75}
          />
        </div>
        <div className={styles.right}>
          {logged && (
            <>
              <div className={styles.profileDetails}>
                <div className={styles.boxes}>
                  <div>
                    <b>
                      <TypeAnimation
                        sequence={["Full name"]}
                        wrapper="span"
                        cursor={false}
                        repeat={false}
                        speed={75}
                      />
                    </b>
                    <TypeAnimation
                      sequence={[`${authData.name} ${authData.last_name}`]}
                      wrapper="span"
                      cursor={false}
                      repeat={false}
                      speed={75}
                    />
                  </div>
                  <div>
                    <b>
                      <TypeAnimation
                        sequence={["Email"]}
                        wrapper="span"
                        cursor={false}
                        repeat={false}
                        speed={75}
                      />
                    </b>
                    <TypeAnimation
                      sequence={[`${authData.email}`]}
                      wrapper="span"
                      cursor={false}
                      repeat={false}
                      speed={75}
                    />
                  </div>
                </div>
                <div className={styles.boxes}>
                  <div>
                    <b>
                      <TypeAnimation
                        sequence={["Access Level"]}
                        wrapper="span"
                        cursor={false}
                        repeat={false}
                        speed={75}
                      />
                    </b>
                    <TypeAnimation
                      sequence={[`${authData.access}`]}
                      wrapper="span"
                      cursor={false}
                      repeat={false}
                      speed={75}
                    />
                  </div>
                  <div>
                    <b>
                      <TypeAnimation
                        sequence={["Unique ID"]}
                        wrapper="span"
                        cursor={false}
                        repeat={false}
                        speed={75}
                      />
                    </b>
                    <TypeAnimation
                      sequence={[`${authData.u_id}`]}
                      wrapper="span"
                      cursor={false}
                      repeat={false}
                      speed={75}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.line}>
        <div>Type <b> `help` </b> to display all commands</div>
        <div>
          Type <b> `clear` </b> to clear the terminal
        </div>
      </div>
      <div className={styles.selector}>
        {general && (
          <div>
            <label htmlFor="command">
              LeonixPro@command: <b>~$</b>{" "}
              <span className={styles.command}>
                {command}
                <i></i>
              </span>
            </label>
            <input
              type="text"
              className={styles.command}
              onChange={processCommand}
              onKeyDown={processCommand}
              autoFocus={true}
            />
          </div>
        )}
      </div>
      {help && (
        <Help command={command} processCommand={processCommand} error={error} />
      )}
      {init && <Init command={command} processCommand={processCommand} authData={authData} />}
      {projects && <List command={command} processCommand={processCommand} />}
      {project && (
        <Project
          command={command}
          processCommand={processCommand}
          projectId={projectId}
        />
      )}
      {auth && <Auth command={command} handleLogin={handleLogin} />}
      {error && <Error command={command} processCommand={processCommand} />}
    </div>
  );
};

export default Info;
