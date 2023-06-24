import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/context";
import styles from "./Project.module.scss";
import { openProject } from "../services/projects";
export const Project = ({ projectId }) => {
  const [showProject, setShowProject] = useState({});
  const [input, setInput] = useState(null);
  const { handleProject } = useContext(MainContext);
  useEffect(() => {
    openProject(projectId).then((res) => setShowProject(res));
  }, []);
  const handleAction = (e) => {
    const action = e.target.value;
    setInput(action);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} Project ID:</b> {showProject.id}
          </div>
          <div>
            <b>{`[>]`} Project Unique ID:</b> {showProject.u_id}
          </div>
          <div>
            <b>{`[>]`} Project Title:</b> {showProject.title}
          </div>
          <div>
            <b>{`[>]`} Status:</b> {showProject.status}
          </div>
        </div>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} Created By:</b> {showProject.owner}
          </div>
          <div>
            <b>{`[>]`} Creator ID:</b> {showProject.owner_id}
          </div>
          <div>
            <b>{`[>]`} Creation Date:</b> {showProject.add_date}
          </div>
          <div>
            <b>{`[>]`} Edit:</b> Disabled
          </div>
        </div>
      </div>
      <div className={styles.tasks}>
        <div>
          <b>{`[>]`} Task 1:</b> {showProject.task_1}
        </div>
        <div>
          <b>{`[>]`} Task 2:</b> {showProject.task_2}
        </div>
        <div>
          <b>{`[>]`} Task 3:</b> {showProject.task_3}
        </div>
        <div>
          <b>{`[>]`} Task 4:</b> {showProject.task_4}
        </div>
        <div>
          <b>{`[>]`} Task 5:</b> {showProject.task_5}
        </div>
      </div>
      <div className={styles.description}>{showProject.description}</div>
      <div className={styles.selector}>
        <label htmlFor="command">
          LeonixPro@command: <b>~$</b>{" "}
          <span className={styles.command}>
            {input}
            <i></i>
          </span>
        </label>
        <input
          type="text"
          id="command"
          className={styles.command}
          onChange={handleAction}
          onKeyDown={handleProject}
          autoFocus={true}
        />
      </div>
    </div>
  );
};
