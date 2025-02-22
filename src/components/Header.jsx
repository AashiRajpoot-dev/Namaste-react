import { useContext, useState } from "react";
import LOGO_URL from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInyuser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  return (
    <div className="header flex  justify-between px-5 items-center shadow-md sm:bg-amber-950 md:bg-green-600 lg:bg-pink-500">
      <div className="logo-container">
        <img className="logo w-25 cursor-pointer" src={LOGO_URL} />
      </div>
      <div className="nav-items  pr-8">
        <ul className="flex gap-2.5 items-center">
          <li>
            <b>Online Status:</b> {onlineStatus ? "Online" : "Offline"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
         
          <li>
            <div className="font-bold text-xl"> <Link to="/cart">Cart:({cartItems.length}) </Link></div>
          </li>
          <li>
            <button
              className="cursor-pointer login px-5 bg-amber-300 text-white p-2"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="font-bold">{loggedInyuser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
