import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../config";
import axios from "axios";

function EditProfile() {
  const navigate = useNavigate();

  const { id } = useParams(); // Getting the id from the URL, which matched the id in the app route
  console.log("This is the woman id on the edit page", id);

  const [woman, setWoman] = useState("" as any);

  const [formData, setFormData] = useState({
    contribution_type: "",
    name: "",
    date_of_birth: "",
    nationality: "",
    img: "",
    bio: "",
    achievements: "",
    status: "",
    id: "",
    field: "",
  });
  console.log(formData);

  // Get the initial data from the profile to display:
  useEffect(() => {
    console.log("Edit Page has MOUNTED 🙋‍♀️🎉");

    async function fetchProfile() {
      try {
        const resp = await fetch(`${baseUrl}/women/${id}`);
        const profileData = await resp.json();
        setFormData(profileData.contributions[0]);
      } catch (error) {
        console.error("Failed to fetch woman data:", error);
      }
    }
    fetchProfile();
  }, [id]);

  async function handleSubmit(e: SyntheticEvent) {
    try {
      e.preventDefault();
      const token = localStorage.getItem("token");
      const resp = await axios.put(`${baseUrl}/women/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(resp.data);
      navigate("/profile/:id/edit");
    } catch (e: any) {
      setFormData(e.response.data.errors);
    }
  }

  return (
    <div>
      <h1>Edit Profile</h1>
      {woman ? (
        <form onSubmit={handleSubmit}>
          {/* Example form field */}
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name"
          />
          <button type="submit">Save Changes</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default EditProfile;
