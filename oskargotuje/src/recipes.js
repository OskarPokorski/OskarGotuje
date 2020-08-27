import React, {useEffect, useState} from 'react';
import Recipe from "./recipe";


const Recipes = () => {

    const [recipes, setRecipes] = useState([])
    const [filteredRecipes, setFilteredRecipes] = useState([])

    const [filter, setFilter] = useState(null)


    useEffect(() => {
        fetch("http://localhost:3000/recipes")
            .then(response => response.json())
            .then(response => {
                setRecipes(response)
                setFilteredRecipes(response)
            })
    }, [])

    useEffect(() => {
        if(!filter) {
            setFilteredRecipes(recipes)
        } else {
            setFilteredRecipes(recipes.filter(recipe => recipe.category === filter))
        }
    },[filter])


    return (
        <>
            <div className="search">
                <div className="container">
                    <h1 className="search-title" id={"przepisy"}>Przepisy</h1>
                    <div className={"search-text"}>
                        <p>Widok:</p>
                        <a className={!filter ? 'active': ''} onClick={() => setFilter(null)}>Pokaż wszystkie</a>
                        <a className={filter === 'Śniadania' ? 'active': ''} onClick={() => setFilter("Śniadania")}>Śniadania</a>
                        <a className={filter === 'Zupy' ? 'active': ''} onClick={() => setFilter("Zupy")}>Zupy</a>
                        <a className={filter === 'Dania główne' ? 'active': ''} onClick={() => setFilter("Dania główne")}>Dania główne</a>
                        <a className={filter === 'Desery' ? 'active': ''} onClick={() => setFilter("Desery")}>Desery</a>
                    </div>
                </div>
            </div>

            <div className="recipes">
                <div className="container">
                    {/*<div className="recipes-text">*/}
                    {/*    <div className="recipes-text-left">*/}
                    {/*        <p>Sortowanie:</p>*/}
                    {/*        <p>Najnowsze</p>*/}
                    {/*        <p>Najpopularniejsze</p>*/}
                    {/*    </div>*/}
                    {/*    <div className="recipes-text-right">*/}
                    {/*        <p>Widok:</p>*/}
                    {/*        <p>Kafelki</p>*/}
                    {/*        <p>Lista</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="recipes-boxes">

                        {filteredRecipes.map((recipe, i) => {

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
