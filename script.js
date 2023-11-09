function allowDrop(ev) {
    ev.preventDefault();
    }
    
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    }
    
function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    }
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
        
function aleatorio(){
    const imagem = document.querySelector("img");
    var num = rand(1,8);
         
        if (num == 1){
            imagem.setAttribute("src","./img/Arceus - Sombra.png");
            imagem.setAttribute("width","350px"); 
        }
        else if(num == 2){
            imagem.setAttribute("src","./img/Dialga - Sombra.png");
            imagem.setAttribute("width","350px");
        }
        else if(num == 3){
            imagem.setAttribute("src","./img/articuno - Sombra.png");
            imagem.setAttribute("width","350px");
        } else if(num == 4){
            imagem.setAttribute("src","./img/Giratina - Sombra.png");
            imagem.setAttribute("width","350px");
        }
        else if(num == 5){
            imagem.setAttribute("src","./img/groudon - Sombra.png");
            imagem.setAttribute("width","350px");
        }
        else if(num == 6){
            imagem.setAttribute("src","./img/Mega-Latiaos - Sombra.png");
            imagem.setAttribute("width","350px");
        }
        else if(num == 7){
            imagem.setAttribute("src","./img/Palkia - Sombra.png");
            imagem.setAttribute("width","350px");
        } else if(num == 8){
            imagem.setAttribute("src","./img/Rayquaza - Sombra.png");
            imagem.setAttribute("width","350px");
        }
        else{
            texto.innerHTML = "pokemon não encontrado... =(";
            imagem.setAttribute("src","./img/erro.webp");
            imagem.setAttribute("width","150px");
        }
    }
    