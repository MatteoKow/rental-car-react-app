import React from 'react';
import './RegulationsPage.css';

const RegulationsPage = () => {
    return (
        <section className='regulations-page'>
            <h1>Regulamin</h1>

            <ol>
                <h3>1. Rezerwacja i Potwierdzenie</h3>
                <ul>
                    <li>Rezerwacja samochodu wymaga potwierdzenia w ciągu 24 godzin od momentu dokonania rezerwacji.</li>
                    <li>Potwierdzenie rezerwacji następuje po wpłaceniu zaliczki w wysokości 50% całkowitej kwoty najmu.</li>
                </ul>

                <br/>
                <h3>2. Zaliczka i Płatności</h3>
                <ul>
                    <li>Wpłata zaliczki powinna być dokonana w ciągu 24 godzin od momentu rezerwacji.</li>
                    <li>Zaliczka wynosi 50% całkowitej kwoty najmu.</li>
                </ul>

                <br/>
                <h3>3. Dane do Przelewu</h3>
                <ul>
                    <li>Numer konta do dokonania wpłaty zaliczki: PL222979824782467335332333.</li>
                    <li>W przypadku przelewu, prosimy o dokładne podanie numeru rezerwacji w tytule przelewu.</li>
                </ul>

                <br/>
                <h3>4. Zmiany i Anulacje</h3>
                <ul>
                    <li>Zmiany w rezerwacji można dokonać do 48 godzin przed planowanym odbiorem samochodu.</li>
                    <li>W przypadku anulacji rezerwacji, zaliczka nie podlega zwrotowi.</li>
                </ul>

                <br/>
                <h3>5. Odbiór i Zwrot Samochodu</h3>
                <ul>
                    <li>Odbiór i zwrot samochodu odbywa się w wyznaczonym miejscu i czasie.</li>
                    <li>Każde opóźnienie w zwrocie samochodu może podlegać dodatkowej opłacie w wyskokości 150% wartosci rezerwacji za każdą kolejna godzinę.</li>
                </ul>

                <br/>
                <h3>6. Warunki Wynajmu</h3>
                <ul>
                    <li>Kierowca musi posiadać ważne prawo jazdy i być osobą pełnoletnią.</li>
                    <li>Samochód powinien być zwrócony w stanie, w jakim został odebrany.</li>
                </ul>

                <br/>
                <h3>7. Opłaty Dodatkowe</h3>
                <ul>
                    <li>Opłaty dodatkowe mogą obejmować koszty paliwa, opłaty za opóźnienia, koszty sprzątania itp.</li>
                </ul>

                <br/>
                <h3>8. Ubezpieczenie</h3>
                <ul>
                    <li>Samochód jest ubezpieczony na czas najmu, jednak mogą obowiązywać pewne limity i koszty własne.</li>
                    <li>Kierowca ponosi pełną odpowiedzialność za szkody wyrządzone przez niego podczas najmu.</li>
                </ul>

                <br/>
                <h3>9. Postanowienia Końcowe</h3>
                <ul>
                    <li>Wypożyczalnia zastrzega sobie prawo do odmowy wypożyczenia samochodu bez podania przyczyny.</li>
                    <li>Klient zobowiązuje się przestrzegać obowiązujących przepisów drogowych oraz postanowień umowy.</li>
                </ul>

                <br/>
                <h3>10. Akceptacja Regulaminu</h3>
                <ul>
                    <li>Klient potwierdza zapoznanie się i akceptację niniejszego regulaminu przez dokonanie rezerwacji.</li>
                </ul>

               <p>Regulamin ten ma na celu uregulowanie warunków współpracy między wypożyczalnią samochodów a klientem, a także zapewnia bezpieczeństwo obu stron w trakcie procesu wynajmu pojazdu.</p> 
            </ol>
        </section>
    );
};

export default RegulationsPage;