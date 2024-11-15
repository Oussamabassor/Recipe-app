const RecipeCard = ({ recipe }) => {
    return (
    <div className="card">
        <img className="card-image" src={recipe.image} alt={recipe.label} />
        <div className="card-content">
        <div className="card-title">{recipe.label}</div>
        <ul className="card-list">
            {recipe.ingredients.slice(0, 5).map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
            ))}
        </ul>
        </div>
    </div>
    );
};

export default RecipeCard;
