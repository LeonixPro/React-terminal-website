import { useContext, useEffect, useState } from "react";
import styles from "./Project.module.scss";
import { showProjects } from "../services/projects";
import { MainContext } from "../context/context";
export const List = () => {
  const [projects, setProjects] = useState([]);
  const [input, setInput] = useState(null);

  const { handleProject } = useContext(MainContext);

  useEffect(() => {
    showProjects().then((data) => {
      setProjects(data);
    });
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
            <b>{`[>]`} Total Projects:</b> {projects.length}
          </div>
          <div>
            <b>{`[>]`} Completed:</b>{" "}
            {projects.filter((x) => x.status === "Completed").length}
          </div>
          <div>
            <b>{`[>]`} Pending:</b>{" "}
            {projects.length -
              projects.filter((x) => x.status === "Completed").length}
          </div>
        </div>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} Required Access Level:</b> 3
          </div>
          <div>
            <b>{`[>]`} Remote Control:</b> Enabled
          </div>
          <div>
            <b>{`[>]`} Open Project:</b> Enabled
          </div>
        </div>
        <div className={styles.line}>
          <div>
            <b>{`[>]`} Create Project:</b> Enabled
          </div>
          <div>
            <b>{`[>]`} Edit Project:</b> Disabled
          </div>
          <div>
            <b>{`[>]`} Delete Project:</b> Disabled
          </div>
        </div>
      </div>
      <div>
      <div className={styles.help}>
          <b>{`[$]`} Action command: </b>
          {`[open project -id]`}
        </div>
      </div>
      <div className={styles.projects}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Project Id</th>
              <th scope="col">Title</th>
              <th scope="col">Created By</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects &&
              projects.map((project) => (
                <tr key={project.u_id}>
                  <th scope="row">{project.u_id}</th>
                  <td>{project.title}</td>
                  <td>{project.owner}</td>
                  <td>{project.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
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
