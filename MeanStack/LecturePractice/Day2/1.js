
function callAjax() {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.onload = () => {
        const refjson = JSON.parse(xhr.responseText);
        DomOperation(refjson);
    }

    xhr.send();

};


let DomOperation = function (jsonObject) {
    console.log(jsonObject);

    let parentInst = document.querySelector("#parentId");

    for (let i = 0; i < jsonObject.length; i++) {
        let item = jsonObject[i];

        let newElement = parentInst.children[0].cloneNode(true);
        newElement.style.visibility = "visible";
        newElement.style.color = "white";
        newElement.style.fontsize = "25px";
        newElement.children[0].innerHTML = "ID :" + item.ID;
        newElement.children[1].innerHTML = "NAME :" + item.FirstName + " " + item.LastName;
        newElement.children[2].innerHTML = "BOOKID :" + item.IDBook;

        parentInst.insertBefore(newElement, parentInst.firstChild);

    }
}


function callAjaxXML() {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.setRequestHeader("accept", "application/xml");

    xhr.onload = () => {
        const xmldoc = xhr.responseXML;
        xmlDomHandler(xmldoc);
    };
    xhr.send();
};

let xmlDomHandler = function (xmlDoc) {

    const parentElement = xmlDoc.querySelector("ArrayOfAuthor");
    console.log(parentElement);

    for (let i = 0; i < parentElement.children.length; i++) {
        let authorItem = parentElement.children[i];

        let ID = authorItem.children[1].innerHTML;
        let firstName = authorItem.children[0].innerHTML;
        let lastName = authorItem.children[3].innerHTML;
        let IdBook = authorItem.children[2].innerHTML;

        let parent = document.querySelector("#parentId");
        let newElement = parent.children[0].cloneNode(true);
        newElement.style.visibility = "visible";


        newElement.children[0].innerHTML = "ID :" + ID;
        newElement.children[1].innerHTML = "NAME :" + firstName + " " + lastName;
        newElement.children[2].innerHTML = "BOOKID :" + IdBook;


        // newElement.children[0].innerHTML = firstName + " " + lastName;

        parent.insertBefore(newElement, parent.firstChild);
    }

};


// Another  Way we can do that

let xmlDomHandler2 = (xmlDoc) => {
    const authorList = xmlDoc.querySelectorAll("Author");

    for (let i = 0; i < authorList.length; i++) {
        let authorItem = authorList[i];

        let ID = authorItem.children[1].innerHTML;
        let firstName = authorItem.children[0].innerHTML;
        let lastName = authorItem.children[3].innerHTML;
        let IdBook = authorItem.children[2].innerHTML;
        // HTML DOM
        let parent = document.querySelector("#parent");
        let newElement = parent.children[0].cloneNode(true);
        newElement.style.visibility = "visible";
        newElement.children[0].innerHTML = "ID :" + ID;
        newElement.children[1].innerHTML = "NAME :" + FirstName + " " + item.LastName;
        newElement.children[2].innerHTML = "BOOKID :" + IDBook;


        parent.insertBefore(newElement, parent.firstChild);
    }
};