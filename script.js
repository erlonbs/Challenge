function removeImagem() {
  document.getElementById('busca').style.display = 'none'
}

function insereRetangulo() {
  document.getElementById('retangulo').style.display = 'flex'
}

function encriptografa() {
  var texto = document.getElementById('texto').value
  var aux = ''
  var vet = ['e', 'i', 'a', 'o', 'u']

  for (var i = 0; i < texto.length; i++) {
    if (vet[0] == texto[i]) {
      aux = aux + 'enter'
    } else if (vet[1] == texto[i]) {
      aux = aux + 'imes'
    } else if (vet[2] == texto[i]) {
      aux = aux + 'ai'
    } else if (vet[3] == texto[i]) {
      aux = aux + 'ober'
    } else if (vet[4] == texto[i]) {
      aux = aux + 'ufat'
    } else aux = aux + texto[i]
  }

  document.getElementById('textoAux').value = aux
}

function descriptografa() {

  var textoEncr = document.getElementById('texto').value
  var aux2 = ''      

      aux2=textoEncr.replace(/enter/g, 'e');
      var aux3 =aux2.replace(/imes/g,'i');
      var aux4 = aux3.replace(/ai/g,'a');
      var aux5 = aux4.replace(/ober/g,'o');
      var aux6 = aux5.replace(/ufat/g, 'u');
   
      console.log(aux6);
       
  document.getElementById('textoAux').value = aux6;

  }
    

function copiar(){
  var texto = document.getElementById('textoAux').value
  document.getElementById('texto').value = texto;
  document.getElementById('textoAux').value='';

}

function recarregar(){
  location.reload();
}

