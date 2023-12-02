function sete() {
   var n7 = 7
   document.querySelector("#painel").innerHTML += n7

}

function oito() {
   var n8 = 8
   document.querySelector("#painel").innerHTML += n8

}

function nove() {
   var n9 = 9
   document.querySelector("#painel").innerHTML += n9

}

function adição() {
   var mais = "+"
   document.querySelector("#painel").innerHTML += mais

}

function ce() {
   var desligar = ""
   document.querySelector("#painel").innerHTML = desligar

}

function quatro() {
   var n4 = 4
   document.querySelector("#painel").innerHTML += n4

}

function cinco() {
   var n5 = 5
   document.querySelector("#painel").innerHTML += n5

}

function seis() {
   var n6 = 6
   document.querySelector("#painel").innerHTML += n6

}


function subtração() {
   var menos = "-"
   document.querySelector("#painel").innerHTML += menos

}

function borracha() {
   var apagar = document.querySelector("#painel").innerHTML;
   document.querySelector("#painel").innerHTML = apagar.substring(0, apagar. length -1)

}

function um() {
   var n1 = 1
   document.querySelector("#painel").innerHTML += n1

}

function dois() {
   var n2 = 2
   document.querySelector("#painel").innerHTML += n2

}

function tres() {
   var n3 = 3
   document.querySelector("#painel").innerHTML += n3

}

function multiplicação() {
   var vezes = "*"
   document.querySelector("#painel").innerHTML += vezes

}

function virgula() {
   var ponto = "."
   document.querySelector("#painel").innerHTML += ponto

}

function zero() {
   var n0 = 0
   document.querySelector("#painel").innerHTML += n0

}

function divisão() {
   var dividi = "/"
   document.querySelector("#painel").innerHTML += dividi

}

function igual() {
   var igual = document.querySelector("#painel").innerHTML;
   if (igual){
      document.querySelector("#painel").innerHTML = eval(igual)
   }

}
