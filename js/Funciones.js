function miFunction(num){
    return num*num
}
console.log(miFunction(5))

function usuario(elUsuario = "Usuario Desconocido"){
    if (typeof elUsuario == "number"){
        return console.log("El Usuario no puede ser númerico")
    }else if(typeof elUsuario == "boolean"){
        return console.log("El Usuario no puede ser booleano")
    } else if(elUsuario.length > 4){
        return console.log("El Usuario no puede tener más de 4 carácteres")
    }else{
        return console.log("Hola, Bienvenido "+ elUsuario)
    }
}

usuario("Gera")
usuario("Marce")
usuario(1234)
usuario(true)
