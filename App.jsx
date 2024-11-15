import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import './App.css';

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const APP_ID = '73b47488';
    const APP_KEY = 'cb99a2710fc5f1b98e146db967903b12';

    const fetchRecipes = async () => {
    const response = await fetch(
        `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits.map(hit => hit.recipe));
    };

    const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes();
    };

    return (
    <div className="container">
        <h1>Find Delicious Recipes</h1>
        <form onSubmit={handleSearch}>
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for recipes..."
        />
        <button type="submit">Search</button>
        </form>
        <div className="grid">
        {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
        ))}
        </div>
    </div>
    );
};

export default App;
