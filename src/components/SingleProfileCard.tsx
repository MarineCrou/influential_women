// import React from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

// function SingleProfileCard({ contributions }: any) {
//   const navigate = useNavigate(); // Hook for navigation

//   if (!contributions || contributions.length === 0) return null; // Guard clause for empty contributions

//   const { name, bio, img, nationality, achievements, additionalContent } =
//     contributions[0];

//   return (
//     // Ensure the return statement is used to return JSX
//     <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center">
//       <h2 className="text-3xl text-gray-600">Our Unsung Women</h2>
//       <p className="text-md text-gray-500 mt-2">{nationality}</p>
//       {img && <img src={img} alt={name} className="max-w-xs mt-4" />}
//       <p className="mt-4 text-gray-700">{achievements}</p>
//       <p className="mt-4 text-gray-700">{bio}</p>
//       <p className="mt-4 text-gray-700">{additionalContent}</p>
//       <button
//         className="mt-6 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
//         onClick={() => navigate("/")} // Use navigate to redirect to the home page
//       >
//         Back to Home
//       </button>
//     </div>
//   );
// }

// export default SingleProfileCard;
