import { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../config";

interface ErrorData {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
}

const Signup = () => {
  const navigate = useNavigate();

  //we have to set state for the user. here we can set the state for all 4 inputs. the state should start with an empty string.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errorData, setErrorData] = useState<ErrorData>({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  function handleChange(e: any) {
    const fieldName = e.target.name;
    const newFormData = structuredClone(formData);
    newFormData[fieldName as keyof typeof formData] = e.target.value;
    setFormData(newFormData);
  }

  async function handleSubmit(e: SyntheticEvent) {
    // ! Adding a try/catch
    try {
      e.preventDefault();
      const resp = await axios.post(`${baseUrl}/signup`, formData);
      console.log(resp.data);
      // ! take them to the login page
      navigate("/login");
    } catch (e: any) {
      // ! Set errors in the catch
      setErrorData(e.response.data.errors);
    }
  }

  console.log(formData);
  console.log(formData.name);
  console.log("errors:", errorData?.name);

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Image container */}
        <div className="hidden lg:block w-1/2">
          <img
            src="../media/unsung-woman-logo-2.webp"
            alt="Sign Up"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Sign Up</h2>
              <div>
                <label
                  htmlFor="name"
                  className="text-medium font-bold text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="userName"
                  placeholder="Enter your Name"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errorData.name && (
                  <p className="text-red-500 text-xs mt-1">{errorData.name}</p>
                )}
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
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errorData.email && (
                  <p className="text-red-500 text-xs mt-1">{errorData.email}</p>
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
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errorData.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorData.password}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="passwordConfirmation"
                  className="text-medium font-bold text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  placeholder="Enter your Password Confirmation"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  value={formData.passwordConfirmation}
                  onChange={handleChange}
                  required
                />
                {errorData.passwordConfirmation && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorData.passwordConfirmation}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
