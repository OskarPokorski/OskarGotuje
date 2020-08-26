import React, {useEffect, useState} from 'react';
import Recipe from "./recipe";


const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/recipes")
            .then(response => response.json())
            .then(response => {
                setRecipes(response)
            })
    }, [])

    return (
        <div className="recipes">
            <div className="container" id="#recipies">
                <div className="recipes-text">
                    <div className="recipes-text-left">
                        <p>Sortowanie:</p>
                        <p>Najnowsze</p>
                        <p>Najpopularniejsze</p>
                    </div>
                    <div className="recipes-text-right">
                        <p>Widok:</p>
                        <p>Kafelki</p>
                        <p>Lista</p>
                    </div>
                </div>
                <div className="recipes-boxes">

                    {recipes.map((recipe, i) => {

                        return (
                            <Recipe
                                data={recipe}
                                key={i}
                            />
                        )
                    })
                    }

                </div>
            </div>
        </div>
    )
}
export default Recipes