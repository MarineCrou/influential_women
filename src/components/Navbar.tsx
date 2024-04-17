import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <nav className="bg-grey-100 text-black p-0 font-serif text-lg font-semibold navbar">
      <hr />
      <div className="w-full flex justify-between items-center mt-3 mb-3 pr-0 px-0">
        <div>
          <ScrollLink to={"featuredWoman"} className="px-4">
            Featured Woman
          </ScrollLink>
          <ScrollLink to={"unsungWomen"} className="px-4 mt-6">
            Unsung Women
          </ScrollLink>
        </div>
        {/* <div>
          <img
            src="../media/unsung-woman-logo-1.png"
            alt="Logo"
            className="w-12"
          />
        </div> */}
        <div>
          <RouterLink to={"/signup"} className="px-4 signup">
            Sign Up
          </RouterLink>
          <RouterLink to={"/login"} className="px-4 login">
            Login
          </RouterLink>
        </div>
      </div>
      <hr />
    </nav>
  );
}

export default Navbar;
