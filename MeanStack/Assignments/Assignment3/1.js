function weather() {

    // let cityName=document.getElementById("#textBox").value;
    let cityName = document.querySelector("#textBox").value;
    // let city = document.querySelector("#textBox");
    // let url = "api.openweathermap.org/data/2.5/weather?appid=a07f54253f834fe0bf91059f03f24f88&q=" + city;

    let url = "https://api.openweathermap.org/data/2.5/weather?appid=a07f54253f834fe0bf91059f03f24f88&units=metric&q=" +
        cityName;
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.onload = () => {
        console.log(xhr.responseText);

        // const refjson = JSON.parse(xhr.responseText);
        let jsonData = JSON.parse(xhr.responseText);

        callDom(jsonData);
    };

    xhr.send();
};

let callDom = (jsonData) => {
    var parent = document.querySelector("#parent");
    var city = jsonData.name;
    var minTemp = jsonData.main.temp_min;
    var maxTemp = jsonData.main.temp_max;

    console.log(minTemp);

    let newElement = parent.children[0].cloneNode(true);
    newElement.style.display = "flex";
    newElement.children[0].innerHTML = "City :" + city;
    newElement.children[1].innerHTML = "Minimum Temperature :" + minTemp;
    newElement.children[2].innerHTML = "Maximum Temperature :" + maxTemp;

    parent.insertBefore(newElement, parent.newElement)
    document.querySelector("#textBox").value = "";

};