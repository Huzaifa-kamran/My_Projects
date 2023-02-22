let pass = document.getElementById("pass");
let confirmPass = document.getElementById("confirmPass");

let checkPass = () => {

    document.getElementById("pass-error").innerText = "";
    if(pass.value == confirmPass.value){
        pass.classList.remove("error");
        confirmPass.classList.remove("error");
        pass.classList.add("success");
        confirmPass.classList.add("success");
    }else{
        pass.classList.remove("success");
        confirmPass.classList.remove("success");
        pass.classList.add("error");
        confirmPass.classList.add("error");

    }
    
};


// document.getElementsByClassName("myForm").addEventListener("submit", function() {
//     alert("!!!");
//    let modal = document.getElementsByClassName("submit-div");
//     if(pass.value == confirmPass.value){
//        modal.style.display = "block";
//        alert("!21")
//     }
// });
// let  subForm = () => {
//     if(pass.value >=6  && confirmPass.value >=6  && pass.value == confirmPass.value){
//         document.getElementsByClassName("myForm").submit();
//         alert("123")
//     }
    // else{
    //     alert("456")
    // }
// }
// document.getElementById("stripe-login").addEventListener("submit", function() {
//     alert("122222");
//     console.log("submit");
//     document.getElementsByClassName("submit-div").style.display = "block";
//     if(pass.value == confirmPass.value){
//        modal.style.display = 'block';
//        alert("!21");
//        return true;
//     }

// });
// document.getElementsByClassName("submit-div").style.display = "block";


let validate  = () =>{

if(pass.value != confirmPass.value){
document.getElementById("pass-error").innerText = "Passwords do not match!"

return false;
}else{
   let name = document.getElementById("name").value;
    document.getElementById("modal-text").innerHTML =  "Dear "+ name + " your from is submit successfully";
    $('.submit-div').css({"display": "block"});
    return false;
}

}
$(".modal-btn").click(function () { 
    $('.submit-div').css({"display": "none"});
    document.getElementById("pass-error").innerText = "";
    pass.classList.remove("success");
        confirmPass.classList.remove("success");
});
$("#close-icon").click(function () { 
    $('.submit-div').css({"display": "none"});
    document.getElementById("pass-error").innerText = "";
    pass.classList.remove("success");
        confirmPass.classList.remove("success");
});
