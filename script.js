
//Buttons
var btnClear = document.getElementById('clear_button');
var btnReplace = document.getElementById('replace_button');

var btnArea = document.getElementById('area_button');
var btnBitsAndBytes = document.getElementById('bits_bytes_button');
var btnCurrency = document.getElementById('currency_button');
var btnEnergy = document.getElementById('energy_button');
var btnLength = document.getElementById('length_button');
var btnVolume = document.getElementById('volume_button');
var btnTime = document.getElementById('time_button');
var btnWeight = document.getElementById('weight_button');

//Input fields
var firstInputField = document.getElementById('first_input_field');
var secondInputField = document.getElementById('second_input_field');

//Dropdown lists
var firstSelectElement = document.getElementById('first_select_element');
var secondSelectElement = document.getElementById('second_select_element');

btnClear.onclick = function() {
  firstInputField.value = 0;
  secondInputField.value = 0;
};

firstInputField.oninput = function() {
   var firstInputFieldNumber = document.getElementById('first_input_field').value;
   var valueOfFirstSelect = firstSelectElement.options[firstSelectElement.selectedIndex].value;
   var resultOfTop = firstInputFieldNumber * valueOfFirstSelect;

   var valueOfSecondSelect = secondSelectElement.options[secondSelectElement.selectedIndex].value;
   var totalResult = resultOfTop/valueOfSecondSelect;

   secondInputField.value = totalResult;
}

secondInputField.oninput = function() {

    //Value of bottom
    var valueOfSecondSelect = secondSelectElement.options[secondSelectElement.selectedIndex].value;
    var secondInputField = document.getElementById('second_input_field').value;
    var bottomResult = valueOfSecondSelect * secondInputField;

    //Value of top
    var valueOfFirstSelect = firstSelectElement.options[firstSelectElement.selectedIndex].value;

    var totalResult = bottomResult / valueOfFirstSelect;
    firstInputField.value = totalResult;
}

//Area values
var areaValues = [{value:1, name:"Square millimeter"}, {value:100, name:"Square centimeter"},
{value:645.16, name:"Square inch"}, {value:92903.04, name:"Square foot"}, {value:836127.36, name:"Square yard"},
{value:1000000, name:"Square meter"}, {value:10000000000, name:"Hectare"}, {value:4046856422.4, name:"Acre"},
{value:2589988110336, name:"Square mile"}];

//Bits and bytes values
var bitsBytesValues = [{value:1, name:"Bits"}, {value:8, name:"Bytes"}, {value:1024, name:"Kilobits"},
{value:8192, name:"Kilobytes"}, {value:1048576, name:"Megabits"}, {value:8388608, name:"Megabytes"},
{value:1073741824, name:"Gigabits"}, {value:8589934592, name:"Gigabytes"}, {value:8796093022208, name:"Terabytes"}];

//Length values
var lengthValues = [{value:1, name:"Millimetre"}, {value:10, name:"Centimeter"}, {value:25.4, name:"Inch"},
{value:100, name:"Decimeter"}, {value:304.8, name:"Foot"}, {value:914.4, name:"Yard"},
{value:1000, name:"Meter"}, {value:1000000, name:"Kilometer"}, {value:1609344, name:"Mile"}];

//Time values
var timeValues = [{value:1, name:"Microseconds"}, {value:1000, name:"Milliseconds"},
{value:1000000, name:"Seconds"}, {value:60000000, name:"Minutes"}, {value:3600000000, name:"Hours"},
{value:86400000000, name:"Days"}, {value:604800000000, name:"Weeks"}, {value:2628000000000, name:"Months"},
{value:31536000000000, name:"Years"}];

//Weight values
var weightValues = [{value:1, name:"Milligrams"}, {value:200, name:"Carats"}, {value:1000, name:"Grams"},
{value:28349.523125, name:"Ounces"}, {value:453592.37, name:"Pounds"}, {value:1000000, name:"Kilograms"},
{value:1000000000, name:"Tons"}, {value:1000000000000, name:"Kilotons"}];

//Currency values
var currencyValues = [{value:1, name:"JPY(Japanese Yen)"}, {value:1.6972035433, name:"INR(Indian Rupee)"},
{value:5.8625617464, name:"MXN(Mexican Peso)"}, {value:16.125812078, name:"CNY(Chinese Yuan)"}, 
{value:83.26843557, name:"CAD(Canadian Dollar)"}, {value:84.78106859, name:"AUD(Australian Dollar)"},
{value:111.04395455, name:"USD(United States Dollar)"}, {value:111.83451272, name:"CHF(Swiss Franc)"},
{value:119.71697017, name:"EUR(Euro)"}, {value:138.97483993, name:"GBP(British Pound Sterling)"}];

//Energy values
var energyValues = [{value:1, name:"Joule"}, {value:1000, name:"Kilojoule"}, {value:1000000, name:"Megajoule"}];

//Volume values
var volumeValues = [{value:1, name:"Cubic Centimeter"}, {value:1, name:"Milliliter"}, {value:236.5882365, name:"Cup"},
{value:473.176473, name:"Pint"},{value:1000, name:"Liter"}, {value:3785.411784, name:"Gallon"},
{value:158987.29493, name:"Barrel"}, {value:1000000, name:"Cubic Meter"}, 
{value:1000000000000000, name:"Cubic Kilometer"}];

btnLength.onclick = function() {
    populateDropDowns(lengthValues) };

btnArea.onclick = function() {
    populateDropDowns(areaValues) };

btnBitsAndBytes.onclick = function() {
    populateDropDowns(bitsBytesValues) };

btnTime.onclick = function() {
    populateDropDowns(timeValues) };

btnWeight.onclick = function() {
    populateDropDowns(weightValues) };

btnCurrency.onclick = function() {
    populateDropDowns(currencyValues) };

btnEnergy.onclick = function() {
    populateDropDowns(energyValues) };

btnVolume.onclick = function() {
    populateDropDowns(volumeValues) };

function populateDropDowns(valuesList) {
    firstSelectElement.options.length = 0;
    secondSelectElement.options.length = 0;

    for(var i = 0; i < valuesList.length; i++) {
    var valueName = valuesList[i].name;
    var exactValue = valuesList[i].value;
    var el1 = document.createElement("option");
    el1.textContent = valueName;
    el1.value = exactValue;

    var el2 = document.createElement("option");
    el2.textContent = valueName;
    el2.value = exactValue;

    secondSelectElement.appendChild(el2);
    firstSelectElement.appendChild(el1);

     firstInputField.value = 0;
     secondInputField.value = 0;
    }
}

function whenLoaded() {
    populateDropDowns(areaValues);
    firstInputField.value = 0;
    secondInputField.value = 0;
}

btnReplace.onclick = function() {
   var firstIndex = firstSelectElement.selectedIndex;
   var secondIndex = secondSelectElement.selectedIndex;

   var firstInputValue = firstInputField.value;
   var secondInputValue = secondInputField.value;

   firstSelectElement.selectedIndex = secondIndex;
   secondSelectElement.selectedIndex = firstIndex;

   firstInputField.value = secondInputValue;
   secondInputField.value = firstInputValue;
}


