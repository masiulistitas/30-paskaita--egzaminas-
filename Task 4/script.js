/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
fetch("./cars.json")
.then(res => res.json())
.then(data =>  {


    data.forEach((item, index) => {
        let box = document.createElement('div');
        box.className = 'box';
        let brand = document.createElement("h3");
        brand.className = "brand";
        brand.textContent = item.brand;
        let models = document.createElement("p");
        models.textContent = item.models;
        box.append(brand,models);
        document.getElementById("output").append(box);
    })
    })
    .catch((error) => {
        console.error('Error:', error);
      });
    