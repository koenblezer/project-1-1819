// // MAANLAMP WRAPPER
// 'use strict'
//
// // import API from '../../node_modules/oba-wrapper/js/index.js'
//
// (async () => {
//   localStorage.clear();
//
//   const api = new API({
//       key: "1e19898c87464e239192c8bfe422f280"
//   });
//   const stream = await api.createStream("search/banaan{5}");
//
//   stream
//     .pipe(console.log)
//     .catch(console.error);
// })();
//
// console.log("poep");


// OBA API STANDAARD

var http = new XMLHttpRequest();
var url = "https://cors-anywhere.herokuapp.com/https://zoeken.oba.nl/api/v1/search/?q=boek&authorization=1e19898c87464e239192c8bfe422f280&facet=type(book)";
var url2 = "https://cors-anywhere.herokuapp.com/https://zoeken.oba.nl/api/v1/search/?q=classification:prentenboek&authorization=1e19898c87464e239192c8bfe422f280";
var url3 = "https://cors-anywhere.herokuapp.com/https://zoeken.oba.nl/api/v1/search/?q=classification:kyteman&authorization=1e19898c87464e239192c8bfe422f280&facet=type(book)";
var muziek1 = "https://cors-anywhere.herokuapp.com/https://zoeken.oba.nl/sru3_muziekweb/api/v1/?q=classification:kyteman&authorization=1e19898c87464e239192c8bfe422f280";
var muziek2 = "https://cors-anywhere.herokuapp.com/https://zoeken.oba.nl/?q=kyteman&dim=Type(sheetmusic)&authorization=1e19898c87464e239192c8bfe422f280";

http.open("GET", muziek2);
http.send();


http.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
      // console.log(response);
      var apiData = http.responseText;
      console.log(apiData);

        var paste = document.querySelector('#tone-piano');

        paste.innerHTML = apiData;
    }
  }

  var apiData = http.responseText;
  console.log(apiData);

    var paste = document.querySelector('#tone-piano');

    paste.innerHTML = apiData;
