import React, { useEffect, useState } from "react";
// import SingleProfileCard from "./SingleProfileCard";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../config";

interface Data {
  name: string;
  email: string;
}

function SingleProfilePage() {
  const navigate = useNavigate();
  const [woman, getWoman] = useState(null as any);
  const { id } = useParams(); // Use useParams to get the parameters.
  console.log("Params from URL:", useParams());

  useEffect(() => {
    console.log("Individual profile Page mounted 🙋‍♀️🎉");

    async function fetchWoman() {
      try {
        const resp = await fetch(`${baseUrl}/women/${id}`);
        console.log(`this is the response ${resp}`);
        const dataFetched = await resp.json();
        console.log(`This is the data fetched: ${dataFetched}`);
        getWoman(dataFetched.contributions[0]);
      } catch (error) {
        console.error("Failed to fetch woman data:", error);
      }
    }

    fetchWoman();
  }, [id]);

  console.log("SINGLE CARDS - GOT THE INDIVIDUAL WOMAN", woman);

  //   const { name, bio, img, nationality, achievements, additionalContent } =
  // woman.contributions[0];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-10">
      <div className="w-full max-w-4xl bg-white rounded-lg  p-6">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-gray-800 mb-4 font-serif pt-20">
            {woman && woman.name}
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {woman.field}
          </h2>

          {woman.img && (
            <div className="overflow-hidden  rounded-lg">
              <img
                src={woman.img}
                alt={woman.name}
                className="mx-auto w-full h-auto transform transition duration-500 hover:scale-110"
              />
            </div>
          )}

          <div className="mt-8 px-4 py-2 text-gray-700">
            <p className="text-sm text-gray-500 ">
              <strong className="font-serif">Date Of Birth: </strong>
              {woman.date_of_birth}
            </p>
            <p className="text-sm text-gray-500 mb-20">
              <strong className="font-serif">Nationality: </strong>
              {woman.nationality}
            </p>

            <p className="text-lg leading-relaxed mt-4 text-justify">
              <strong className="font-serif">Achievements: </strong>
              {woman.achievements}
            </p>
            <p className="text-lg leading-relaxed mt-4 text-justify">
              <strong className="font-serif">Bio: </strong>
              {woman.bio}
            </p>
            <p className="text-lg leading-relaxed text-justify">
              {woman.additionalContent}
            </p>
          </div>

          <button
            className="mt-8 py-2 px-4 text-indigo-500 font-semibold rounded-lg hover:text-indigo-700 transition-colors duration-300 mx-auto block"
            onClick={() => navigate("/")}
          >
            Home Page ➡️
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProfilePage;
