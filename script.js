let toastBox = document.getElementById("toastBox");
let succesMsg = '<i class="fa-solid fa-circle-check"></i>Se envio correctamente';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Error al Enviar';
let invalidMsg ='<i class="fa-solid fa-triangle-exclamation"></i> invalido';

function showToast(msg){

    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes("Error al Enviar")){
        toast.classList.add("error");
    }
    if(msg.includes("invalido")){
        toast.classList.add("invalid");
    }

    setTimeout(()=>{
        toast.remove();
    }, 6000);
}