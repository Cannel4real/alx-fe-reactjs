import { Link } from "react-router-dom";

// Inside the card rendering loop
<Link to={`/recipe/${recipe.id}`}>
  <div
    className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300"
  >
    <img
      src={recipe.image}
      alt={recipe.title}
      className="w-full h-32 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
      <p className="text-gray-600">{recipe.summary}</p>
    </div>
  </div>

  <div className="text-center my-6">
  <Link
    to="/add-recipe"
    className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
  >
    Add New Recipe
  </Link>
</div>
</Link>

