import React from 'react';


const Search = () => {

    return (
        <div className="search">
            <div className="container">
                <h1 className="search-title" id={"search-title"}>Przepisy</h1>
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
    )

}
export default Search