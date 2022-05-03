/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title,director,budget){
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    
    wasExpensive(){
    if(this.budget > 100000000){
        return true;
    }

    else {
        return false;
    }
}
}

const avengers = new Movie("The Avengers", "Joss Whedon", 90000000);
const avatar = new Movie ("Avatar", "James Cameron", 237000000);

avengers.wasExpensive();
avatar.wasExpensive();

console.log(avengers.wasExpensive());
console.log(avatar.wasExpensive());












// function Movies(title,director,budget){
//     this.title = title;
//     this.director = director;
//     this.budget = budget;
// }

// const firstDirector = new Movies("Bananas", "Tomas", 90000000)
// const secondDirector = new Movies("Obuolys", "Antanas", 110000000)


// secondDirector.obuolys = function(){
//     if(this.budget > 100000000){
//         return true;
//     }

//     else {
//         return false;
//     }
// }

// console.log(firstDirector.bananas())
// console.log(secondDirector.obuolys())