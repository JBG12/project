<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js.js"></script> 
    <link rel="icon" type="image/x-icon" href="Custom%20Size%20–%202.svg">
    <title>Uitrekenen</title>
</head>
<body>
    <div class="headerBox">
        <div class="header1">
            <h1>Uitrekenen</h1>
            <img src="Custom%20Size%20–%202.svg"></img>
        </div>
        <div class="header2">
            <p class="txt">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        </div>
    </div>
    <div class="content">
        <div class="formules">
            <h2 class="sTitle">Formule(s) Zoeken</h2>
            <input type="text" id="Search" placeholder="Vul hier je zoek waarde in">
            <div class="formule">
                <h2 class="title"> Optellen </h2>
                <p>Hieronder kan je de som berekenen van een bepaald aantal getallen.</p><br />
                <form action="" id="Form">
                    <input type="number" value="0" id="number_1" pattern="[0-9]+" class="number">
                    <p> + </p>
                    <input type="number" value="0" id="number_2" pattern="[0-9]+" class="number">
                    <button type="button" class="AddOptellen extra">Extra Veld</button>
                    <br>
                </form>
                <button type="button" id="uitr" class="uitrekenen">Uitrekenen</button>
                <input readonly type="text" class="antwoord uitr" value="Antwoord"> <a class="CopyAwnser">Kopieer</a>
            </div>
            <div class="formule">
            <h2> Percentage Berekenen </h2>
            <p>Hieronder bereken je een bepaald percentage (bijv 15%) van een bepaald aantal (bijv 100).</p><br />
            <form action="" id="FormPercentage">
                    <input type="number" value="1" id="percentage" pattern="[0-9]+" class="number">%
                    <p> van </p>
                    <input type="number" value="1" id="percentageNummer" pattern="[0-9]+" class="number">
                    <br>
                </form>
                <button type="button" id="uitr" class="percentageAntwoord">Uitrekenen</button>
                <input readonly type="text" class="antwoord antwoordPercentage" value="Antwoord"><a class="CopyAwnser">Kopieer</a>

                <p>Of berekenen hoeveel procent een getal is van een ander getal (bijv 100 van 250 is 40%)</p>
                <form action="" id="FormPercentage2">
                    <input type="number" value="1" id="pNummer1" pattern="[0-9]+" class="number">
                    <p> van </p>
                    <input type="number" value="1" id="pNummer2" pattern="[0-9]+" class="number">
                    <br>
                </form>
                <button type="button" id="uitr" class="percentageAntwoord2">Uitrekenen</button>
                <input readonly type="text" class="antwoord antwoordPercentage2" value="Antwoord"><a class="CopyAwnser">Kopieer</a>
            </div>

            <div class="formule">
            <h2> Gemiddelde Berekenen </h2>
            <p>Hieronder kun je gemiddelden uitrekenen. Je vult in de velden hieronder de verschillende getallen waarvan je het gemiddelde wilt berekenen.</p><br />
            <form action="" id="FormGem">
                    <input type="number" value="1" id="number_1" pattern="[0-9]+" class="number">
                    <p> en </p>
                    <input type="number" value="1" id="number_2" pattern="[0-9]+" class="number">
                    <button type="button" class="AddOptellenGem extra">Extra Veld</button>
                    <br>
                </form>
                <button type="button" id="uitr" class="gemAntwoord">Uitrekenen</button>
                <input readonly type="text" class="antwoord antwoordGem" value="Antwoord"><a class="CopyAwnser">Kopieer</a>
            </div>

            <div class="formule">
            <h2> Waarden Omrekenen </h2>
            <p>Hieronder kun je waarden omrekenen naar een andere inhoudseenheid. Je vult in de velden hieronder de verschillende waarden, bijvoorbeeld in meter, waarvan je wilt weten hoeveel het is in bijvoorbeeld decimeter.</p><br />
            <form action="" id="FormOmr">
                    <input type="number" value="1" id="theValue" pattern="[0-9]+" class="number">
                    <select id="option_one" size="1">
                        <option value="Kilometer">Kilometer</option>
                        <option value="Meter">Meter</option>
                        <option value="Decimeter">Decimeter</option>
                        <option value="Centimeter">Centimeter</option>
                    </select>
                    <p> naar </p>
                    <select id="option_two" size="1">
                        <option value="Kilometer">Kilometer</option>
                        <option value="Meter">Meter</option>
                        <option value="Decimeter">Decimeter</option>
                        <option value="Centimeter">Centimeter</option>
                    </select>
                    <br>
                </form>
                <button type="button" id="uitr" class="omrAntwoord">Omrekenen</button>
                <input readonly type="text" class="antwoord antwoordOmr" value="Antwoord"><a class="CopyAwnser">Kopieer</a>
                <br />
                <p>Ook kun je hieronder geld eenheden omrekenen naar andere geld eenheden.</p><br />
                <form action="" id="FormOmr">
                    <input type="number" value="1" id="curValue" pattern="[0-9]+" class="number">
                    <select id="curValues" size="1">
                    <option value="AED">AED</option>
                        <option value="ARS">ARS</option>
                        <option value="AUD">AUD</option>
                        <option value="BGN">BGN</option>
                        <option value="BRL">BRL</option>
                        <option value="BSD">BSD</option>
                        <option value="CAD">CAD</option>
                        <option value="CHF">CHF</option>
                        <option value="CLP">CLP</option>
                        <option value="CNY">CNY</option>
                        <option value="COP">COP</option>
                        <option value="CZK">CZK</option>
                        <option value="DKK">DKK</option>
                        <option value="DOP">DOP</option>
                        <option value="EGP">EGP</option>
                        <option value="EUR">Euro</option>
                        <option value="FJD">FJD</option>
                        <option value="GBP">Britse Pond</option>
                        <option value="GTQ">GTQ</option>
                        <option value="HKD">HKD</option>
                        <option value="HRK">HRK</option>
                        <option value="HUF">HUF</option>
                        <option value="IDR">IDR</option>
                        <option value="ILS">ILS</option>
                        <option value="INR">INR</option>
                        <option value="ISK">ISK</option>
                        <option value="JPY">Japanse Yen</option>
                        <option value="KRW">KRW</option>
                        <option value="KZT">KZT</option>
                        <option value="MXN">MXN</option>
                        <option value="MYR">MYR</option>
                        <option value="NOK">NOK</option>
                        <option value="NZD">NZD</option>
                        <option value="PAB">PAB</option>
                        <option value="PEN">PEN</option>
                        <option value="PHP">PHP</option>
                        <option value="PKR">PKR</option>
                        <option value="PLN">PLN</option>
                        <option value="PYG">PYG</option>
                        <option value="RON">RON</option>
                        <option value="RUB">RUB</option>
                        <option value="SAR">SAR</option>
                        <option value="SEK">SEK</option>
                        <option value="SGD">SGD</option>
                        <option value="THB">THB</option>
                        <option value="TRY">TRY</option>
                        <option value="TWD">TWD</option>
                        <option value="UAH">UAH</option>
                        <option value="USD">Dollar</option>
                        <option value="UYU">UYU</option>
                        <option value="VND">VND</option>
                        <option value="ZAR">ZAR</option>
                    </select>
                    <p> naar </p>
                    <select id="currency" size="1">
                        <option value="AED">AED</option>
                        <option value="ARS">ARS</option>
                        <option value="AUD">AUD</option>
                        <option value="BGN">BGN</option>
                        <option value="BRL">BRL</option>
                        <option value="BSD">BSD</option>
                        <option value="CAD">CAD</option>
                        <option value="CHF">CHF</option>
                        <option value="CLP">CLP</option>
                        <option value="CNY">CNY</option>
                        <option value="COP">COP</option>
                        <option value="CZK">CZK</option>
                        <option value="DKK">DKK</option>
                        <option value="DOP">DOP</option>
                        <option value="EGP">EGP</option>
                        <option value="EUR">Euro</option>
                        <option value="FJD">FJD</option>
                        <option value="GBP">Britse Pond</option>
                        <option value="GTQ">GTQ</option>
                        <option value="HKD">HKD</option>
                        <option value="HRK">HRK</option>
                        <option value="HUF">HUF</option>
                        <option value="IDR">IDR</option>
                        <option value="ILS">ILS</option>
                        <option value="INR">INR</option>
                        <option value="ISK">ISK</option>
                        <option value="JPY">Japanse Yen</option>
                        <option value="KRW">KRW</option>
                        <option value="KZT">KZT</option>
                        <option value="MXN">MXN</option>
                        <option value="MYR">MYR</option>
                        <option value="NOK">NOK</option>
                        <option value="NZD">NZD</option>
                        <option value="PAB">PAB</option>
                        <option value="PEN">PEN</option>
                        <option value="PHP">PHP</option>
                        <option value="PKR">PKR</option>
                        <option value="PLN">PLN</option>
                        <option value="PYG">PYG</option>
                        <option value="RON">RON</option>
                        <option value="RUB">RUB</option>
                        <option value="SAR">SAR</option>
                        <option value="SEK">SEK</option>
                        <option value="SGD">SGD</option>
                        <option value="THB">THB</option>
                        <option value="TRY">TRY</option>
                        <option value="TWD">TWD</option>
                        <option value="UAH">UAH</option>
                        <option value="USD">Dollar</option>
                        <option value="UYU">UYU</option>
                        <option value="VND">VND</option>
                        <option value="ZAR">ZAR</option>
                    </select>
                    <br>
                </form>
                <button type="button" id="uitr" class="curAntwoord">Omrekenen</button>
                <input readonly type="text" class="antwoord antwoordCur ext" value="Antwoord"><a class="CopyAwnser">Kopieer</a>
            </div>
            <div class="formule">
            <h2> Stelling van Pythagoras Berekenen </h2>
            <p>Hieronder kun je zijden uitrekenen. Je vult in de velden hieronder de verschillende getallen waarmee je het wilt berekenen.</p><br />
            <form action="" id="FormPyt">
            <!-- <input class="test23" type="number"> -->
                <div class="triangle"><img src="triangle.svg"></div>
                <div class="inputs1">
                    <p> Zijde AB (de rechhoekszijde): </p><input type="number" value="" id="zijde_1" pattern="[0-9]+" class="number">
                    <p> Zijde BC (de schuine zijde): </p><input type="number" value="" id="zijde_2" pattern="[0-9]+" class="number">
                    <p> Zijde CA (de rechhoekszijde): </p><input type="number" value="" id="zijde_3" pattern="[0-9]+" class="number"> <br>
                    <button type="button" id="uitr" class="PytAntwoord">Uitrekenen</button>
                    <input readonly type="text" class="antwoord antwoordPyt" value="Antwoord"><a class="CopyAwnser">Kopieer</a>
                </div>
                </form>
                <p> Of bereken de hoeken in aantal graden. Je vult hieronder de verschillende hoeken en zijden in waarmee je de andere hoeken wil berekenen.</p><br />
                <form action="" id="FormPyt2">
                <div class="triangle2"><img src="triangle.svg"></div>
                <div class="inputs2">
                    <p>Welke hoek wil je berekenen?</p>
                    <select class="hoeken" size="1">
                        <option value="a">Hoek a</option>
                        <option value="b">Hoek b</option>
                        <option value="c">Hoek c</option>
                    </select><br />
                    <p class="intro1"> Selecteer welke andere hoek(en) je de waarden van weet.</p>
                    <div class="selects">
                        <select class="hoeken_1 hoek" size="1">
                            <option value="">-</option>
                            <option value="a-2">Hoek a</option>
                            <option value="b-2">Hoek b</option>
                            <option value="c-2">Hoek c</option>
                        </select>
                        <button type="button" class="Addhoek extra">Extra Veld</button>
                    </div>
                    <div class="zijden">
                        <p> Vul hier de bekende zijden in. </p>
                        <input type="number" placeholder="zijde" value="" id="zijdeNumber_1" pattern="[0-9]+" class="number">
                        <input type="number" placeholder="zijde" value="" id="zijdeNumber_2" pattern="[0-9]+" class="number">
                    </div>
                    <br />
                    <button type="button" id="uitr" class="PytAntwoord2">Uitrekenen</button>
                    <input readonly type="text" class="antwoord antwoordPyt2" value="Antwoord"><a class="CopyAwnser">Kopieer</a>
                </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>