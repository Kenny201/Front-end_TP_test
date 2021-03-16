document.addEventListener("DOMContentLoaded", function(event) {
  //do work
  var header = document.querySelector('header');
  var section = document.querySelector('section');
  var requestURL = 'db.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function(){
    var genre = request.response;
    populateHeader(genre);
  }
  function populateHeader(jsonObj){
    var mayH1 = document.createElement('h1');
    mayH1.textContent = jsonObj['horror'][1]['title'];
    header.appendChild(mayH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'time ' + jsonObj['horror'][1]['cast'][1]['name'] + jsonObj['horror'][1]['cast'][1]['character'];
    header.appendChild(myPara);
    jsonObj = JSON.stringify(jsonObj);

    var cardFilms = document.createElement('ul');
    section.appendChild(cardFilms);
    if(typeof(jsonObj) === "string"){
      jsonObj = JSON.parse(jsonObj);

    }else{
      console.log("Не обьект");
    }
    json = Object.values(jsonObj);
    console.log(json);
     json.forEach(function(item, i){
          cardFilms.innerHTML += `<li class="movie-card">${item[i]['title']}</li>`;
     });

  }
});
