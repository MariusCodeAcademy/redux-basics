import classes from "./Header.module.css";
import { useSelector } from "react-redux";

// kai store isAuthenticated  === false tai neromdom linku ir button sako Login
// header.jsx paspaudus logout turetu mus isloginti. (paspaudus neturetu priloginti atgal)
const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthetnticated);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isLoggedIn && (
            <>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
            </>
          )}

          <li>
            {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
