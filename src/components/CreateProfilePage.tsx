import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../config";

function CreateNewProfile() {
  const navigate = useNavigate();

  const [womanData, setWomanData] = useState({
    name: "",
    date_of_birth: "",
    nationality: "",
    field: "",
    img: "",
    bio: "",
    achievements: "",
    additionalContent: "",
  });

  function handleChange(e: any) {
    const fieldName = e.target.name;
    const newFormData = structuredClone(womanData);
    newFormData[fieldName as keyof typeof womanData] = e.target.value;
    setWomanData(newFormData);
    console.log("this is the new form data", newFormData.contributions);
  }

  console.log("CREATE PROFILE - GOT THE WOMAN DATA", womanData);

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const dataToSend = {
      contributions: [
        {
          contribution_type: "New Profile Creation", // default type for all new profiles
          name: womanData.name,
          date_of_birth: womanData.date_of_birth,
          nationality: womanData.nationality,
          field: womanData.field,
          img: womanData.img,
          bio: womanData.bio,
          achievements: womanData.achievements,
          additionnal_content: womanData.additionalContent, // Make sure the key matches your backend expectation
          status: "Pending Review",
        },
      ],
    };
    const resp = await axios.post(`${baseUrl}/women/NewProfile`, dataToSend, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(resp.data);
    navigate("/");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-24">
      <div className="w-full max-w-3xl bg-white rounded-md shadow-xl p-8">
        <form onSubmit={handleSubmit} className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 font-serif">
            Create A New Profile
          </h1>
          <h3 className="text-xl  text-indigo-500 mb-8">
            Thank you for helping remember all these incredible women !
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Influential Woman's Name"
              value={womanData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-200 ease-in-out"
              required
            />
            <input
              type="text"
              name="date_of_birth"
              placeholder="Date of Birth"
              value={womanData.date_of_birth}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-200 ease-in-out"
              required
            />
            <input
              type="text"
              name="nationality"
              placeholder="Nationality"
              value={womanData.nationality}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-200 ease-in-out"
              required
            />
            <input
              type="text"
              name="field"
              placeholder="Field of influence. eg: Charity, Civil Rights, Arts..."
              value={womanData.field}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-200 ease-in-out"
              required
            />
            <input
              type="url"
              name="img"
              placeholder="Image URL"
              value={womanData.img}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-200 ease-in-out"
            />
            <textarea
              name="bio"
              placeholder="Bio"
              value={womanData.bio}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-200 ease-in-out"
              //   rows="5"
              required
            ></textarea>
            <textarea
              name="achievements"
              placeholder="Achievements"
              value={womanData.achievements}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-200 ease-in-out"
              //   rows="5"
              required
            ></textarea>
            <textarea
              name="additional_content"
              placeholder="Additional Content"
              value={womanData.additionalContent}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-200 ease-in-out"
              //   rows="3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-10 px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-colors duration-300"
          >
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNewProfile;
