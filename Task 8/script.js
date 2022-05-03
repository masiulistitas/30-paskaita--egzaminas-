/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


function numbers(a,b) {
    this.a = a;
    this.b = b;
  }
  
  const add = new numbers(9,5);
  const subtract = new numbers(126,65);
  const multiplication = new numbers(9,13)
  const division = new numbers(357,4)
  
  //Adding numbers
  add.number = function() {
    return this.a + this.b;
  };
  document.getElementById("letsTryAdd").innerHTML =
  "Adding two numbers(9+5) = " + add.number();
  console.log(add.number());

  //Subtracting numbers
    subtract.number = function() {
        return this.a - this.b;
    };
      
    document.getElementById("subtract").innerHTML =
    "Subtracting two numbers(126-65) = " + subtract.number();
    console.log(subtract.number());

    //Multiplying numbers
    multiplication.number = function() {
        return this.a * this.b;
    };
      
    document.getElementById("multiplication").innerHTML =
    "Multiplication of two numbers(9*13) = " + multiplication.number(); 
    console.log(multiplication.number());

    //Dividing numbers
    division.number = function() {
        return this.a / this.b;
    };
      
    document.getElementById("division").innerHTML =
    "Division of two numbers(357/4) = " + division.number(); 
    console.log(division.number());