function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src' ,'fotomenino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src' , 'homemjovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src' , 'homemadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src' , 'idosohomem')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src' ,'fotomenina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src' , 'mulherjovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src' , 'mulheradulta.jpg')
            } else {
                //idoso
                img.setAttribute('src' , 'idosamulher.jpg')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
       
}