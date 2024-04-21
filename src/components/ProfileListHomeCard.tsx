import React from "react";
import { Link } from "react-router-dom";

// NEED TO CHANGE THIS CARD TO RETURN ONLY THE LASTEST APPROVED CONTRIBUTION ! => backend

function ProfileListHomeCard({ id, contributions }: any) {
  if (!contributions) return null; // Simplified check

  const { name, img, nationality, date_of_birth, field } =
    contributions[contributions.length - 1]; // Destructure the necessary properties

  return (
    <div className="bg-white rounded-lg overflow-hidden mb-10 w-full">
      {img && (
        <img
          src={img}
          alt={name}
          className="w-full object-cover h-48 sm:h-64" // Removed md:h-full for consistency
        />
      )}
      <div className="p-4 sm:p-8 space-y-2">
        <h3 className="text-lg sm:text-xl leading-tight font-medium text-black font-serif">
          {name}
        </h3>
        <p className="text-sm text-gray-500">{field}</p>
        <p className="text-sm text-gray-500">{date_of_birth}</p>
        {/* link to individual card */}
        <Link to={`/profile/${id}`}>
          {" "}
          <button className="mt-5  text-indigo-500 hover:text-indigo-700">
            Learn More ➡️
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProfileListHomeCard;
