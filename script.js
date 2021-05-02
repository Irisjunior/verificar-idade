

function verificar () {
  
  
  var data = new Date()

  var ano = data.getFullYear()
  var fano =document.querySelector('#txtano')
  var res = document.querySelector('div#res')
  if(fano.value.length == 0 || fano.value > ano){
    window.alert('[ERRO] Verifique os dado e tente novamente!')
  }
  else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)  
    var genero =''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >=0 && idade <=12) {
        img.setAttribute('src','foto-menino.jpg')
      }else if (idade >12 && idade <= 50) {
        //jovem
        img.setAttribute('src','foto-homem.jpg')
      }else if (idade >50 && idade <=100) {
        // adulto
        img.setAttribute('src','foto-idoso.jpg')
      }
    } else if(fsex[1].checked){
      genero ='Mulher'
      
      if (idade >=0 && idade <=12) {
        img.setAttribute('src','foto-menina.jpg')
      }else if (idade >12 && idade <= 50) {
        //jovem
        img.setAttribute('src','foto-mulher.jpg')
      }else if (idade >50 && idade <=100) {
        // adulto
        img.setAttribute('src','foto-idosa.jpg')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
  }
}


