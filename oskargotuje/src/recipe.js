import React from 'react';
import {Link} from "react-router-dom";

const Recipe = ({data}) => {

console.log(data);

    return (
        <div className="rec">
            <img className={"rec-img"} src={data.img} alt={"Przepis"}/>
            <div className="rec-box" >
                <h1 className="rec-name">{data.name}</h1>
                <p className={"rec-description"}>{data.description}</p>
                <Link className={"rec-more"} to={{
                    pathname: "/details",
                    state: {data:data}
                }}>Czytaj dalej >> </Link>
                <p className={"rec-category"}>{data.category}</p>
            </div>
        </div>
    )
}

export default Recipe