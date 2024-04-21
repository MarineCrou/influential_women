import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../config";
import axios from "axios";

function EditProfile() {
  const navigate = useNavigate();

  const { id } = useParams(); // Getting the id from the URL, which matched the id in the app route
  console.log("This is the woman id on the edit page", id);

  const [womanData, setWomanData] = useState({
    achievements: "",
    additional_content: "",
    bio: "",
    contribution_type: "",
    date_of_birth: "",
    field: "",
    img: "",
    name: "",
    nationality: "",
    status: "",
  } as any);
  console.log(womanData);

  // Get the initial data from the backend to display:
  useEffect(() => {
    console.log("Edit Page has MOUNTED 🙋‍♀️🎉");

    async function fetchProfile() {
      try {
        const resp = await axios.get(`${baseUrl}/women/${id}`);
        const profileData = resp.data;
        console.log("EDIT PROFILE - GOT THE WOMAN DATA", profileData);
        if (profileData.latest_contribution) {
          setWomanData(profileData.latest_contribution);
        } else {
          console.error("No approved contributions found");
        }
      } catch (error) {
        console.error("Failed to fetch woman data:", error);
      }
    }
    fetchProfile();
  }, [id]);

  console.log("EDIT PROFILE - GOT THE WOMAN DATA AGAIN", womanData);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setWomanData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const dataToSend = {
      latest_contribution: womanData,
    };
    try {
      const resp = await axios.post(`${baseUrl}/women/${id}`, dataToSend, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Profile updated:", resp.data);
      navigate(`/profile/${id}`);
    } catch (error: any) {
      console.error("Failed to update profile:", error.response.data);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-24">
      <div className="w-full max-w-3xl bg-white rounded-md shadow-xl p-8">
        <form onSubmit={handleSubmit} className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 font-serif">
            Edit Profile
          </h1>

          <div className="space-y-4">
            <div>
              <button
                type="button"
                className="inline-flex w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Contribution Type
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <input
              type="url"
              name="contribution_type"
              placeholder="Contribution Type"
              value={womanData.contribution_type}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-200 ease-in-out"
            />
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
              value={womanData.additional_content}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-200 ease-in-out"
              //   rows="3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-10 px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-colors duration-300"
          >
            Submit Edits
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
