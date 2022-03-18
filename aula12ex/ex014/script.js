function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    //hora = 12
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = "BOM DIA! " + `Agora são ${hora} horas.`
        msg.style.color = "#a38125"
        img.src = "../ex014/img/fotomanha.png"
        window.document.body.style.backgroundColor = "#f9d778"
    } else if ( hora < 18) {
        msg.innerHTML = "BOA TARDE! "  + `Agora são ${hora} horas.`
        img.src = "../ex014/img/fototarde.png"
        window.document.body.style.backgroundColor = "#a5c6bf"
        msg.style.color = "#6f998f"
    } else {
        msg.innerHTML = "BOA NOITE! "  + `Agora são ${hora} horas.`
        img.src = "../ex014/img/fotonoite.png"
        window.document.body.style.backgroundColor = "#2C2C34"
    }
}