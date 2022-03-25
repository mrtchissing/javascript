function tabuada() {
    var num = document.getElementById("txtn")
    var tab = document.getElementById("seltab")

    if (num.value.length == 0) {
        window.alert("[Erro] Digite algum número")
    } else {
        var n = Number(num.value)
        let c = 1
        tab.innerHTML = "" // limpar resultados memorizados
        while ( c <= 10) {
            // Criar e introduzir elementos 
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            item.value =`tab${c}`
            c++
        }
    }
}