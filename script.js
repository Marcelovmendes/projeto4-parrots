numcard = "";

const elementcard =[
    'assets/bobrossparrot.gif',
    'assets/bobrossparrot.gif',
    'assets/explidyparrot.git',
    'assets/explidyparrot.git',
    'assets/fiestaparrot.gif',
    'assets/fiestaparrot.gif',
    'asset/smetalparrot.gif',
    'asset/smetalparrot.gif',
    'assets/tripletsparrot.gif',
    'assets/tripletsparrot.gif',
    'assets/unicornparrot.gif',
    'assets/unicornparrot.gif',
    'assets/revertitparrot.gif',
    'assets/revertitparrot.gif',
]
 const deck = [];
 
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

// pegar as cartas na quantidade que o usuario pedir
function createcard(){
   const cards = document.querySelector('.panel-card');
   cards.innerHTML = '';

    for(let i =0; i< numcard;i++){
        cards.innerHTML+=`
        <li class="card">
               <div class="front-card rotation">
                <img src="assets/front 5.png">
               </div>
               <div class="back-card rotation">
                  <img src="${elementcard[i]}">
               </div>
            </li>
        `;
    }
}
