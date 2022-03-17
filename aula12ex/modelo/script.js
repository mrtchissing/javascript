function carregar() {
    var msg = window.document.getElementById("#msg")
    var img = window.document.getElementById("#imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (0 <= hora < 12) {
        msg.innerHTML = "BOM DIA"
        img.src = "../ex014/fotomanha.png"
    } else if ( hora < 18) {
        msg.innerHTML = "BOA TARDE"
        img.src = "../ex014/fototarde.png"
    } else {
        //BOA NOITE
        img.src = "../ex014/fotonoite.png"
    }
}