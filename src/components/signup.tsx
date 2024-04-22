import { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../config";
import { Link } from "react-router-dom";
import unsungWomen from "../media/unsung-woman-logo-2.webp";

interface ErrorData {
  username: string | number | readonly string[] | undefined;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const Signup = () => {
  const navigate = useNavigate();

  //we have to set state for the user. here we can set the state for all 4 inputs. the state should start with an empty string.
  const [formData, setFormData] = useState<ErrorData>({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errorData, setErrorData] = useState({
    username: "",
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
  console.log("errors:", errorData?.username);

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Image container */}
        <div className="hidden lg:block w-1/2">
          <img
            src={unsungWomen}
            alt="Sign Up"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-lg font-normal text-gray-500 mt-3 mb-2">
              Sign Up
            </h3>
            <h2 className="text-2xl font-bold text-gray-900 font-serif mb-7">
              Join & Contribute
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-gray-700"
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
                {errorData.username && (
                  <small className="has-text-danger">
                    {errorData.username}
                  </small>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-gray-700"
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
                {errorData.email && (
                  <p className="text-red-500 text-xs mt-1">{errorData.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-bold text-gray-700 "
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
                {errorData.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorData.password}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="passwordConfirmation"
                  className="text-sm font-bold text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name={"passwordConfirmation"}
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
