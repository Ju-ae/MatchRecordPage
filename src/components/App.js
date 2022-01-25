import { findAllByTestId } from "@testing-library/react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Auth from "routes/Auth";

function App() {
  const auth = authService;
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("auth stateChange true");
        setIsLoggedIn(true);
      } else {
        console.log("auth stateChange false");
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, []);

  return (
    <>
      {init ?
        (
          <AppRouter isLoggedIn={isLoggedIn} />
        ) : <h3>initialize</h3>}
        
      <footer>@JuaeBae</footer>
    </>
  );
}

export default App;
