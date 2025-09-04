import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "src/Store/Slices/authSlice";

function Navbar() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function onLogout() {
    dispatch(logout());
  }

  return (
    <div className="navbar bg-gray-800 px-10">
      <div className="flex-1">
        <Link
          to={"/"}
          className="btn btn-success-content normal-case text-xl"
        >
          Book Shelf
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>{authState.isLoggedIn && <Link>Shelfs</Link>}</li>
          <li>{authState.username && <Link>{authState.username}</Link>}</li>
          <li>
            <details>
              <summary>Options</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  {authState.isLoggedIn && (
                    <Link to={"/signin"} onClick={onLogout}>
                      Logut
                    </Link>
                  )}
                  {!authState.isLoggedIn && <Link to={"/signup"}>Signup</Link>}
                  {!authState.isLoggedIn && <Link to={"/signin"}>Signin</Link>}
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
