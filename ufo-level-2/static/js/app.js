// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
tableData.forEach((ufo) => {
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  var ufoTableBody = d3.select("tbody");
  ufoTableBody.html("");
  
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement1 = d3.select("#datetime");
  var inputElement2 = d3.select("#country");
  var inputElement3 = d3.select("#city");
  var inputElement4 = d3.select("#state");
  var inputElement5 = d3.select("#shape");


  // Get the value property of the input element
  var inputValue1 = inputElement1.property("value");
  var inputValue2 = inputElement2.property("value");
  var inputValue3 = inputElement3.property("value");
  var inputValue4 = inputElement4.property("value");
  var inputValue5 = inputElement5.property("value");

  console.log(inputValue1);
  console.log(inputValue2);
  console.log(inputValue3);
  console.log(inputValue4);
  console.log(inputValue5);
  console.log(data);


  var filteredData = tableData;

    if (inputValue1 !== ''){
     filteredData = filteredData.filter(filteredData => filteredData.datetime === inputValue1);
    };

    if (inputValue2 !== ''){
        filteredData = filteredData.filter(filteredData => filteredData.country === inputValue2.toLowerCase());
    };

    if (inputValue3 !== ''){
        filteredData = filteredData.filter(filteredData => filteredData.city === inputValue3.toLowerCase());
    };

    if (inputValue4 !== ''){
        filteredData = filteredData.filter(filteredData => filteredData.state === inputValue4.toLowerCase());
    };

    if (inputValue5 !== ''){
        filteredData = filteredData.filter(filteredData => filteredData.shape == inputValue5.toLowerCase());
    };

  console.log(filteredData);

  var ufoTableBody = d3.select("tbody");
    ufoTableBody.html("");
    var tbody = d3.select("tbody");
    filteredData.forEach((ufo) => {
      var row = tbody.append("tr");
      Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });

    if (filteredData.length === 0 ) {
        alert("Nothing here! Try again!")
    };

//   if (inputValue1 === '') {
//     var tbody = d3.select("tbody");
//     tableData.forEach((ufo) => {
//       var row = tbody.append("tr");
//       Object.entries(ufo).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//       });
//     });

//   } else {
//     var ufoTableBody = d3.select("tbody");
//     ufoTableBody.html("");
//     var tbody = d3.select("tbody");
//     filteredData.forEach((ufo) => {
//       var row = tbody.append("tr");
//       Object.entries(ufo).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//       });
//     });
//   };


   
};



