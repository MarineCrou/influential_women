import { Link } from "react-router-dom";
import logo from "../media/unsung-woman-logo-1.png";

function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:flex-1">
          <h2 className="text-2xl text-gray-600 ">About Us</h2>
          <h3 className="text-5xl font-bold text-gray-800 font-serif">
            Celebrating the{" "}
            <span className="relative text-white bg-indigo-700">
              {" "}
              Unsung Heroines
            </span>{" "}
            of History
          </h3>
          <p className="text-md text-gray-500 mt-7">
            Welcome to "Unsung Women," a dedicated platform that shines a light
            on the remarkable women throughout history whose contributions have
            often been overlooked or forgotten. Our mission is to uncover and
            celebrate the stories of women who have shaped our world in profound
            ways. From trailblazers in science and politics to pioneers in arts
            and social reforms, "Unsung Women" is committed to honoring these
            influential figures and ensuring their achievements are recognized
            and appreciated by generations to come.
          </p>
          <p className="text-xl text-gray-700 font-serif mt-8">
            {" "}
            Help Us Remember Them:
          </p>
          <p className="text-md text-gray-500 mt-2">
            {" "}
            "Unsung Women" is not just a repository of history—it is a living,
            breathing community driven by participation and contribution from
            people like you. We invite you to join us as a contributor, whether
            by sharing stories of women who have impacted your life or by
            helping to unearth hidden figures whose influence deserves to be
            acknowledged. Together, we can create a more comprehensive and
            inclusive narrative, giving voice to those who have long been
            voiceless and crafting a lasting legacy that truly represents the
            breadth of women's impact on our world.
          </p>
          <Link to={"/signup"}>
            <button className="mt-7 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full font-serif">
              Sign Up ➡
            </button>
          </Link>
        </div>
        <div className="md:flex-1">{<img src={logo} alt="Logo" />}</div>
      </div>
    </div>
  );
}

export default AboutUs;
