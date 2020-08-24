import React from 'react';


const Recipies = () => {
    return (
        <div className="recipies">

            <div className="container">
                <div className="recipies-text">
                    <div className="recipies-text-left">
                        <p>Sortowanie:</p>
                        <p>Najnowsze</p>
                        <p>Najpopularniejsze</p>
                    </div>
                    <div className="recipies-text-right">
                        <p>Widok:</p>
                        <p>Kafelki</p>
                        <p>Lista</p>
                    </div>
                </div>
                <div className="recipies-boxes">
                    <div className="rec rec1"/>
                    <div className="rec rec2"/>
                    <div className="rec rec3"/>
                    <div className="rec rec4"/>
                    <div className="rec rec5"/>
                    <div className="rec rec6"/>
                </div>
            </div>
        </div>
    )
}
export default Recipies