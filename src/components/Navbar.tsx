import React from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { IUser } from "../Interfaces/user";

type CustomLinkProps = {
  scrollTo: string;
  children: React.ReactNode;
  className?: string;
};

interface NavbarProps {
  user: null | IUser;
  setUser: Function;
}

function Navbar({ user, setUser }: NavbarProps) {
  console.log("user in the navbar: ", user);
  const location = useLocation();
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  }

  const CustomLink = ({ scrollTo, children, className }: CustomLinkProps) => {
    const handleNavigate = () => {
      if (location.pathname !== "/") {
        navigate("/", { replace: true }); // Navigate to home
        setTimeout(() => {
          // Delay the scroll until after the navigation has a chance to render the new page
          scroller.scrollTo(scrollTo, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        }, 100); // Small delay to ensure the new page is rendered
      } else {
        scroller.scrollTo(scrollTo, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }
    };

    return (
      <RouterLink to="/" onClick={handleNavigate} className={className}>
        {children}
      </RouterLink>
    );
  };

  return (
    <nav className="bg-grey-100 text-black p-0 font-serif text-lg font-semibold navbar">
      <hr />
      <div className="w-full flex justify-between items-center mt-3 mb-3 pr-0 px-0">
        <div>
          <CustomLink className="px-4" scrollTo="featuredWoman">
            Featured Woman
          </CustomLink>
          <CustomLink className="px-4 mt-6" scrollTo="unsungWomen">
            Unsung Women
          </CustomLink>
          <RouterLink to={"/aboutus"}>About Us</RouterLink>
        </div>
        <div>
          {!user && (
            <RouterLink to={"/signup"} className="px-4 signup">
              Sign Up
            </RouterLink>
          )}
          {!user && (
            <RouterLink to={"/login"} className="px-4 login">
              Login
            </RouterLink>
          )}
          {user && (
            <RouterLink to={"/createProfile"} className="mx-4">
              Create Profile
            </RouterLink>
          )}
          {user && (
            <RouterLink to={"/"} onClick={logout}>
              Logout
            </RouterLink>
          )}
        </div>
      </div>
      <hr />
    </nav>
  );
}

export default Navbar;
