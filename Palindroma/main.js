var parola = prompt('Inserisci un parola: ');
var array = [];
var islettera=true;
var isPalindroma=true;

array = parola.split(""); //dividiamo ogni singola lettera la inseriamo nell'array

for (var i = 0; i < array.length/2; i++) {
    islettera = CompareLetter(array); //la funzione ci dara' come risultato per ogni lettera confrontata se uguale=true o diversa=false rispetto a quella concomitante
    if(islettera==false){ //se una singola lettera non corrisponde con la sua concomitante singifica che tutta la parola non è palindroma
        isPalindroma=false;
    }
}

if(isPalindroma==false){
    console.log('Non è palindroma');
}
else{
    console.log('E\' palindroma');
}


function CompareLetter(array){
    console.log(array[i] + '==' + array[array.length-(i+1)]);
    if(array[i]!=array[array.length-(i+1)]){   //confrontiamo la prima lettera con l'ultima e cosi via sino ad arrivare al centro
        return false;
    }
}
