import React, { useEffect, useState } from "react";
// import SingleProfileCard from "./SingleProfileCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../config";
import { IUser } from "../Interfaces/user";

interface SingleProfileProps {
  user: null | IUser;
  setUser: Function;
}

function SingleProfilePage({ user, setUser }: SingleProfileProps) {
  console.log("user in the Single Profile Page: ", user);
  const navigate = useNavigate();

  const { id, name } = useParams(); // Use useParams to get the parameters.
  console.log("Params from URL:", useParams());

  const [woman, getWoman] = useState("" as any);

  useEffect(() => {
    console.log("Individual profile Page mounted 🙋‍♀️🎉");

    async function fetchWoman() {
      try {
        const resp = await fetch(`${baseUrl}/women/${id}`);
        const dataFetched = await resp.json();
        console.log(`This is the data fetched: ${dataFetched}`);
        getWoman(dataFetched.latest_contribution);
      } catch (error) {
        console.error("Failed to fetch woman data:", error);
      }
    }

    fetchWoman();
  }, [id]);

  console.log("SINGLE CARDS - GOT THE INDIVIDUAL WOMAN", woman);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-10">
      <div className="w-full max-w-4xl bg-white rounded-lg  p-6 relative">
        <div className="text-center">
          {user && (
            <Link to={`/profile/${id}/edit`}>
              <div
                className="text-sm text-indigo-500 hover:text-indigo-900 text-grey-500
                 py-2 px-4 rounded-full text-right"
              >
                Edit Profile ✍️
              </div>
            </Link>
          )}
          <h1 className="text-5xl font-semibold text-gray-800 mb-4 font-serif pt-4">
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
              {woman.additionnalContent}
            </p>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <button
              className="py-2 px-4 text-indigo-500 font-semibold rounded-lg hover:text-indigo-700 transition-colors duration-300"
              onClick={() => navigate("/")}
            >
              Home Page ➡️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProfilePage;
