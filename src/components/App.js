import { findAllByTestId } from "@testing-library/react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function App() {
  const auth = authService;
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() =>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, []);

  return (
    <>
    {init ? (
      <AppRouter isLoggedIn={isLoggedIn} />
      ): "Initializing"}
      <footer>@JuaeBae</footer>
    </>
  );
}

export default App;
