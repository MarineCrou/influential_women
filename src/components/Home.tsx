import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import FeaturedProfileHomeCard from "./FeaturedProfileHomeCard";

function Home() {
  const [woman, getWoman] = useState(null);

  React.useEffect(() => {
    async function fetchWoman() {
      const resp = await fetch(`/api/women/featuredProfile`);
      const dataFetched = await resp.json();
      getWoman(dataFetched);
    }
    fetchWoman();
  }, []);
  console.log("This is the woman to be featured", woman);

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
          src="./media/baner-video-women.mp4"
          id="baner video"
        >
          Your browser does not support the video tag.
        </video>

        {/* Text overlay */}
        <div
          className="absolute z-10 flex flex-col items-center justify-center w-full h-full text-center text-white"
          style={{ background: "rgba(0,0,0,0.3)" }}
        >
          <h1
            className="text-7xl font-bold"
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
      <section id="featuredWoman">
        {/* Add the randomly featured woman of the month, centered : 
          - Name of the left 
          - Field
          - Short Bio
          - Square Image on right*/}
        {woman && (
          <FeaturedProfileHomeCard contributions={woman?.contributions} />
        )}
      </section>
      <section id="unsungWomen">
        {/* Display all of the profile cards here */}

        <h2>Unsung Women</h2>
        <p>Details about unsung women...</p>
      </section>
    </>
  );
}

export default Home;
