// $(document).ready(function () {

//     $('.input').focus(function () {
//         $(this).parent().find(".label-txt").addClass('label-active');
//     });

//     $(".input").focusout(function () {
//         if ($(this).val() == '') {
//             $(this).parent().find(".label-txt").removeClass('label-active');
//         };
//     });
// });

function submit() {
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
    console.log("Name :" + name + "Email :" + email + "Password :" + pass);
}