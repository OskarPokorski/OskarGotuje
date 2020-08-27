import React, {useEffect, useState} from 'react';


const Details = ({match}) => {

    const [recipe, setRecipe] = useState({
    })

    useEffect(() => {
        const id = match.params.id;

        fetch(`http://localhost:3000/recipes/${id}`)
            .then(response => response.json())
            .then(response => {
                setRecipe(response)
            })
    }, [])


    const content = (
        <div className={"details"}>
            <div className={"container"}>
                <h1 className={"details-title"}>{recipe.name}</h1>
                <p className={"details-text"}>{recipe.text}</p>
                <p className={"details-text2"}>{recipe.more}</p>
                <div className={"details-box-img"}
                     style={{
                         backgroundImage: `url(${recipe.img})`,
                         backgroundPosition: "center",
                         backgroundRepeat: "no-repeat",
                         backgroundSize: "cover"
                     }}>
                </div>
                <p className={"details-ingredients"}>Składniki:</p>
                {/*<p className={"details-ingredients-all"}>{recipe.ingredients.map((el, i) => <li key={i}>{ingredients}</li> )}</p>*/}
                <p className={"details-proces"}>Przygotowanie:</p>
                <ul className={"details-proces-li"}>
                    <li>{recipe.part_one}</li>
                    <li>{recipe.part_two}</li>
                    <li>{recipe.part_three}</li>
                    <li>{recipe.part_four}</li>
                    <li>{recipe.part_five}</li>
                </ul>
            </div>
        </div>
    )

    return content

}

export default Details