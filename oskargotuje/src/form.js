import React from 'react';


const Form = () => {
    return (
        <div className="form">
            <div className="container">
                <div>
                    <h1 className="form-title" id="form-title">Kontakt</h1>
                </div>
                <div className={"form-inputs"}>
                    <form>
                        <label htmlFor="message">Twoja wiadomość</label><br/>
                        <input type="text" id="message" name="message"/><br/>

                        <label htmlFor="message">Imię</label><br/>
                        <input type="text" id="message" name="message"/><br/>

                        <label htmlFor="email">Mail</label><br/>
                        <input type="email" id="email" name="message"/><br/>

                        <input type="submit" value="Wyślij"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Form