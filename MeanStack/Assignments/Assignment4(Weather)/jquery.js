let weather = function () {
    let cityName = $("#textBox").val() || "jalgaon";
    let url = "https://api.openweathermap.org/data/2.5/weather?appid=a07f54253f834fe0bf91059f03f24f88&units=metric&q=" +
        cityName;
    $.ajax(url).done((data) => {
        console.log(data.name);

        let newElement = $("#parent :nth-child(1)").clone(true);
        $("#parent :nth-child(1) :nth-child(1)").html("City :" + data.name);
        $("#parent :nth-child(1) :nth-child(2)").html("MAX_TEMP :" + data.main.temp_max);
        $("#parent :nth-child(1) :nth-child(3)").html("MIN_TEMP :" + data.main.temp_min);
        $("#parent nth-child(1)").clone(true).insertBefore("#parent nth-child(1)");
    });
}




// $.ajax(url).done((data1) => {
//     $("#parent :nth-child(1)")
//         .clone(true)
//         .html(data1.name + " " + data1.main.temp_max)
//         .insertBefore($("#parent :nth-child(1)"));

//     // clean the box
//     $("#textid").val("");
// });


// Mohit Ka Jugad


// let cityName = data.name;
// let maxTemp = data.main.temp_max;
// let minTemp = data.main.temp_min;

// let html = `<div class="row bg-success d - flex flex - column align - items - center text - white" id="refchild">
//     < div class="col-6 bg-secondary mt-1 border-danger border-2" > City :${cityName} </div >
//         <div class="col-6 bg-secondary mt-1">MIN Temperature :${maxTemp} </div>
//         <div class="col-6 bg-secondary mt-1">MAX Temperature :${minTemp} </div>
//     </div > `;

// $("#parent").html(html);