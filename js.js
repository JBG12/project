// $(document).ready(function(){

$(document).ready(function(){

    /*========================================================================
      "Optellen"
    /*=======================================================================*/

    // Add extra field to "Optellen" formula.
    $("body").on('click', '.AddOptellen', function () {
        var inputs = $("#Form > input").length;
        var newIputNumber = inputs + 1;

        if (inputs < 5) {
            $("#Form > #number_" + inputs).after('<p> + </p> <input type="number" value="0" id="number_' + newIputNumber + '" pattern="[0-9]+" class="number">');
        }
        if (inputs >= 4) {
            $(".AddOptellen.extra").css("cursor", "default");
            $(".AddOptellen.extra").css("opacity", "0.6");
            $(".AddOptellen.extra").hover(function(){
                $(this).css("background-color", "#4d4d4d");
                $(this).css("color", "#fff");
            });
        }  
    });

    $("body").on('click', '.uitrekenen', function () {
        // Get ammount of fields
        var inputs = $("#Form > input").length;
        var data = '';
        var thisIs = '';
        let values = [];

        // Get the values from each field.
        for (i = 1; i <= inputs; i++) {
            // $('body').after('a-');
            thisIs = $("#Form > #number_" + i).val();
            data = { "Value": thisIs };
            values.push(data);
            // var value21 = value21 + i;
        }
        JSON.stringify(values);
        // console.log(values);

        valueOne = Number(values['0']['Value']);
        valueTwo = Number(values['1']['Value']);
        let valueThree = 0;
        let valueFour = 0;
        let valueFive = 0;
        if (values['2']) {
            valueThree = Number(values['2']['Value']);
        }
        if (values['3']) {
            valueFour = Number(values['3']['Value']);
        }
        if (values['4']) {
            valueFive = Number(values['4']['Value']);
        }
        // Count up all the values.
        var awnser = (valueOne + valueTwo + valueThree + + valueFour + valueFive).toFixed(2);

        $('.antwoord').val(awnser);
    });

    /*========================================================================
      "Percentage Berekenen"
    /*=======================================================================*/

    $("body").on('click', '.percentageAntwoord', function () {
        // Get user filled in numbers
        percentage = parseFloat($("#FormPercentage > #percentage").val());
        pNumber = parseFloat($("#FormPercentage > #percentageNummer").val());

        percentage2 = (percentage / 100);

        pAwnser = (percentage2 * pNumber).toFixed(2);

        $('.antwoordPercentage').val(pAwnser);

    });

    $("body").on('click', '.percentageAntwoord2', function () {
        // Get user filled in numbers
        pNumber1 = parseFloat($("#FormPercentage2 > #pNummer1").val());
        pNumber2 = parseFloat($("#FormPercentage2 > #pNummer2").val());

        percentage_of = (pNumber1 / pNumber2);

        pAwnser = (percentage_of * 100).toFixed(2) + "%";

        $('.antwoordPercentage2').val(pAwnser);

    });
    var123 = $(".percentage").val();
    $("percentage").val(var123 + "%");

    /*========================================================================
      "Gemiddelde Berekenen"
    /*=======================================================================*/
    // Add extra field to "Gemiddelde Berekenen" formula.
    $("body").on('click', '.AddOptellenGem', function () {
        var inputs = $("#FormGem > input").length;
        var newIputNumber = inputs + 1;

        if (inputs < 5) {
            $("#FormGem > #number_" + inputs).after('<p> en </p> <input type="number" value="0" id="number_' + newIputNumber + '" pattern="[0-9]+" class="number">');
        } 
        if (inputs >= 4) {
            $(".AddOptellenGem.extra").css("cursor", "default");
            $(".AddOptellenGem.extra").css("opacity", "0.6");
            $(".AddOptellenGem.extra").hover(function(){
                $(this).css("background-color", "#4d4d4d");
                $(this).css("color", "#fff");
            });
        }
    });

    $("body").on('click', '.gemAntwoord', function () {
        // Get ammount of fields
        var inputs = $("#FormGem > input").length;
        var data = '';
        var thisIs = '';
        let values = [];

        for (i = 1; i <= inputs; i++) {
            // $('body').after('a-');
            thisIs = $("#FormGem > #number_" + i).val();
            data = { "Value": thisIs };
            values.push(data);
            // var value21 = value21 + i;
        }
        JSON.stringify(values);
        // console.log(values);

        valueOne = Number(values['0']['Value']);
        valueTwo = Number(values['1']['Value']);
        let valueThree = 0;
        let valueFour = 0;
        let valueFive = 0;
        if (values['2']) {
            valueThree = Number(values['2']['Value']);
        }
        if (values['3']) {
            valueFour = Number(values['3']['Value']);
        }
        if (values['4']) {
            valueFive = Number(values['4']['Value']);
        }
        // Get sum of all the filled in fields.
        var sum_of = (valueOne + valueTwo + valueThree + + valueFour + valueFive).toFixed(2);
        // Calculate average (gemiddelde) of the "sum".
        var awnser = (sum_of / inputs).toFixed(2);

        // Set awnser in awnser input field.
        $('.antwoordGem').val(awnser);
    });

    /*========================================================================
      "Waarden Omrekenen"
    /*=======================================================================*/
    $("body").on('click', '.omrAntwoord', function() {
        // Get the values.
        option_value_one = $("#option_one").val();
        option_value_two = $("#option_two").val();
        the_value = parseFloat($("#theValue").val());

        if ((option_value_one == "Kilometer") && (option_value_two == "Meter")) {
            the_value = (the_value * 1000);
            type = "m";
        }
        if ((option_value_one == "Kilometer") && (option_value_two == "Decimeter")) {
            the_value = (the_value * 10000);
            type = "dm";
        }
        if ((option_value_one == "Kilometer") && (option_value_two == "Centimeter")) {
            the_value = (the_value * 100000);
            type = "cm";
        }
        //
        if ((option_value_one == "Meter") && (option_value_two == "Kilometer")) {
            the_value = (the_value / 1000);
            type = "km";
        }
        if ((option_value_one == "Meter") && (option_value_two == "Decimeter")) {
            the_value = (the_value * 10);
            type = "dm";
        }
        if ((option_value_one == "Meter") && (option_value_two == "Centimeter")) {
            the_value = (the_value * 100);
            type = "cm";
        }
        //
        if ((option_value_one == "Decimeter") && (option_value_two == "Kilometer")) {
            the_value = (the_value / 10000);
            type = "km";
        }
        if ((option_value_one == "Decimeter") && (option_value_two == "Meter")) {
            the_value = (the_value / 10);
            type = "m";
        }
        if ((option_value_one == "Decimeter") && (option_value_two == "Centimeter")) {
            the_value = (the_value * 10);
            type = "cm";
        }
        //
        if ((option_value_one == "Centimeter") && (option_value_two == "Kilometer")) {
            the_value = (the_value / 100000);
            type = "km";
        }
        if ((option_value_one == "Centimeter") && (option_value_two == "Meter")) {
            the_value = (the_value / 100);
            type = "m";
        }
        if ((option_value_one == "Centimeter") && (option_value_two == "Decimeter")) {
            the_value = (the_value / 10);
            type = "dm";
        }
        $(".antwoordOmr").val(the_value + type);

    });
    // Munt eenheden
    $("body").on('click', '.curAntwoord', function() {
        // Get the 2 currencies types
        option_one = document.querySelector('#curValues');
        option_two = $("#currency").val();
        // Get the value u want to see in anoter currency
        cur_value = document.querySelector('#curValue');
        // Get the input where to display the converted ammount.
        conv_value = document.querySelector('.antwoordCur');

        // Using an API to get actual accurate values to display.
        fetch('https://api.exchangerate-api.com/v4/latest/' + option_one.value)
        .then(res => res.json())
        .then(res => {
            const new_rate = res.rates[option_two];
            conv_value.value = (cur_value.value * new_rate).toFixed(2) + ' ' + option_two;
        });
    });
    
    /*========================================================================
      "Pythagoras Berkenenen"
    /*=======================================================================*/
    // Add extra field to "Gemiddelde Berekenen" formula.

    $("body").on('click', '.PytAntwoord', function () {
        // Get ammount of fields
        zijde_one = parseFloat($("#zijde_1").val());
        zijde_three = parseFloat($("#zijde_3").val());

        zijde_two = parseFloat($("#zijde_2").val());

        if ((zijde_one && zijde_two) || (zijde_three && zijde_two) || (zijde_one && zijde_three)) {
            // Zijde BC (de schuine zijde) en Zijde AB (de rechhoekszijde)
            if (zijde_two > zijde_one) {
                awnser = Math.pow(zijde_two, 2 ) - Math.pow(zijde_one, 2);
                console.log(awnser);
                awnser2 = Math.sqrt(awnser).toFixed(2);
            } else {
                // Error schuine zijde moet altijd langer zijn.
                $("body").append('<div class="noti"> <p> De schuine zijde moet altijd langer zijn. </p> </div>');
            }
            // Zijde BC (de schuine zijde) en Zijde CA (de rechhoekszijde)
            if (zijde_two > zijde_three) {
                awnser = Math.pow(zijde_two, 2 ) - Math.pow(zijde_three, 2);
                console.log(awnser);
                awnser2 = Math.sqrt(awnser).toFixed(2);
            } else {
                // Error schuine zijde moet altijd langer zijn.
                $("body").append('<div class="noti"> <p> De schuine zijde moet altijd langer zijn. </p> </div>');
            }
            // Zijde AB (de rechhoekszijde) en Zijde CA (de rechhoekszijde)
            if (zijde_one && zijde_three) {
                // AB^2 + AC^2 then root
                awnser = Math.pow(zijde_one, 2 ) + Math.pow(zijde_three, 2);
                awnser2 = Math.sqrt(awnser).toFixed(2);
            }

        }
        if ((zijde_one > zijde_two) || zijde_three > zijde_two) {
            $("body").append('<div class="noti"> <p> De schuine zijde moet altijd langer zijn. </p> </div>');
            return false;
        }
        // Set awnser in awnser input field.
        $('.antwoordPyt').val(awnser2);
    });

    // Hoeken berekenen
    // Add extra "hoek" select field.
    $("body").on('click', '.Addhoek', function () {
        var inputs = $(".selects > select").length;

        if (inputs < 2) {
            $(".selects > .hoeken_" + inputs).after('<p> En </p> <select class="hoeken_2 hoek" size="1"> <option value="a-2">Hoek a</option> <option value="b-2">Hoek b</option> <option value="c-2">Hoek c</option></select>');
        }
        if (inputs >= 1) {
            $(".Addhoek.extra").css("cursor", "default");
            $(".Addhoek.extra").css("opacity", "0.6");
            $(".Addhoek.extra").hover(function(){
                $(this).css("background-color", "#4d4d4d");
                $(this).css("color", "#fff");
            });
        }  
    });

    var awnser = "";
    // On change of select button
    $("body").on('change', '.hoek', function() {
        value = $(this).val();
        
        var inputs = $(".inputs2 > input").length;
        if (inputs < 3) {
            $(".selects").after('<input type="number" placeholder="' + value + '" value="" class="number hoek1 ' + value +'">');
        }
    });
    hoek_1 = $(".selects > select");
    $("body").on('change', hoek_1[0], function() {
        $(".zijden").css("display", "block");
    });
    $("body").on('change', hoek_1[1], function() {
        $(".zijden").css("display", "none");
    });

    $("body").on('click', '.PytAntwoord2', function () {
        // Get the "hoek" choices
        hoek_1 = $(".inputs2 > input");
        // hoek_2 = $(".inputs2 > input");
        console.log(hoek_1[0]);

        if (hoek_1[0]) {
           // $(".zijden").css("display", "block");
            awnser = "1";
        }
        // Check if user chose 2 "hoeken".
        if (hoek_1[0] && hoek_1[1]) {
            $(".zijden").css("display", "none");
            awnser = 180 - parseFloat(hoek_1[0].value) - parseFloat(hoek_1[1].value);
            console.log(hoek_1);
        }

        $('.antwoordPyt2').val(awnser + "°");
    });

    /*========================================================================
      Pop-up menu(s)
    /*=======================================================================*/
    $(function(){
        // On number input fields, when certain keys are pressed, return false, or return a notification.
        $('body').on("keypress", '.number', function(e) {
        if(e.key === "." || e.which == 48 || e.which == 49 || e.which == 50 || e.which == 51 || e.which == 52 || e.which == 53 || e.which == 54 || e.which == 55 || e.which == 56 || e.which == 57){
        } else if (e.key === ",") {
            //alert("Gebruikt '.' om achter de komma te typen");
            $("body").append('<div class="noti"> <p> Gebruikt "." om achter de komma te typen. </p> </div>');
            return false;
        } else {
            return false;
        }
        });
    });
    // Click anywhere on website to remove notification message.
    $("body").on('click', function () {
        // Get user filled in numbers
        $('.noti').remove();
    });

    /*========================================================================
      Formula Search Function
    /*=======================================================================*/
    $(function(){
        $('#Search').keyup(function() {
            // Get the input value from the search field.
            input_value = $(this).val();
            // Get the formulas as objects.
            formulas = $(".formule");

            // Do a for loop for each formula it finds.
            for (i = 0; i < formulas.length; i++) {
                // If "a" formula div has text in it that includes the input value, set the display of the formula to block (making, or keeping it visible).
                if (formulas[i].innerText.toLowerCase().includes(input_value)) {
                    $(formulas[i]).css("display", "block");
                // Else if the text in the formula div doesn't include the input value set the display to none (making it invisible). 
                } else {
                    $(formulas[i]).css("display", "none");
                }
            }
        });
    });

});


window.onload = function() {
    state = null;
}