function addElement() {


    // let ref = document.querySelector("#parent");
    let ref = $("#parent :nth-child(1) :nth-child(1)").clone(true);
    $("#parent :nth-child(1) :nth-child(1) :nth-child(1)").html("kalpesh");
    $("#parent :nth-child(1) :nth-child(2)").html("Ramlal");
    $("#parent :nth-child(1) :nth-child(3)").html("Patil");
    $("#parent :nth-child(1)").insertBefore("#parent :nth-child(1)");




    // let newElement = document.querySelector("#parent").children[0].cloneNode(true);
    // newElement.children[0].innerHTML = "Hello World";
    // newElement.children[1].innerHTML = "kalpesh";
    // newElement.children[2].innerHTML = "jalgaon";

    // ref.insertBefore(newElement, ref.firstChild);

    // $("#parent :nth-child(1)").clone(true).html("Kalpesh");
    // $("#parent :nth-child(2)").clone(true).html("patil");
    // $("#parent :nth-child(3)").clone(true).html("jalgaon");

    // $("#parent :nth-child(1)").insertBefore("#parent ");
}