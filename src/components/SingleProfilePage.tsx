import React, { useEffect, useState } from "react";
// import SingleProfileCard from "./SingleProfileCard";
import { useNavigate, useParams } from "react-router-dom";

function SingleProfilePage() {
  const navigate = useNavigate();
  const [woman, getWoman] = useState("");
  const { id } = useParams(); // Use useParams to get the parameters.
  console.log("Params from URL:", useParams());

  useEffect(() => {
    console.log("Individual profile Page mounted 🙋‍♀️🎉");

    async function fetchWoman() {
      try {
        const resp = await fetch(`/api/women/${id}`);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-4xl bg-white rounded-lg p-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            Profile of an Unsung Heroine
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700">{woman.name}</h2>
          <p className="text-md text-gray-500">{woman.nationality}</p>
          <p className="text-md text-gray-500 mb-4">{woman.field}</p>
        </div>

        {woman.img && (
          <img
            src={woman.img}
            alt={woman.name}
            className="w-full sm:max-w-xs mx-auto mt-4 rounded-lg "
          />
        )}

        <div className="mt-6 px-4 py-2 text-gray-700">
          <p className="text-lg leading-relaxed">{woman.bio}</p>
          <p className="text-lg leading-relaxed mt-4">
            {woman.additionalContent}
          </p>
        </div>

        <button
          className="mt-6 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg  hover:bg-blue-700 transition-colors duration-300 mx-auto block"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default SingleProfilePage;
