import React from 'react';
import {Redirect} from 'react-router-dom'


const Details = ({location}) => {

const content = (
    <div className={"details"}>
        <div className={"container"}>
            <h1 className={"details-title"}>{location.state.data.name}</h1>
            <p className={"details-text"}>Wegetariański rosół to bardzo poważna sprawa – większość osób uważa go za
                bulion, a pozostała część nie wierzy w jego istnienie. Ja oczywiście przewodzę tej grupie smakoszy,
                którzy rozumieją, że dobry rosół może w zupełności obyć się bez kury.</p>
            <p className={"details-text2"}>Wegetariański rosół to nie to samo, co warzywny bulion. Rosół powinien
                być treściwy, o głębokim kolorze i równie głębokim smaku – długo gotowany, pełen warzyw i
                odpowiednich przypraw. Musi być tak aromatyczny, że wystarczy mu kilka nitek makaronu i odrobina
                zielonej natki, aby zmienił się w najlepszą ucztę.</p>
            <div className={"details-box-img"}>
            </div>
            <p className={"details-ingredients"}>Składniki:</p>
            <p className={"details-ingredients-all"}>
                2,5 litra zimnej wody
                2 cebule
                3 marchewki
                2 pietruszki
                1 duża bulwa selera
                zielone liście pora
                natka pietruszki, liście oraz łodyżki
                łodyżka świeżego lubczyku
                1 łyżka oleju

                Przyprawy:
                2 goździki
                4 ziarna ziela angielskiego
                10 ziaren pieprzu
                4 liście laurowe
                2 ząbki czosnku
                ½ łyżeczki kurkumy
                2 łyżki sosu sojowego
                kawałek imbiru długości 3 cm, można pominąć
                1 łyżeczka lubczyku, jeśli nie mieliście świeżego
                sól
            </p>
            <p className={"details-proces"}>Przygotowanie:</p>
            <ul className={"details-proces-li"}>
                <li>1. Warzywa dokładnie wyszorować, nie obierać i nie przekrojone włożyć do dużego garnka. Umytą
                    cebulę obrać, łupiny przełożyć do garnka (dodadzą pięknego koloru) a wnętrze cebul przekroić na
                    pół i każdą opalić nad ogniem kuchenki do czasu, aż będzie wyraźnie przypalona. Jeśli nie macie
                    kuchenki to ułóżcie je na blasze piekarnika postawionej na najwyższej półce i opalajcie przez 15
                    minut lub do czasu, aż zaczną ciemnieć.
                </li>
                <li>2. Opalone cebule dodać do warzyw w garnku, do tego dodać łodyżki natki pietruszki, pozostałe
                    składniki wraz z przyprawami i łyżeczką soli. Wlać 2,5 litra zimnej wody, przykryć i podgrzewać
                    na średnim ogniu do czasu, aż się zagotuje.
                </li>
                <li>3. Kiedy woda zacznie wrzeć zmniejszyć gaz i gotować na minimalnym ogniu przez przynajmniej 3
                    godziny. Wywar powinien jedynie „mrugać”, a garnek musi być przez cały czas przykryty.
                </li>
                <li>4. Ugotowany rosół przecedzić przez sito, na którym zostaną wszystkie warzywa i przyprawy. Na
                    koniec warzywa bardzo dokładnie wycisnąć tak, aby oddały wszystkie soki do garnka – to w nich
                    jest najcenniejszy smak. Tak przygotowany rosół można doprawić jeszcze do smaku odrobiną soli
                    lub pieprzu, podawać tradycyjnie z makaronem, posiekanymi liści pietruszki i małym kawałkiem
                    marchewki z wywaru lub po prostu siorbać z dużego kubka.
                </li>
            </ul>
        </div>
    </div>
)

    return location.state ? content: <Redirect to={"/"}/>

}

export default Details