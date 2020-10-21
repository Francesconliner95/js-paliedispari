var numero_utente=0;
var pari_dispari;
var accettabile=false;
var numero_CPU = 0;
var somma=0;

do{

    numero_utente = parseInt(prompt('Inserisci un umero da 1 a 5:'));           /*accettiamo dall'utente un valore compreso tra 1 e 5*/

}while(numero_utente>5 || numero_utente<1)
console.log('Numero utente: ' + numero_utente);

do{
    pari_dispari = prompt('Pari o Dispari?');
    pari_dispari = pari_dispari.toLowerCase();  /*mettiamo tutta la parola in minuscolo in modo da accettare tutte le stringe se digitate maiuscole o minuscole*/
    if(pari_dispari=='pari'||pari_dispari=='dispari'){
        accettabile=true;
    }
    else{
        alert('Inserisci solo "pari" o "dispari"');
        console.log('Inserisci solo "pari" o "dispari"');
    }

}while(accettabile==false);
console.log('Scelta utente: ' + pari_dispari);

numero_CPU = Math.floor(Math.random() * 5)+1; /*Numero generato random da 1 a 5*/
console.log('numero CPU: ' + numero_CPU);

somma = numero_utente + numero_CPU;
console.log('somma: ' + somma);

WinnerLoser(somma,pari_dispari);


function WinnerLoser(somma,pari_dispari) {
    if(somma%2==0 && pari_dispari=='pari'){  /*se 'pari' la somma e 'pari' la mia scelta ho vinto*/
        console.log('Hai vinto');
    }
    if(somma%2==1 && pari_dispari=='dispari'){/*se 'dispari' la somma e 'dispari' la mia scelta ho vinto*/
        console.log('Hai vinto');
    }
    if(somma%2==0 && pari_dispari=='dispari'){ /*se 'pari' la somma e 'dispari' la mia scelta ho perso*/
        console.log('Hai perso');
    }
    if(somma%2==1 && pari_dispari=='pari'){/*se 'dispari' la somma e 'pari' la mia scelta ho perso*/
        console.log('Hai perso');
    }
}
