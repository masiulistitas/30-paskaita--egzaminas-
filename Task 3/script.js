/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
fetch(ENDPOINT)
        .then(response => response.json())
        .then(myData => {
                
            
            document.getElementById('btn').addEventListener('click', showUsers);
                const cardId = document.getElementById('cardId');
                function showUsers(){
                    document.getElementById("message").style.display = "none";
                    let output =  document.getElementById("output");
                myData.forEach((item, index) => {
                    let card = document.createElement('div');
                    card.className = 'card';
                    card.setAttribute('id', 'cardId');
                    let avatar = document.createElement("img");
                    avatar.className = "image";
                    avatar.src = item.avatar_url;
                    let login = document.createElement("h4");
                    login.textContent = item.login;
                    card.append(login,avatar);
                    document.getElementById("output").append(card);
                })
                    }

        })

        .catch((error) => {
            console.error('Error:', error);
          });
            
                
            
       