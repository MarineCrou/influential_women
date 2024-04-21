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

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white p-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center ">
          <RouterLink to="/" className="text-lg font-semibold font-serif">
            Unsung Women
          </RouterLink>
          <div className="hidden md:flex font-serif">
            <CustomLink
              className="px-4 hover:text-indigo-700"
              scrollTo="featuredWoman"
            >
              Featured Woman
            </CustomLink>
            <CustomLink
              className="px-4 hover:text-indigo-700"
              scrollTo="unsungWomen"
            >
              Unsung Women
            </CustomLink>
            <RouterLink to="/aboutus " className="px-4 hover:text-indigo-700">
              About Us
            </RouterLink>
          </div>
          <div className="hidden md:flex font-serif ">
            {!user ? (
              <>
                <RouterLink to="/signup" className="px-4 hover:text-indigo-700">
                  Sign Up
                </RouterLink>
                <RouterLink to="/login" className="px-4 hover:text-indigo-700">
                  Login
                </RouterLink>
              </>
            ) : (
              <>
                <RouterLink
                  to="/women/NewProfile"
                  className="px-4 hover:text-indigo-700"
                >
                  Create Profile
                </RouterLink>
                <RouterLink
                  to="/"
                  onClick={logout}
                  className="px-4 hover:text-indigo-700"
                >
                  Logout
                </RouterLink>
                <RouterLink
                  to="/account"
                  className="px-4 hover:text-indigo-700"
                >
                  Account
                </RouterLink>
              </>
            )}
          </div>
          {/* <button onClick={toggleMenu} className="md:hidden">
          Menu
        </button> */}
          {/* <div className={`${isOpen ? "block" : "hidden"} md:hidden`}> */}
          {/* Mobile menu items here */}
          {/* </div> */}
        </div>
        {/* <div className="md:hidden" id="mobile-menu"> */}
        {/* Mobile menu content, which can be toggled on/off */}
        {/* </div> */}
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
