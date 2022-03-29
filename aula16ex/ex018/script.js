let num = document.querySelector("#fnum")
let lst = document.querySelector("#flista")
let res = document.querySelector("#res")
let valores = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlst(n, lista) {
    if (lista.indexOf(Number(n)) != 1) {
        return true
    } else {
        return false
    }
}

function addNum() {
    if (isNum(num.value) && inlst(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lst.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert("Valor inválido ou existente na lista")
    }
    num.value = ""
    num.focus()
}

function finish() {
    if (valores.length == 0) {
        window.alert("Adicione valores antes de finalizar")
    } else {
        let tot = valores.length
        valores.sort()
        let menor = valores[0]
        let maior = valores[valores.length - 1]
        let soma = 0
        let med = 0

        for (let pos in valores) {
            soma += valores[pos]
        }
        med = soma/tot
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${med}.</p>`
    }
}