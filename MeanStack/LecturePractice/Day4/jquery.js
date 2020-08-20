let weather = function () {
    let cityName = $("#textBox").val() || "jalgaon";
    let url = "https://api.openweathermap.org/data/2.5/weather?appid=a07f54253f834fe0bf91059f03f24f88&units=metric&q=" +
        cityName;
    $.ajax(url).done((data) => {
        console.log(data.main.temp_max);

        $("#refchild").clone(true);
        $("#parent :nth-child(1)").css("visibility", "visible");

        $("#parent :nth-child(1) :nth-child(1)").html("City : " + data.name);
        $("#parent :nth-child(1) :nth-child(2)").html("MAX : " + data.main.temp_max);
        $("#parent :nth-child(1) :nth-child(3)").html("MIN : " + data.main.temp_min);

        $("#parent :nth-child(1)").insertBefore($("#parent :nth-child(1)"));
    });
}