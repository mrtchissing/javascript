function contar() {
    var inicio = document.querySelector("#nstart")
    var fim = document.querySelector("#nend")
    var intv = document.querySelector("#nsteps")
    var res = document.querySelector("#res")
    /*
    inicio = Number(inicio)
    fim = Number(fim)
    intv = Number(intv)
    */
   if (inicio.value.length == 0 || fim.value.length == 0 || intv.value.length == 0) {
       window.alert("[ERRO] Há dados em falta no formulário!")
   } else {
       res.innerHTML = "Contando: "
       i = Number(inicio.value)
       f = Number(fim.value)
       p = Number(intv.value)

       if (i < f) {
        for (cont = i; cont <= f; cont += p){
            res.innerHTML += `${cont} \u{1F449} `// U+1F449 » \u{}
        }
       } else if (i > f) {
        for (cont = i; cont >= f; cont -= p){
            res.innerHTML += `${cont} \u{1F449} `// U+1F449 » \u{}
        }
       } else {
           window.alert("[ERRO] Algum parâmetro está errado")
       }
       res.innerHTML += "\u{1F1E6}\u{1F1F4} FIM! "
   }
}