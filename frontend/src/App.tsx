// App
import { useEffect } from "react";

// useDapp
import { useEthers } from "@usedapp/core/dist/esm/src/hooks";
import { ChainId } from "@usedapp/core/dist/esm/src/constants";
import { config } from "./utils/config";

// Styles
import "./App.css";

function App() {
  const { activateBrowserWallet, account, deactivate } = useEthers();

  return (
    <div className="App">
      {" "}
      <div>
        <button onClick={() => activateBrowserWallet()}>Connect</button>
        <button onClick={() => deactivate()}>Disconnect</button>
      </div>
      {account && <p>Account: {account}</p>}
    </div>
  );
}

export default App;
