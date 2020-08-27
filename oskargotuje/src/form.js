import React from 'react';


const Form = () => {

    const contact = () =>{
        return(
            <h1>Hello</h1>
        )
    }

    return (
        <div className="form">
            <div className="container">
                <div>
                    <h1 className="form-title" id="kontakt">Kontakt</h1>
                </div>
                <div className={"form-inputs"}>
                    <form>
                        <label htmlFor="message">Twoja wiadomość</label><br/>
                        <input className={"input-long"} type="text" id="message" placeholder={"Wpisz treść wiadomości"}
                               name="message"/><br/>

                        <label htmlFor="message">Imię</label><br/>
                        <input className={"input-short"} type="text" id="name" placeholder={"Wpisz imię"} name="message"/><br/>

                        <label htmlFor="mail">Mail</label><br/>
                        <input className={"input-short"} type="email" id="email" placeholder={"Wpisz mail"}name="message"/><br/>

                        <input className={"form-button"} type="submit" value="Wyślij" onSubmit={contact}/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Form