function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("#res")

    if (Number(fano.value) < 1912 || fano.value > ano) {
        window.alert(`[ERRO] Verfique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            gênero = "Homem"

            if (idade >= 0 && idade < 12) {
                //foto de criança
                img.setAttribute("src", "../ex015/img/foto-msc01.png")
            } else if (idade >= 12 && idade < 18) {
                //foto de adolescente
                img.setAttribute("src", "../ex015/img/foto-msc02.png")
            } else if (idade >= 18 && idade < 60) {
                //foto de jovem
                img.setAttribute("src", "../ex015/img/foto-msc03.png")
            } else {
                //foto de idoso
                img.setAttribute("src", "../ex015/img/foto-msc04.png")
            }
        } else if (fsex[1].checked) {
            gênero = "Mulher"
        }

        if (idade >= 0 && idade < 12) {
            //foto de criança
                img.setAttribute("src", "../ex015/img/foto-fem01.png")
        } else if (idade >= 12 && idade < 18) {
            //foto de adolescente
                img.setAttribute("src", "../ex015/img/foto-fem02.png")
        } else if (idade >= 18 && idade < 60) {
            //foto de jovem
                img.setAttribute("src", "../ex015/img/foto-fem03.png")
        } else {
            //foto de idoso
                img.setAttribute("src", "../ex015/img/foto-fem04.png")
        }
        /* Para centralizar com Javascript
        res.style.textAlign = "center"
        */
       res.style.fontWeight = "bold"
       res.innerHTML = `Detectamos o cadastro de ${gênero} de ${idade} anos de idade.`
       res.appendChild(img)
    }
}