/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
// ------------------------------------------------------------------- */

document.getElementById('submit').addEventListener('submit', converter);

const lb = document.getElementById('lb');
const g = document.getElementById('g');
const oz = document.getElementById('oz');

function hide(){
    lb.style.display = "none";
    g.style.display = "none";
    oz.style.display = "none";
}

function converter(e){
    e.preventDefault();
    const search = document.getElementById('search').value;
    lb.style.display = "block";
    g.style.display = "block";
    oz.style.display = "block";
    lb.innerHTML= search * 2.2046  + " Lb";
    g.innerHTML= search / 0.0010000 + " g";
    oz.innerHTML= search * 35.274 + " oz";
}
 

hide();