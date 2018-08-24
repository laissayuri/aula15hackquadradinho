function aleatorio(min, max){
   return Math.floor(Math.random() * (max - min +1)) + min;
}

let quadradinhos = document.querySelectorAll(".quadradinho");
const cores = ["pink", "lightblue", "aqua", "purple"];

//função foi criada com o nome de bg (background) em vez de ser retornarCor para tornar o codigo mais legivel
function bg(quadradinho){
    return quadradinho.style.backgroundColor;
}

function encerrarJogo(){
    for(quadradinho of quadradinhos){
        quadradinho.onmouseenter = null;
    }
    alert("Parabéns, você venceu!");
}

for (quadradinho of quadradinhos){
    quadradinho.onmouseenter = function(){
        this.style.backgroundColor = cores[aleatorio(0,3)]; //vai pintar a si proprio com o this
        if(bg(quadradinhos[0]) === bg(quadradinhos[1]) &&
           bg(quadradinhos[1]) === bg(quadradinhos[2]) &&
           bg(quadradinhos[2]) === bg(quadradinhos[3])) {
            encerrarJogo();
        }
    }
}



