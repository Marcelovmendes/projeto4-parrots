numcard = "";
 
function checkcard(){

if(numcard %2 !== 0|| numcard < 4 || numcard >14 ||isNaN(numcard) ){
    return true;
}else{
    return false;
}

}

function question(){
while(checkcard()){
    numcard = Number(prompt("Digite com quantas cartas você quer jogar "));
}
//função da destribuição

}
question()