"use strict"
var countryList = [];
var countries = document.getElementsByClassName('country');

for (var i = 0; i < countries.length; i++){
    var countryName = countries[i].innerHTML;
    countryList.push(countryName);
}

var searchBox = document.getElementById('search-box');

searchBox.addEventListener('keyup', function(event){
    var text = searchBox.value.toLowerCase();
    
    
    
    for (var i = 0; i < countries.length; i++) {
        if (countryList[i].toLowerCase().indexOf(text) < 0){
            countries[i].style.display = 'None';

        } else{
            countries[i].style.display = 'Block';

        }
    }
    

});