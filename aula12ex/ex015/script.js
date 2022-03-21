function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("#txtano")
    var res = document.querySelector("#res")

    if (fano,value.lenght == 0 || Number(fano.value) > 0) {
        window.alert(`[ERRO] Verfique os dados e novamente`)
    } 
}