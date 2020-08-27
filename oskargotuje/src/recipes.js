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
        <>
            <div className="search">
                <div className="container">
                    <h1 className="search-title" id={"przepisy"}>Przepisy</h1>
                    <div>
                        <p>Widok:</p>
                        <a>Pokaż wszystkie</a>
                        <a>Śniadania</a>
                        <a>Zupy</a>
                        <a>Dania główne</a>
                        <a>Desery</a>
                    </div>
                </div>
            </div>

            <div className="recipes">
                <div className="container">
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
        </>
    )
}
export default Recipes
