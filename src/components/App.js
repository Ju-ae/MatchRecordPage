import AppRouter from "components/Router";
import { authService } from "fbase";
import { useState } from "react";

function App() {
  const auth = authService;
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>@JuaeBae</footer>
    </>
  );
}

export default App;
