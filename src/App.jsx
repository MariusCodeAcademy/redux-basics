import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

// jei vartotojas prisilogines, rodyti UserProfile, COunter ir Header
// jei ne Header ir Auth

function App() {
  return (
    <>
      <Header />
      <Auth />
      <UserProfile />
      <Counter />
    </>
  );
}

export default App;
