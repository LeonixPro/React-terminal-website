import { useEffect, useState } from "react";
import "./assets/main.scss";
import Main from "./components/Main/Main";
import Info from "./components/Info/Info";
import { ContextProvider, MainContext } from "./components/context/context";
function App() {
  const [main, setMain] = useState(false);
  const [logo, setLogo] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLogo(!logo);
      setMain(!main);
    }, 5000);
  }, []);

  return (
    <div>
      {logo && <Main />}
      {main && (
        <ContextProvider>
          <Info />
        </ContextProvider>
      )}
      <div className="footer">
        <div>@ Levon Aramyan</div>
      </div>
    </div>
  );
}

export default App;
