import { createContext, useState } from "react";
import { list, authList } from "../services/list";
import { authenticateUser } from "../services/auth";

export const MainContext = createContext();

export const ContextProvider = ({ children }) => {
  const [general, setGeneral] = useState(true);
  const [error, setError] = useState(false);
  const [login, setLogin] = useState(false);
  const [help, setHelp] = useState(false);
  const [init, setInit] = useState(false);
  const [authData, setAuthData] = useState(false);
  const [projects, setProjects] = useState(false);
  const [project, setProject] = useState(false);
  const [projectId, setProjectId] = useState(null);
  const [auth, setAuth] = useState(false);
  const [logged, setLogged] = useState(false);
  const [command, setCommand] = useState("");
  const handleLogin = (info) => {
    authenticateUser(info).then((res) => {
      if (res) {
        setAuthData(res);
        setLogged(true);
        setAuth(false);
        setGeneral(true);
      } else {
        setAuth(false);
        setError("Invalid Credentials! Access Denied!");
      }
    });
  };

  const handleProject = (e) => {
    const command = e.target.value;
    const action = command.split("-");
    if (e.key === "Enter") {
      const id = action[1];
      switch (command) {
        case "clear":
          if (help) setHelp(false);
          if (auth) setAuth(false);
          if (init) setInit(false);
          if (error) setError(false);
          if (project) setProject(false);
          if (projects) setProjects(false);
          if (projectId) setProjectId(null);
          if (command) setCommand(null);
          setGeneral(true);
          break;

        case `open project -${id}`:
          if (help) setHelp(false);
          if (auth) setAuth(false);
          if (init) setInit(false);
          if (projects) setProjects(false);
          if (error) setError(false);
          setProjectId(id);
          setGeneral(false);
          setProject(true);
          break;

        default:
          break;
      }
    }
  };

  const processCommand = (e) => {
    setCommand(e.target.value);
    const command = e.target.value;
    if (e.key === "Enter") {
      if (list.includes(command)) {
        switch (command) {
          case "help":
            if (error) setError(false);
            setHelp(true);
            setGeneral(false);
            break;

          case "auth":
            if (!authData) {
              if (help) setHelp(false);
              if (error) setError(false);
              setGeneral(false);
              setAuth(true);
            } else {
              if (init) setInit(false);
              setGeneral(false);
              setError("Access Denied");
            }
            break;

          case "clear":
            if (help) setHelp(false);
            if (auth) setAuth(false);
            if (init) setInit(false);
            if (error) setError(false);
            if (command) setCommand(null);
            setGeneral(true);
            break;
        }
      } else if (authData && authList.includes(command)) {
        switch (command) {
          case "leonix init":
            if (help) setHelp(false);
            if (error) setError(false);
            if (auth) setAuth(false);
            setGeneral(false);
            setInit(true);
            break;

          case "projects init":
            if (help) setHelp(false);
            if (error) setError(false);
            if (auth) setAuth(false);
            if (init) setInit(false);
            setGeneral(false);
            setProjects(true);
            break;

          case "leonix logout":
            if (help) setHelp(false);
            if (auth) setAuth(false);
            if (error) setError(false);
            if (init) setInit(false);
            if (projects) setProjects(false);
            if (project) setProject(false);
            if (logged) setLogged(false);
            if (authData) setAuthData(false);
            setGeneral(true);
            break;
        }
      } else {
        if (help) setHelp(false);
        if (auth) setAuth(false);
        if (init) setInit(false);
        if (projects) setProjects(false);
        if (project) setProject(false);
        setError(true);
        setGeneral(false);
      }
    }
  };

  const contextValues = {
    general,
    error,
    login,
    help,
    init,
    project,
    projectId,
    projects,
    handleProject,
    authData,
    auth,
    logged,
    command,
    handleLogin,
    processCommand,
  };
  return (
    <>
      <MainContext.Provider value={contextValues}>
        {children}
      </MainContext.Provider>
    </>
  );
};
