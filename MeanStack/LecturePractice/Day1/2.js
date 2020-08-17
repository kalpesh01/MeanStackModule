
var abc = document.querySelector("#parentContainer");
console.log(abc);

window.addEventListener("load", () => {
    console.log("Page load event listener called is called");

    var abc = document.querySelector("#parentContainer");
    // console.log(abc);


    //lets create 
    let postList = [
        { id: 1, post: "Hello world" },
        { id: 2, post: "Hello cdac" },
        { id: 3, post: "Hello html" },
        { id: 4, post: "Hello css" },
        { id: 5, post: "Hello c++" },
        { id: 6, post: "Hello java" },
        { id: 7, post: "Hello .net" },
        { id: 8, post: "Hello c#" },
        { id: 7, post: "Hello angular" },
        { id: 8, post: "Hello mean stack" }
    ];

    for (let i = 0; i < postList.length; i++) {
        let item = postList[i];
        var newElement = abc.children[0].cloneNode(true);
        newElement.style.display = "flex";
        newElement.innerHTML = item.post;
        abc.insertBefore(newElement, abc.firstChild);
    }

});