import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
  const { logout } = useAuth0();

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/shop"> Shop </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <Link>
          <button
            className="navButton"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            LogOut
          </button>
        </Link>
        ;
      </div>
    </div>
  );
};
