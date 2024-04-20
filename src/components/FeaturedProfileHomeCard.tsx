import { Link } from "react-router-dom";

function FeaturedProfileHomeCard({ id, contributions }: any) {
  if (!contributions || contributions.length === 0) return null; // Check for undefined or empty contributions

  const { name, bio, img, nationality, achievements, field } = contributions[0];
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:flex-1">
          <h2 className="text-xl text-gray-600 ">Featured Woman</h2>
          <h3 className="text-3xl font-bold text-gray-800 font-serif">
            {name}
          </h3>
          {/* <p className="text-md text-gray-500 mt-2">{field}</p> */}
          <p className="text-md text-gray-500 mt-2">{field}</p>
          <p className="mt-4 text-gray-700"> {bio}</p>
          <Link to={`/profile/${id}`}>
            {" "}
            <button className="mt-5  text-indigo-500 hover:text-indigo-700">
              Learn More ➡️
            </button>
          </Link>
        </div>
        <div className="md:flex-1">{img && <img src={img} alt={name} />}</div>
      </div>
    </div>
  );
}

export default FeaturedProfileHomeCard;
