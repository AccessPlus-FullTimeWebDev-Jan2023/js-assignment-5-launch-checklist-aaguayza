// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if(testInput === ""){
    return "Empty"
   }else if(isNaN(Number(testInput))){
    return "Not a Number"
   }else if(!isNaN(Number(testInput))){
    return "Is a Number"
   }
}
// console.log(validateInput("999"))

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log(`Document input: ${validateInput(document)}`)
    console.log(`List input: ${validateInput(list)}`)
    console.log(`Pilot input: ${validateInput(pilot)}`)
    console.log(`Copilot input: ${validateInput(copilot)}`)
    console.log(`Fuel level input: ${validateInput(fuelLevel)}`)
    console.log(`Cargo level input ${validateInput(cargoLevel)}`)
}
formSubmission('something','something else','999','','hellp','000')

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
