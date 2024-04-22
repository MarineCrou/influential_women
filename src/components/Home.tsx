import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import FeaturedProfileHomeCard from "./FeaturedProfileHomeCard";
import ProfileListHomeCard from "./ProfileListHomeCard";
import { Link } from "react-router-dom";
import { baseUrl } from "../config";
import bannerVideo from "../media/baner-video-women.mp4";
import logo from "../media/unsung-woman-logo-1.png";

interface Women {
  //
}

function Home() {
  const [woman, getWoman] = useState(null as any);
  const [womenList, setWomenList] = useState([]);

  React.useEffect(() => {
    async function fetchWoman() {
      const resp = await fetch(`${baseUrl}/women/featuredProfile`);
      const dataFetched = await resp.json();
      getWoman(dataFetched);
    }
    fetchWoman();
  }, []);
  console.log("This is the woman to be featured", woman);

  useEffect(() => {
    async function fetchWomen() {
      try {
        const response = await fetch(`${baseUrl}/women`);
        const data = await response.json();
        setWomenList(data);
      } catch (error) {
        console.error("Failed to fetch women list:", error);
      }
    }
    fetchWomen();
  }, []);
  console.log(womenList);

  if (!womenList || womenList.length === 0) {
    return <p>No profiles found.</p>;
  }
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-full h-full object-cover" // Use 'object-cover' to ensure full coverage
          src={bannerVideo}
          id="banner-video"
        >
          Your browser does not support the video tag.
        </video>

        {/* Text overlay */}
        <div
          className="absolute z-10 flex flex-col items-center justify-center w-full h-full text-center text-white"
          style={{ background: "rgba(0,0,0,0.3)" }}
        >
          <h1
            className="text-7xl font-bold font-serif"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
          >
            Unsung Women
          </h1>
          <p
            className="text-xl mt-4"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
          >
            Join Our Community to Celebrate and Document the Women Who Shaped
            Our World
          </p>
        </div>
      </div>
      {/* Featured Woman on Home page (randomly featured, evertime the page is loaded) */}
      <section id="featuredWoman">
        {woman && (
          <FeaturedProfileHomeCard
            id={woman.id}
            contributions={woman?.contributions}
          />
        )}
      </section>
      <hr />
      <section id="unsungWomen" className="pt-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 font-serif mt-12 pt-4">
            Unsung Women Collection
          </h2>
          <h3 className="text-xl text-gray-600 mb-12 mt-4">
            A collection of inspiring women who've changed the world
          </h3>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
            {" "}
            {womenList.map((woman: any) => (
              <ProfileListHomeCard
                key={woman.id}
                id={woman.id}
                contributions={woman.contributions}
              />
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <img src={logo} className="h-16" alt="Unsung Women Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-serif">
              Unsung Women
            </span> */}

            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to={"/aboutus"}>
                  <a className="hover:underline me-4 md:me-6">About us</a>
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Marine Crouzet™. All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Home;
