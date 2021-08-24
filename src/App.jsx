import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

// jei vartotojas prisilogines, rodyti UserProfile, COunter ir Header
// jei ne Header ir Auth

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthetnticated);
  return (
    <>
      <Header />
      {isLoggedIn ? (
        <>
          <UserProfile />
          <Counter />
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
