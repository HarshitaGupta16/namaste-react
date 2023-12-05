import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  console.log("header rendered");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // If no dependency array => useEffect is called on every render
  // If dependency array is empty = [] => useEffect is on initial render(just once)
  // If dependency array is [btnName] => useEffect is called every time btnName is updated.
  useEffect(() => {
    console.log("useeffect called");
  }, [btnName]);

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-[200px]" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex items-center text-[20px]">
          <li className="m-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="hover:bg-lime-400 px-4 py-2 rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-lime-400 px-4 py-2 rounded-md">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:bg-lime-400 px-4 py-2 rounded-md">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:bg-lime-400 px-4 py-2 rounded-md">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:bg-lime-400 px-4 py-2 rounded-md">Cart</li>
          <button
            className="bg-gray-300 p-2 px-5 hover:bg-gray-400 mx-2"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
          <li className="px-4 py-2 rounded-md font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
