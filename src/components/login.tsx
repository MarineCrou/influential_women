import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import woman from "../media/women.webp";
import woman2 from "../media/woman-fauteuil-desk.png";
import loginVideo from "../media/login-video.mp4";

interface LoginData {
  username: string;
  email: string;
  password: string;
}

export default function Login({ fetchUser }: { fetchUser: Function }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginData>({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e: any) {
    const fieldName = e.target.name;
    const newFormData = structuredClone(formData);
    newFormData[fieldName as keyof typeof formData] = e.target.value;
    setFormData(newFormData);
    setErrorMessage("");
  }

  async function handleSubmit(e: SyntheticEvent) {
    try {
      e.preventDefault();
      const resp = await axios.post("/api/login", formData);
      localStorage.setItem("token", resp.data.token);
      console.log(resp.data);
      fetchUser();
      navigate("/");
    } catch (e: any) {
      setErrorMessage(e.response.data.message);
    }
  }

  console.log("user in login:", formData);

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Image container */}
        <div className="hidden lg:block w-1/2">
          <img
            src={woman}
            alt="Log In"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 font-serif">
                Welcome Back!
              </h2>
              <div>
                <label
                  htmlFor="name"
                  className="text-medium font-bold text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name={"username"} // Is the name of the field on the backend !!!
                  id="username"
                  placeholder="Enter your Name"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-medium font-bold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name={"email"}
                  id="email"
                  placeholder="Enter your Email"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errorMessage && (
                  <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-medium font-bold text-gray-700 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name={"password"}
                  id="password"
                  placeholder="Enter your Password"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errorMessage && (
                  <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Log In
              </button>
            </form>
            <hr />
            <div className="text-sm font-light text-gray-500 mt-5">
              Don't have an account? Create{" "}
              <Link to={"/signup"} className="text-indigo-500 font-normal">
                an account here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
