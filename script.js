let numcard = "";
let deck = [];
round =0;
check=0;
let firstcard;
let secondcard;
let c = 0;
const elementcard =[
    'assets/bobrossparrot.gif',
    'assets/bobrossparrot.gif',
    'assets/explodyparrot.gif',
    'assets/explodyparrot.gif',
    'assets/fiestaparrot.gif',
    'assets/fiestaparrot.gif',
    'assets/metalparrot.gif',
    'assets/metalparrot.gif',
    'assets/tripletsparrot.gif',
    'assets/tripletsparrot.gif',
    'assets/unicornparrot.gif',
    'assets/unicornparrot.gif',
    'assets/revertitparrot.gif',
    'assets/revertitparrot.gif',
]
 // verificar se o caracter é valido 
function checkcard(){

if(numcard %2 !== 0|| numcard < 4 || numcard >14){
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
createdeck();

}
question();

// pegar as cartas na quantidade que o usuario pedir
function createcard(){
   const cards = document.querySelector('.panel-card');
   cards.innerHTML = '';

    for(let i =0; i< numcard;i++){
        cards.innerHTML+=`
        <li class="card" onclick ="turncard(this)" data-test="card">
               <div class="front-card rotation">
                <img src="assets/front 5.png" data-test="face-up-imagem">
               </div>
               <div class="back-card rotation">
                  <img src="${deck[i]}" data-test="face-down-imag" >
               </div>
            </li>
        `;
    }
}
// uma nova array com o n cartas passadas pelo jogador e embaralhar
function comparador() { 
	return Math.random() - 0.5; 
}
function createdeck(){ 

   for(let i= 0; i < numcard; i++){
    const cardeck = elementcard[i];
    deck.push(cardeck);
     
   }

   deck.sort(comparador);
   createcard();
   }
 console.log(deck);

// ao clicar na carta, virar
function instacard(){// reset
    firstcard = undefined;
    secondcard = undefined;
}


function turncard(card){ // vzcar

    if(card.classList.contains("over")){

   return;

 }
// se as duas não foram clicadas return
// se a primeira carta for virada, ela permanece virada ate outra ser virada 
 // se as duas forem iguais então o usuario acertou; remove o over 
 if(firstcard !== undefined && secondcard !== undefined){
    return;
 }
 if(firstcard === undefined || secondcard === undefined){
    card.classList.add('over');
    round++;//jogadas

  if(firstcard === undefined){
    firstcard = card;

  }else{
   if (secondcard === undefined){
    secondcard = card; 
    if(firstcard.innerHTML == secondcard.innerHTML){
       instacard(); // reseta as variaveis 
       check = check +2;

        end();
    } else{
        setTimeout(firstcard.classList.remove('over'),secondcard.classList.remove('over'),instacard(),1000);
    } 
  }
}  
}
}


function end(){
    if(numcard == check){
      alert(` Você ganhou em ${round} jogadas!`);
    }

    }
    let idinterval;
    function stopwatch(){

       idinterval= setInterval(time(),1000);
        
    }
    stopwatch();
    function time(){
    c++;
    const cont = document.querySelector('.watch');
    cont.innerHTML = c;
    if(end() !== undefined){
       
       clearInterval(idinterval);
    }
  
    }