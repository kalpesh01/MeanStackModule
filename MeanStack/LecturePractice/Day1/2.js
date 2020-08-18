
// var abc = document.querySelector("#parentContainer");
// console.log(abc);

window.addEventListener("load", () => {
    // console.log("Page load event listener called is called");

    var abc = document.querySelector("#parentContainer");
    // console.log(abc);



    // let postList = [
    //     { id: 1, post: "Hello world" },
    //     { id: 2, post: "Hello cdac" },
    //     { id: 3, post: "Hello html" },
    //     { id: 4, post: "Hello css" },
    //     { id: 5, post: "Hello c++" },
    //     { id: 6, post: "Hello java" },
    //     { id: 7, post: "Hello .net" },
    //     { id: 8, post: "Hello c#" },
    //     { id: 7, post: "Hello angular" },
    //     { id: 8, post: "Hello mean stack" }
    // ];

    // for (let i = 0; i < postList.length; i++) {
    //     let item = postList[i];
    //     var newElement = abc.children[0].cloneNode(true);
    //     newElement.style.display = "flex";
    //     newElement.innerHTML = item.post;
    //     abc.insertBefore(newElement, abc.firstChild);
    // }




    // for (let i = 0; i < data.length; i++) {
    //     let item = postList[i];
    //     var newElement = abc.children[0].cloneNode(true);
    //     newElement.style.display = "flex";
    //     newElement.children[0].innerHTML = sjson.data[i].id;
    //     newElement.children[1].innerHTML = sjson.data[i].first_name + sjson.data[i].last_name;
    //     newElement.children[2].innerHTML = sjson.data[i].email;
    //     abc.insertBefore(newElement, abc.firstChild);
    // }

    // value is hardcoded at client side :: lets replace with some server data;
    // lets make ajax request here;

    // Step 1
    let xhr = new XMLHttpRequest();

    // makding GET request. :: demo URL :: https://reqres.in/api/users?page=2
    xhr.open("GET", "https://reqres.in/api/users?page=2");

    // handshake and lisner of response
    xhr.onreadystatechange = () => {
        // on ready state 4 :: when operation comples with server
        if (xhr.readyState === 4) {
            // server response
            // console.log(xhr.responseText);

            // responser server is in string
            let sjson = JSON.parse(xhr.responseText);
            // data.is array or list from server
            console.log(sjson.data[0].id);
            // console.log(sjson);

            for (let i = 0; i <= sjson.data.length; i++) {

                var newElement = abc.children[0].cloneNode(true);
                newElement.style.display = "flex";
                newElement.style.visibility = "visible";
                newElement.children[0].innerHTML = "id :" + sjson.data[i].id;
                newElement.children[1].innerHTML = "Full Name :" + sjson.data[i].first_name + sjson.data[i].last_name;
                newElement.children[2].innerHTML = "Email :" + sjson.data[i].email;
                abc.insertBefore(newElement, abc.firstChild);
            }

            // lets use this list and plot our dom by calling dom logic here
            // domlogicHere(sjson.data);
        }
    };
    xhr.send();

});