import React, {useState} from 'react';


const Form = () => {
    const [isSent, setIsSent] = useState(false)

    const send = () => {
        alert("Dziękujemy za Twoją wiadomość")
        setIsSent(true)
    }

    const Contact = () => {
        return (
            <h1 className={"thank-you"}>Dziękuję za Twoją wiadomość!</h1>
        )
    }

    return (
        <div className="form">
            <div className="container">
                <div>
                    <h1 className="form-title" id="kontakt">Kontakt</h1>
                </div>
                {!isSent ? <div className={"form-inputs-box"}>
                    <form className={"form-inputs"}>
                        <label className={"input-text"} htmlFor="message">Twoja wiadomość</label><br/>
                        <input className={"input-long"} type="text" id="message" placeholder={"Wpisz treść wiadomości"}
                               name="message"/><br/>

                        <label className={"input-text"} htmlFor="message">Imię</label><br/>
                        <input className={"input-short"} type="text" id="name" placeholder={"Wpisz imię"}
                               name="message"/><br/>

                        <label className={"input-text"} htmlFor="mail">Mail</label><br/>
                        <input className={"input-short"} type="email" id="email" placeholder={"Wpisz mail"}
                               name="message"/><br/>

                        <input className={"form-button"} type="button" value="Wyślij" onClick={send}/>

                    </form>
                </div> : <Contact /> }
            </div>
        </div>
    )
}
export default Form