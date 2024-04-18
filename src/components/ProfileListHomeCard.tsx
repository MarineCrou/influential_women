import React from "react";
import { Link } from "react-router-dom";

// I need to link this card to the Single Profile CARD, to get the details on this profile

function ProfileListHomeCard({ contributions }) {
  if (!contributions) return null; // Simplified check

  const { name, img, nationality, date_of_birth } =
    contributions[contributions.length - 1]; // Destructure the necessary properties

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-none md:w-1/3 mb-10 ">
      {/* <Link to={`/profile/${id}`} className="flex flex-col"> */}
      {img && (
        <img
          src={img}
          alt={name}
          className="w-full object-cover h-48 md:h-full" // Ensure the image takes up the full width
        />
      )}
      <div className="p-8 space-y-2">
        {" "}
        // Increased spacing inside the card
        <h3 className="text-xl leading-tight font-medium text-black font-serif">
          {name}
        </h3>
        <p className="text-gray-500">{nationality}</p>
        <p className="text-gray-500">{date_of_birth}</p>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default ProfileListHomeCard;
