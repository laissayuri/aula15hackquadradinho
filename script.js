function aleatorio(min, max){
   return Math.floor(Math.random() * (max - min +1)) + min;
}

let quadradinhos = document.querySelectorAll(".quadradinho");
const cores = ["pink", "lightblue", "aqua", "purple"];

for (quadradinho of quadradinhos){
    quadradinho.onmouseenter = function(){
        this.style.backgroundColor = cores[aleatorio(0,3)]; //vai pintar a si proprio com o this
    }
}

