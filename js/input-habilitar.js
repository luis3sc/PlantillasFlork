let forma = document.querySelector("#google-sheet");
let btn = document.querySelector("#btn");

function validar() {
 let desabilitar = false;

 if (forma.name.value == "") {
    desabilitar = true;
 }

 if (forma.email.value == "") {
    desabilitar = true;
 }

 if (forma.mobile.value == "") {
    desabilitar = true;
 }
 if (desabilitar == true){
    btn.disabled = true;
 } else {
    btn.disabled = false;
 }
forma.addEventListener("keyup", validar)
}