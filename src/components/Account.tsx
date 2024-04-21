import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../config";
import axios from "axios";

function Account({ user, setUser }: any) {
  console.log("user in the ACCOUNT PAGE: ", user);
  const navigate = useNavigate();

  const [userContributions, setUserContributions] = useState([]);

  useEffect(() => {
    if (user && user.id) {
      async function fetchContributions() {
        try {
          const response = await axios.get(`${baseUrl}/user/${user.id}`);
          setUserContributions(response.data.contributions);
        } catch (error) {
          console.error("Failed to fetch contributions", error);
        }
      }

      fetchContributions();
    }
  }, [user]); // Depend on the user object to re-run this effect when user changes

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  }
  console.log(`These are the user's contributions`, userContributions);

  // Check if user is available before trying to render the component
  if (!user) {
    return <div>Loading user information...</div>;
  }

  return (
    <div>
      <div className="bg-gray-50 py-4 flex justify-between items-center">
        <section className="flex items-center space-x-4 mx-10">
          <p className="text-2xl">🙋‍♀️</p>
          <p className="text-gray-600">{user.email}</p>
        </section>
        <header className="flex items-center space-x-4 mx-10">
          <Link
            to={"/"}
            className="text-grey px-4 py-2 rounded hover:text-indigo-600"
          >
            Home
          </Link>
          <Link
            to="/"
            onClick={logout}
            className="text-grey px-4 py-2 rounded hover:text-indigo-600"
          >
            Logout
          </Link>
        </header>
      </div>

      <div className="min-h-screen bg-gray-50 py-10 px-5 md:px-10">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow">
          <section className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 text-center font-serif mt-8">
              Hello {user.username}!
            </h1>
            <h3 className="text-xl text-gray-600 text-center">
              Here's your contribution overview:
            </h3>
          </section>

          <p className="text-lg font-semibold text-gray-800 mb-4">
            List of the contributions you made:
          </p>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Date Created
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contribution Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {" "}
                    Edited Profile
                  </th>
                </tr>
              </thead>
              <tbody>
                {userContributions.map((contribution: any) => (
                  <tr key={contribution.id} className="bg-white border-b">
                    <td className="px-6 py-4">
                      {new Date(contribution.created_at).toLocaleString()}
                    </td>
                    <td className="px-6 py-4">{contribution.name}</td>
                    <td className="px-6 py-4">
                      {contribution.contribution_type}
                    </td>
                    <td className="px-6 py-4">{contribution.status}</td>
                    <Link to={`/profile/${contribution.woman_id}`}>
                      <td className="px-6 py-4 text-indigo-500 hover:text-indigo-700 hover:underline">
                        profile
                      </td>
                    </Link>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Account;
