import React from 'react';

const Recipe = ({data}) => {

    return (
        <div className="rec">
            <img className={"rec-img"} src={data.img} alt={"Przepis"}/>
            <div className="rec-box" >
                <h1 className="rec-name">{data.name}</h1>
                <p className={"rec-description"}>{data.description}</p>
                <a  href={"#"} className={"rec-more"}>Czytaj dalej >> </a>
                <p className={"rec-category"}>{data.category}</p>
            </div>
        </div>
    )
}

export default Recipe