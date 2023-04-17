function mostrarInicio() {
    document.getElementById("inicio").style.visibility = "visible";
    document.getElementById("inicio").style.width = "100%";
    document.getElementById("menu").style.visibility = "collapse";
    document.getElementById("menu").style.height = "0px";
    document.getElementById("menu").style.width = "0px";
    document.getElementById("sucursales").style.visibility = "collapse";
    document.getElementById("sucursales").style.height = "0px";
    document.getElementById("sucursales").style.width = "0px";
    document.getElementById("contacto").style.visibility = "collapse";
    document.getElementById("contacto").style.height = "0px";
    document.getElementById("contacto").style.width = "0px";
}

function mostrarMenu() {
    document.getElementById("inicio").style.visibility = "collapse";
    document.getElementById("inicio").style.height = "0px";
    document.getElementById("inicio").style.width = "0px";
    document.getElementById("menu").style.visibility = "visible";
    document.getElementById("menu").style.width = "100%";
    document.getElementById("sucursales").style.visibility = "collapse";
    document.getElementById("sucursales").style.height = "0px";
    document.getElementById("sucursales").style.width = "0px";
    document.getElementById("contacto").style.visibility = "collapse";
    document.getElementById("contacto").style.height = "0px";
    document.getElementById("contacto").style.width = "0px";
    document.getElementById("pie").style.visibility = "collapse";
}

function mostrarSucursales() {
    document.getElementById("inicio").style.visibility = "collapse";
    document.getElementById("inicio").style.height = "0px";
    document.getElementById("inicio").style.width = "0px";
    document.getElementById("menu").style.visibility = "collapse";
    document.getElementById("menu").style.height = "0px";
    document.getElementById("menu").style.width = "0px";
    document.getElementById("sucursales").style.visibility = "visible";
    document.getElementById("sucursales").style.width = "100%";
    document.getElementById("contacto").style.visibility = "collapse";
    document.getElementById("contacto").style.height = "0px";
    document.getElementById("contacto").style.width = "0px";
}

function mostrarContacto() {
    document.getElementById("inicio").style.visibility = "collapse";
    document.getElementById("inicio").style.height = "0px";
    document.getElementById("inicio").style.width = "0px";
    document.getElementById("menu").style.visibility = "collapse";
    document.getElementById("menu").style.height = "0px";
    document.getElementById("menu").style.width = "0px";
    document.getElementById("sucursales").style.visibility = "collapse";
    document.getElementById("sucursales").style.height = "0px";
    document.getElementById("sucursales").style.width = "0px";
    document.getElementById("contacto").style.visibility = "visible";
    document.getElementById("contacto").style.width = "100%";
}