let ajaxCall = function () {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:5600/");

    xhr.onload = () => {
        console.log(xhr.responseText);


        let jsonData = JSON.parse(xhr.responseText);

        callDom(jsonData);
    };

    xhr.send();
};

let callDom = function (data) {

    console.log(data.name);
    let ref = document.querySelector("#parent");
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let newElement = document.querySelector("#child").cloneNode(true);
        newElement.style.visibility = "visible";
        newElement.style.backgroundColor = "silver";
        newElement.style.color = "black";
        newElement.children[0].innerHTML = "ID :" + item.id;
        newElement.children[1].innerHTML = "TITLE :" + item.title;
        newElement.children[2].innerHTML = "BODY :" + item.body;
        ref.insertBefore(newElement, ref.children[0]);
    }
}

